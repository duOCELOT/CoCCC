// =============================================================================
// NPCs Script - Estação Agulhas Negras (Updated with Image Support)
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

class NPCManager {
    constructor() {
        this.allNPCs = [];
        this.filteredNPCs = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.imageManager = null;
        
        this.init();
    }

    init() {
        this.loadAllNPCs();
        this.setupEventListeners();
        this.initializeImageManager();
        this.renderNPCs();
    }

    // =========================================================================
    // DATA LOADING
    // =========================================================================
    
    loadAllNPCs() {
        this.allNPCs = [
            ...NPCS_DATA.scientistas,
            ...NPCS_DATA.suporte,
            ...NPCS_DATA.seguranca,
            ...NPCS_DATA.dependentes
        ];
        this.filteredNPCs = [...this.allNPCs];
    }

    initializeImageManager() {
        // Initialize image manager if available
        if (window.NPCImageManager) {
            this.imageManager = new window.NPCImageManager();
        }
    }

    // =========================================================================
    // EVENT LISTENERS
    // =========================================================================
    
    setupEventListeners() {
        // Category navigation
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterByCategory(category);
                this.updateActiveNavButton(e.target);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.applyFilters();
        });

        // Modal functionality
        const modal = document.getElementById('npc-modal');
        const closeBtn = document.querySelector('.close');
        
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Add refresh images shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'r' && e.shiftKey) {
                e.preventDefault();
                this.refreshImages();
            }
        });
    }

    // =========================================================================
    // FILTERING METHODS
    // =========================================================================
    
    filterByCategory(category) {
        this.currentCategory = category;
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...this.allNPCs];

        // Category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(npc => npc.categoria === this.currentCategory);
        }

        // Search filter
        if (this.searchTerm) {
            filtered = filtered.filter(npc => {
                const searchableText = [
                    npc.nome,
                    npc.profissao,
                    npc.personalidade,
                    ...npc.pericias,
                    ...npc.equipamentos
                ].join(' ').toLowerCase();
                
                return searchableText.includes(this.searchTerm);
            });
        }

        this.filteredNPCs = filtered;
        this.renderNPCs();
    }

    updateActiveNavButton(activeButton) {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    // =========================================================================
    // IMAGE METHODS
    // =========================================================================

    getImageHTML(npcId, className = 'npc-photo', size = 'medium') {
        if (this.imageManager) {
            return this.imageManager.getImageHTML(npcId, className, size);
        }
        
        // Fallback if image manager not available
        const npc = this.allNPCs.find(n => n.id === npcId);
        const icon = this.getCategoryIcon(npc?.categoria);
        return `<div class="${className} placeholder">${icon}</div>`;
    }

    refreshImages() {
        if (this.imageManager) {
            this.imageManager.refreshAllImages();
        }
        console.log('🔄 Atualizando imagens...');
    }

    // =========================================================================
    // RENDERING METHODS
    // =========================================================================
    
    renderNPCs() {
        const container = document.getElementById('npcs-container');
        
        if (this.filteredNPCs.length === 0) {
            container.innerHTML = this.renderNoResults();
            return;
        }

        const npcsHTML = this.filteredNPCs.map(npc => this.renderNPCCard(npc)).join('');
        container.innerHTML = npcsHTML;

        // Add click listeners to cards
        this.addCardClickListeners();
    }

    renderNPCCard(npc) {
        const categoryColor = this.getCategoryColor(npc.categoria);
        const categoryIcon = this.getCategoryIcon(npc.categoria);
        const imageHTML = this.getImageHTML(npc.id, 'npc-photo', 'medium');
        
        return `
            <div class="npc-card ${npc.categoria}" data-npc-id="${npc.id}">
                <div class="npc-photo-section">
                    ${imageHTML}
                    <div class="npc-header">
                        <div class="npc-header-top">
                            <div class="npc-header-info">
                                <h3 class="npc-name">${npc.nome}</h3>
                                <p class="npc-profession">${npc.profissao}</p>
                            </div>
                            <span class="npc-category category-${npc.categoria}">
                                ${categoryIcon} ${this.getCategoryName(npc.categoria)}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="npc-basic-info">
                    <div><strong>Idade:</strong> ${npc.idade} anos</div>
                    <div><strong>Status:</strong> ${this.getHealthStatus(npc)}</div>
                </div>

                <div class="npc-stats">
                    <div class="stat-item">
                        <div class="stat-label">FOR</div>
                        <div class="stat-value">${npc.atributos.FOR}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">DES</div>
                        <div class="stat-value">${npc.atributos.DES}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">INT</div>
                        <div class="stat-value">${npc.atributos.INT}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">CON</div>
                        <div class="stat-value">${npc.atributos.CON}</div>
                    </div>
                </div>

                <div class="npc-status">
                    <div class="status-item status-vida">
                        <strong>Vida:</strong> ${npc.status.pontosVida}
                    </div>
                    <div class="status-item status-sanidade">
                        <strong>Sanidade:</strong> ${npc.status.sanidade}
                    </div>
                    <div class="status-item status-sorte">
                        <strong>Sorte:</strong> ${npc.status.sorte}
                    </div>
                </div>

                <div class="npc-skills">
                    <div class="skills-title">Principais Habilidades:</div>
                    <div class="skills-list">
                        ${npc.pericias.slice(0, 3).map(skill => 
                            `<span class="skill-tag">${skill}</span>`
                        ).join('')}
                        ${npc.pericias.length > 3 ? '<span class="skill-tag">...</span>' : ''}
                    </div>
                </div>
            </div>
        `;
    }

    renderNoResults() {
        return `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <h3>Nenhum NPC encontrado</h3>
                <p>Tente ajustar os filtros ou termo de busca.</p>
            </div>
        `;
    }

    // =========================================================================
    // MODAL METHODS
    // =========================================================================
    
    addCardClickListeners() {
        const cards = document.querySelectorAll('.npc-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const npcId = card.dataset.npcId;
                this.openModal(npcId);
            });
        });
    }

    openModal(npcId) {
        const npc = this.allNPCs.find(n => n.id === npcId);
        if (!npc) return;

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = this.renderModalContent(npc);
        
        const modal = document.getElementById('npc-modal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeModal() {
        const modal = document.getElementById('npc-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    renderModalContent(npc) {
        const categoryIcon = this.getCategoryIcon(npc.categoria);
        const relacionamentos = this.getNPCRelationships(npc.id);
        const condicoes = this.getNPCConditions(npc.id);
        const imageHTML = this.getImageHTML(npc.id, 'modal-photo', 'large');
        
        return `
            <div class="modal-header">
                ${imageHTML}
                <div class="modal-header-info">
                    <h2>${npc.nome}</h2>
                    <p><strong>${npc.profissao}</strong></p>
                    <span class="npc-category category-${npc.categoria}">
                        ${categoryIcon} ${this.getCategoryName(npc.categoria)}
                    </span>
                </div>
            </div>

            <div class="npc-basic-info mb-lg">
                <div><strong>Idade:</strong> ${npc.idade} anos</div>
                <div><strong>Personalidade:</strong> ${npc.personalidade}</div>
            </div>

            <div class="modal-stats-grid">
                <div class="modal-stat-card">
                    <h4>FOR</h4>
                    <div class="stat-value">${npc.atributos.FOR}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>DES</h4>
                    <div class="stat-value">${npc.atributos.DES}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>INT</h4>
                    <div class="stat-value">${npc.atributos.INT}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>CON</h4>
                    <div class="stat-value">${npc.atributos.CON}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>APA</h4>
                    <div class="stat-value">${npc.atributos.APA}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>POD</h4>
                    <div class="stat-value">${npc.atributos.POD}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>TAM</h4>
                    <div class="stat-value">${npc.atributos.TAM}</div>
                </div>
                <div class="modal-stat-card">
                    <h4>EDU</h4>
                    <div class="stat-value">${npc.atributos.EDU}</div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
                <div class="status-item status-vida">
                    <strong>Pontos de Vida:</strong> ${npc.status.pontosVida}
                </div>
                <div class="status-item status-sanidade">
                    <strong>Sanidade:</strong> ${npc.status.sanidade}
                </div>
                <div class="status-item status-sorte">
                    <strong>Sorte:</strong> ${npc.status.sorte}
                </div>
            </div>

            <div class="equipment-list">
                <h4>🎯 Perícias Principais</h4>
                <ul>
                    ${npc.pericias.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>

            <div class="equipment-list">
                <h4>⚙️ Equipamentos</h4>
                <ul>
                    ${npc.equipamentos.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="personality-traits">
                <h4>🔍 Descrição Física</h4>
                <p>${npc.detalhes}</p>
            </div>

            <div class="personality-traits">
                <h4>📖 História</h4>
                <p>${npc.historia}</p>
            </div>

            <div class="personality-traits">
                <h4>🎭 Status Atual</h4>
                <p>${npc.statusAtual}</p>
            </div>

            ${relacionamentos.length > 0 ? `
                <div class="equipment-list">
                    <h4>👥 Relacionamentos</h4>
                    <ul>
                        ${relacionamentos.map(rel => `<li>${rel}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${condicoes.length > 0 ? `
                <div class="personality-traits">
                    <h4>⚠️ Condições Especiais</h4>
                    <ul>
                        ${condicoes.map(cond => `<li><strong>${cond.condicao}:</strong> ${cond.efeito}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
    }

    // =========================================================================
    // UTILITY METHODS
    // =========================================================================
    
    getCategoryColor(categoria) {
        const colors = {
            'cientificos': '#4fc3f7',
            'suporte': '#66bb6a',
            'seguranca': '#ef5350',
            'dependentes': '#ffb74d'
        };
        return colors[categoria] || '#cccccc';
    }

    getCategoryIcon(categoria) {
        const icons = {
            'cientificos': '🔬',
            'suporte': '🔧',
            'seguranca': '🛡️',
            'dependentes': '👥'
        };
        return icons[categoria] || '❓';
    }

    getCategoryName(categoria) {
        const names = {
            'cientificos': 'Científicos',
            'suporte': 'Suporte',
            'seguranca': 'Segurança',
            'dependentes': 'Dependentes'
        };
        return names[categoria] || 'Desconhecido';
    }

    getHealthStatus(npc) {
        const vida = npc.status.pontosVida;
        const sanidade = npc.status.sanidade;
        
        if (vida >= 70 && sanidade >= 70) return '✅ Saudável';
        if (vida >= 50 && sanidade >= 50) return '⚠️ Estável';
        if (vida >= 30 && sanidade >= 30) return '🔶 Ferido';
        return '🔴 Crítico';
    }

    getNPCRelationships(npcId) {
        const npc = this.allNPCs.find(n => n.id === npcId);
        return npc.relacionamentos || [];
    }

    getNPCConditions(npcId) {
        return CONDICOES_ESPECIAIS.filter(cond => cond.personagem === npcId);
    }

    // =========================================================================
    // SEARCH UTILITIES
    // =========================================================================
    
    highlightSearchTerm(text, term) {
        if (!term) return text;
        
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // =========================================================================
    // EXPORT METHODS
    // =========================================================================
    
    exportToJSON() {
        const dataStr = JSON.stringify(this.allNPCs, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'npcs-estacao-agulhas-negras.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }

    printNPCSheet(npcId) {
        const npc = this.allNPCs.find(n => n.id === npcId);
        if (!npc) return;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Ficha - ${npc.nome}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .header { border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
                        .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0; }
                        .stat-box { border: 1px solid #ccc; padding: 10px; text-align: center; }
                        ul { margin: 10px 0; }
                        .section { margin: 20px 0; padding: 10px; border-left: 4px solid #ff6b35; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>${npc.nome}</h1>
                        <h2>${npc.profissao}</h2>
                        <p><strong>Idade:</strong> ${npc.idade} anos | <strong>Categoria:</strong> ${this.getCategoryName(npc.categoria)}</p>
                    </div>
                    
                    <div class="stats">
                        <div class="stat-box"><strong>FOR:</strong> ${npc.atributos.FOR}</div>
                        <div class="stat-box"><strong>DES:</strong> ${npc.atributos.DES}</div>
                        <div class="stat-box"><strong>INT:</strong> ${npc.atributos.INT}</div>
                        <div class="stat-box"><strong>CON:</strong> ${npc.atributos.CON}</div>
                        <div class="stat-box"><strong>APA:</strong> ${npc.atributos.APA}</div>
                        <div class="stat-box"><strong>POD:</strong> ${npc.atributos.POD}</div>
                        <div class="stat-box"><strong>TAM:</strong> ${npc.atributos.TAM}</div>
                        <div class="stat-box"><strong>EDU:</strong> ${npc.atributos.EDU}</div>
                    </div>

                    <div class="stats">
                        <div class="stat-box"><strong>Vida:</strong> ${npc.status.pontosVida}</div>
                        <div class="stat-box"><strong>Sanidade:</strong> ${npc.status.sanidade}</div>
                        <div class="stat-box"><strong>Sorte:</strong> ${npc.status.sorte}</div>
                    </div>

                    <div class="section">
                        <h3>Perícias</h3>
                        <ul>${npc.pericias.map(skill => `<li>${skill}</li>`).join('')}</ul>
                    </div>

                    <div class="section">
                        <h3>Equipamentos</h3>
                        <ul>${npc.equipamentos.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>

                    <div class="section">
                        <h3>Personalidade</h3>
                        <p>${npc.personalidade}</p>
                    </div>

                    <div class="section">
                        <h3>Status Atual</h3>
                        <p>${npc.statusAtual}</p>
                    </div>

                    <div class="section">
                        <h3>Descrição</h3>
                        <p>${npc.detalhes}</p>
                    </div>
                </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
    }

    // =========================================================================
    // IMAGE MANAGEMENT METHODS
    // =========================================================================

    showImageStats() {
        if (!this.imageManager) {
            console.log('❌ Image Manager não está disponível');
            return;
        }

        const stats = this.imageManager.getImageStats();
        console.group('📊 Estatísticas das Imagens dos NPCs');
        console.log(`📁 Total de NPCs: ${stats.total}`);
        console.log(`✅ Imagens carregadas: ${stats.loaded}`);
        console.log(`❌ Imagens faltando: ${stats.missing}`);
        console.log(`📈 Percentual: ${stats.percentage}%`);
        console.groupEnd();
        
        if (stats.missing > 0) {
            this.imageManager.generateMissingImagesList();
        }
    }

    preloadAllImages() {
        if (this.imageManager) {
            this.imageManager.refreshAllImages();
        }
    }
}

// =============================================================================
// ADDITIONAL UTILITIES
// =============================================================================

class NPCUtils {
    static rollAttribute() {
        // Roll 3d6 * 5 for Call of Cthulhu attributes
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        const roll3 = Math.floor(Math.random() * 6) + 1;
        return (roll1 + roll2 + roll3) * 5;
    }

    static rollSkill(skillValue) {
        const roll = Math.floor(Math.random() * 100) + 1;
        const result = {
            roll: roll,
            success: roll <= skillValue,
            critical: roll <= skillValue / 5,
            fumble: roll >= 96
        };
        
        if (result.critical) result.level = 'Crítico';
        else if (result.success) result.level = 'Sucesso';
        else if (result.fumble) result.level = 'Desastre';
        else result.level = 'Falha';
        
        return result;
    }

    static sanityCheck(currentSanity, loss) {
        const newSanity = Math.max(0, currentSanity - loss);
        const isTemporaryInsane = loss >= 5;
        const isIndefiniteInsane = newSanity === 0;
        
        return {
            newSanity: newSanity,
            loss: loss,
            temporaryInsane: isTemporaryInsane,
            indefiniteInsane: isIndefiniteInsane
        };
    }

    static getRandomNPC(category = null) {
        const npcManager = window.npcManager;
        let npcs = npcManager.allNPCs;
        
        if (category) {
            npcs = npcs.filter(npc => npc.categoria === category);
        }
        
        return npcs[Math.floor(Math.random() * npcs.length)];
    }
}

// =============================================================================
// IMAGE STYLE INJECTION
// =============================================================================

const injectImageStyles = () => {
    if (document.querySelector('#npc-image-styles')) return;
    
    const styles = `
        /* Image size classes */
        .img-small { width: 40px; height: 40px; }
        .img-medium { width: 80px; height: 80px; }
        .img-large { width: 120px; height: 120px; }
        .img-xl { width: 150px; height: 150px; }

        /* Enhanced placeholder styles */
        .npc-photo.placeholder,
        .modal-photo.placeholder {
            background: linear-gradient(135deg, var(--secondary-bg) 0%, var(--card-bg) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
            font-size: 2rem;
            border: 2px dashed var(--border-color);
            transition: all 0.3s ease;
        }

        .npc-photo.placeholder:hover,
        .modal-photo.placeholder:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: scale(1.05);
        }

        /* Image loading states */
        .npc-photo, .modal-photo {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            object-fit: cover;
        }

        .npc-photo::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .npc-photo:hover::before {
            left: 100%;
        }

        /* Photo section layout improvements */
        .npc-photo-section {
            display: flex;
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-md);
            align-items: flex-start;
        }

        .npc-header {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        /* Modal header layout */
        .modal-header {
            margin-bottom: var(--spacing-lg);
            padding-bottom: var(--spacing-md);
            border-bottom: 2px solid var(--border-color);
            display: flex;
            gap: var(--spacing-lg);
            align-items: flex-start;
        }

        .modal-header-info {
            flex: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .img-medium { width: 60px; height: 60px; }
            .img-large { width: 100px; height: 100px; }
            
            .modal-header {
                flex-direction: column;
                text-align: center;
                align-items: center;
            }
            
            .npc-photo-section {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'npc-image-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
};

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inject image styles
    injectImageStyles();
    
    // Initialize NPC Manager
    window.npcManager = new NPCManager();
    window.NPCUtils = NPCUtils;
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + F for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
        
        // Ctrl/Cmd + E for export
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            window.npcManager.exportToJSON();
        }
        
        // Ctrl/Cmd + I for image stats
        if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
            e.preventDefault();
            window.npcManager.showImageStats();
        }
        
        // Ctrl/Cmd + Shift + R for refresh images
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
            e.preventDefault();
            window.npcManager.refreshImages();
        }
    });

    console.log('🏔️ Sistema de NPCs da Estação Agulhas Negras carregado!');
    console.log('📊 Total de NPCs:', window.npcManager.allNPCs.length);
    console.log('🎲 Use NPCUtils.rollSkill(valor) para testar perícias');
    console.log('🧠 Use NPCUtils.sanityCheck(sanidade, perda) para testes de sanidade');
    console.log('📸 Use Ctrl+I para ver estatísticas das imagens');
    console.log('🔄 Use Ctrl+Shift+R para atualizar imagens');
});