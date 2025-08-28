// =============================================================================
// NPC Image Manager - Standalone Version
// For Sky Harbour NPCs System
// =============================================================================

class NPCImageManager {
    constructor() {
        this.imageBasePath = 'images/npcs/';
        this.defaultPlaceholder = '👤';
        this.imageCache = new Map();
        this.missingImages = new Set();
        this.loadingImages = new Set();
        
        this.init();
    }

    init() {
        this.setupImageErrorHandling();
        // Defer preloading to allow NPC Manager to initialize first
        setTimeout(() => this.preloadImages(), 100);
    }

    // =========================================================================
    // IMAGE PATH METHODS
    // =========================================================================
    
    getImagePath(npcId) {
        return `${this.imageBasePath}${npcId}.png`;
    }

    getImageUrl(npcId) {
        if (this.missingImages.has(npcId)) {
            return null;
        }
        return this.getImagePath(npcId);
    }

    // =========================================================================
    // IMAGE LOADING METHODS
    // =========================================================================
    
    async preloadImages() {
        const allNPCs = this.getAllNPCs();
        if (!allNPCs.length) {
            console.warn('⚠️ Nenhum NPC encontrado para carregar imagens');
            return;
        }

        console.log(`📸 Carregando ${allNPCs.length} imagens de NPCs...`);
        
        const loadPromises = allNPCs.map(npc => this.preloadImage(npc.id));
        const results = await Promise.allSettled(loadPromises);
        
        const successful = results.filter(r => r.status === 'fulfilled' && r.value).length;
        const failed = results.filter(r => r.status === 'fulfilled' && !r.value).length;
        
        console.log(`✅ Imagens carregadas: ${successful}/${allNPCs.length}`);
        if (failed > 0) {
            console.log(`❌ Imagens não encontradas: ${failed}`);
            this.generateMissingImagesList();
        }
    }

    async preloadImage(npcId) {
        if (this.loadingImages.has(npcId)) return false;
        
        this.loadingImages.add(npcId);
        
        return new Promise((resolve) => {
            const img = new Image();
            const imagePath = this.getImagePath(npcId);
            
            const timeout = setTimeout(() => {
                this.missingImages.add(npcId);
                this.loadingImages.delete(npcId);
                resolve(false);
            }, 5000); // 5 second timeout
            
            img.onload = () => {
                clearTimeout(timeout);
                this.imageCache.set(npcId, imagePath);
                this.loadingImages.delete(npcId);
                resolve(true);
            };
            
            img.onerror = () => {
                clearTimeout(timeout);
                this.missingImages.add(npcId);
                this.loadingImages.delete(npcId);
                resolve(false);
            };
            
            img.src = imagePath;
        });
    }

    setupImageErrorHandling() {
        // Global image error handler for dynamically loaded images
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG' && e.target.src.includes(this.imageBasePath)) {
                const npcId = this.extractNPCIdFromSrc(e.target.src);
                if (npcId) {
                    this.handleImageError(e.target, npcId);
                }
            }
        }, true);
    }

    extractNPCIdFromSrc(src) {
        const match = src.match(/\/([^\/]+)\.png$/);
        return match ? match[1] : null;
    }

    handleImageError(imgElement, npcId) {
        if (!this.missingImages.has(npcId)) {
            this.missingImages.add(npcId);
            console.warn(`❌ Imagem não encontrada: ${this.getImagePath(npcId)}`);
        }
        this.setPlaceholderImage(imgElement, npcId);
    }

    // =========================================================================
    // IMAGE RENDERING METHODS
    // =========================================================================
    
    createImageElement(npcId, className = 'npc-photo', size = 'medium') {
        const img = document.createElement('img');
        const imageUrl = this.getImageUrl(npcId);
        
        img.className = `${className} img-${size}`;
        img.alt = this.getNPCName(npcId);
        
        if (imageUrl) {
            img.src = imageUrl;
            img.onerror = () => this.handleImageError(img, npcId);
        } else {
            return this.createPlaceholderDiv(npcId, `${className} placeholder`, size);
        }
        
        return img;
    }

    createPlaceholderDiv(npcId, className = 'npc-photo placeholder', size = 'medium') {
        const div = document.createElement('div');
        div.className = `${className} img-${size}`;
        
        const npc = this.getNPCById(npcId);
        const icon = this.getCategoryIcon(npc?.categoria);
        
        div.innerHTML = icon || this.defaultPlaceholder;
        div.title = `Imagem não encontrada: ${this.getNPCName(npcId)}`;
        
        return div;
    }

    setPlaceholderImage(element, npcId) {
        const npc = this.getNPCById(npcId);
        const icon = this.getCategoryIcon(npc?.categoria);
        
        if (element.tagName === 'IMG') {
            // Replace img with div placeholder
            const placeholder = this.createPlaceholderDiv(npcId, element.className + ' placeholder');
            if (element.parentNode) {
                element.parentNode.replaceChild(placeholder, element);
            }
        } else {
            element.innerHTML = icon || this.defaultPlaceholder;
            element.classList.add('placeholder');
            element.title = `Imagem não encontrada: ${this.getNPCName(npcId)}`;
        }
    }

    // =========================================================================
    // PUBLIC API METHODS
    // =========================================================================
    
    hasImage(npcId) {
        return this.imageCache.has(npcId) && !this.missingImages.has(npcId);
    }

    getImageHTML(npcId, className = 'npc-photo', size = 'medium') {
        const imageUrl = this.getImageUrl(npcId);
        const npcName = this.getNPCName(npcId);
        
        if (imageUrl && !this.missingImages.has(npcId)) {
            return `<img src="${imageUrl}" alt="${npcName}" class="${className} img-${size}" 
                     onerror="window.npcImageManager?.handleImageError(this, '${npcId}')" 
                     title="${npcName}">`;
        } else {
            const npc = this.getNPCById(npcId);
            const icon = this.getCategoryIcon(npc?.categoria);
            return `<div class="${className} placeholder img-${size}" 
                     title="Imagem não encontrada: ${npcName}">${icon}</div>`;
        }
    }

    // Convenience methods for different contexts
    renderCardImage(npcId) {
        return this.getImageHTML(npcId, 'npc-photo', 'medium');
    }

    renderModalImage(npcId) {
        return this.getImageHTML(npcId, 'modal-photo', 'large');
    }

    // =========================================================================
    // UTILITY METHODS
    // =========================================================================
    
    getAllNPCs() {
        if (window.npcManager && window.npcManager.allNPCs) {
            return window.npcManager.allNPCs;
        }
        
        // Fallback: try to get from global NPCS_DATA
        if (window.NPCS_DATA) {
            return [
                ...NPCS_DATA.scientistas,
                ...NPCS_DATA.suporte,
                ...NPCS_DATA.seguranca,
                ...NPCS_DATA.dependentes
            ];
        }
        
        return [];
    }

    getNPCById(npcId) {
        const allNPCs = this.getAllNPCs();
        return allNPCs.find(npc => npc.id === npcId);
    }

    getNPCName(npcId) {
        const npc = this.getNPCById(npcId);
        return npc ? npc.nome : 'NPC Desconhecido';
    }

    getCategoryIcon(categoria) {
        const icons = {
            'cientificos': '🔬',
            'suporte': '🔧',
            'seguranca': '🛡️',
            'dependentes': '👥'
        };
        return icons[categoria] || '👤';
    }

    // =========================================================================
    // BATCH OPERATIONS
    // =========================================================================
    
    async refreshAllImages() {
        console.log('🔄 Atualizando todas as imagens...');
        
        // Clear caches
        this.imageCache.clear();
        this.missingImages.clear();
        this.loadingImages.clear();
        
        // Reload images
        await this.preloadImages();
        
        // Trigger re-render if NPC Manager is available
        if (window.npcManager && typeof window.npcManager.renderNPCs === 'function') {
            window.npcManager.renderNPCs();
        }
        
        console.log('✅ Atualização de imagens concluída');
    }

    getImageStats() {
        const allNPCs = this.getAllNPCs();
        const total = allNPCs.length;
        const loaded = this.imageCache.size;
        const missing = this.missingImages.size;
        
        return {
            total,
            loaded,
            missing,
            percentage: total > 0 ? Math.round((loaded / total) * 100) : 0
        };
    }

    generateMissingImagesList() {
        const missing = Array.from(this.missingImages).sort();
        if (missing.length === 0) {
            console.log('✅ Todas as imagens estão disponíveis!');
            return;
        }
        
        console.group(`📸 Imagens faltando (${missing.length}):`);
        missing.forEach(npcId => {
            const npc = this.getNPCById(npcId);
            console.log(`❌ ${this.getImagePath(npcId)} - ${npc?.nome || 'NPC não encontrado'}`);
        });
        console.groupEnd();
        
        // Generate file creation commands for easy copy-paste
        console.group('💡 Comandos para criar arquivos vazios:');
        missing.forEach(npcId => {
            console.log(`touch "${this.getImagePath(npcId)}"`);
        });
        console.groupEnd();
        
        // Generate list for batch download or creation
        console.group('📋 Lista de arquivos faltando:');
        const fileList = missing.map(npcId => this.getImagePath(npcId)).join('\n');
        console.log(fileList);
        console.groupEnd();
    }

    // =========================================================================
    // DEBUGGING AND MAINTENANCE
    // =========================================================================
    
    validateImagePaths() {
        const allNPCs = this.getAllNPCs();
        const issues = [];
        
        allNPCs.forEach(npc => {
            // Check for valid file names
            if (!/^[a-z0-9_-]+$/.test(npc.id)) {
                issues.push(`⚠️ ID inválido para arquivo: "${npc.id}" (${npc.nome})`);
            }
            
            // Check for potential conflicts
            const expectedPath = this.getImagePath(npc.id);
            if (expectedPath.includes('//')) {
                issues.push(`⚠️ Caminho duplicado: "${expectedPath}"`);
            }
        });
        
        if (issues.length > 0) {
            console.group('🔍 Problemas encontrados nos caminhos:');
            issues.forEach(issue => console.log(issue));
            console.groupEnd();
        } else {
            console.log('✅ Todos os caminhos de imagem são válidos');
        }
        
        return issues;
    }

    async testImageLoad(npcId) {
        console.log(`🧪 Testando carregamento da imagem: ${npcId}`);
        
        const result = await this.preloadImage(npcId);
        const imagePath = this.getImagePath(npcId);
        
        if (result) {
            console.log(`✅ Sucesso: ${imagePath}`);
        } else {
            console.log(`❌ Falhou: ${imagePath}`);
        }
        
        return result;
    }

    async testAllImages() {
        const allNPCs = this.getAllNPCs();
        console.log(`🧪 Testando ${allNPCs.length} imagens...`);
        
        const results = [];
        for (const npc of allNPCs) {
            const result = await this.testImageLoad(npc.id);
            results.push({ npcId: npc.id, nome: npc.nome, success: result });
        }
        
        const successful = results.filter(r => r.success);
        const failed = results.filter(r => !r.success);
        
        console.group('📊 Resultados do teste:');
        console.log(`✅ Sucessos: ${successful.length}`);
        console.log(`❌ Falhas: ${failed.length}`);
        console.log(`📈 Taxa de sucesso: ${Math.round((successful.length / results.length) * 100)}%`);
        console.groupEnd();
        
        if (failed.length > 0) {
            console.group('❌ Imagens que falharam:');
            failed.forEach(f => console.log(`- ${f.npcId} (${f.nome})`));
            console.groupEnd();
        }
        
        return results;
    }

    // =========================================================================
    // IMAGE UPLOAD AND MANAGEMENT (FOR FUTURE FEATURES)
    // =========================================================================
    
    createImageUploadArea(npcId, targetElement) {
        const uploadArea = document.createElement('div');
        uploadArea.className = 'image-upload-area';
        uploadArea.innerHTML = `
            <input type="file" id="upload-${npcId}" accept="image/png,image/jpg,image/jpeg" style="display: none;">
            <div class="upload-placeholder">
                <span>📷</span>
                <p>Clique para adicionar imagem</p>
                <small>PNG, JPG (máx 2MB)</small>
            </div>
        `;
        
        const fileInput = uploadArea.querySelector('input[type="file"]');
        const placeholder = uploadArea.querySelector('.upload-placeholder');
        
        placeholder.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleImageUpload(npcId, file, targetElement);
            }
        });
        
        return uploadArea;
    }

    handleImageUpload(npcId, file, targetElement) {
        // Validate file
        if (!file.type.match(/^image\/(png|jpe?g)$/)) {
            alert('Por favor, selecione apenas arquivos PNG ou JPG');
            return;
        }
        
        if (file.size > 2 * 1024 * 1024) { // 2MB
            alert('Arquivo muito grande. Máximo 2MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            // Create preview
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = targetElement.className;
            img.alt = this.getNPCName(npcId);
            
            // Replace target element
            if (targetElement.parentNode) {
                targetElement.parentNode.replaceChild(img, targetElement);
            }
            
            // Update cache (temporary - would need server integration for persistence)
            this.imageCache.set(npcId, e.target.result);
            this.missingImages.delete(npcId);
            
            console.log(`📷 Imagem carregada para ${npcId}: ${file.name}`);
        };
        
        reader.readAsDataURL(file);
    }

    // =========================================================================
    // EXPORT FUNCTIONALITY
    // =========================================================================
    
    exportImageList() {
        const allNPCs = this.getAllNPCs();
        const imageList = allNPCs.map(npc => ({
            id: npc.id,
            nome: npc.nome,
            categoria: npc.categoria,
            imagePath: this.getImagePath(npc.id),
            hasImage: this.hasImage(npc.id)
        }));
        
        const csvContent = [
            'ID,Nome,Categoria,Caminho da Imagem,Tem Imagem',
            ...imageList.map(item => 
                `"${item.id}","${item.nome}","${item.categoria}","${item.imagePath}","${item.hasImage}"`
            )
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'npc-images-list.csv');
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('📋 Lista de imagens exportada como CSV');
    }
}

// =============================================================================
// AUTO-INITIALIZATION
// =============================================================================

// Auto-initialize when script loads, but defer to allow other scripts to load first
if (typeof window !== 'undefined') {
    window.NPCImageManager = NPCImageManager;
    
    // Initialize after DOM is ready and other scripts have loaded
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!window.npcImageManager) {
                window.npcImageManager = new NPCImageManager();
                console.log('📸 NPC Image Manager inicializado automaticamente');
            }
        }, 200);
    });
}