// =============================================================================
// NPCs Script - Estação Agulhas Negras (Updated with New Data System)
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

class NPCManager {
    constructor() {
        this.allNPCs = [];
        this.filteredNPCs = [];
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.imageManager = null;
        this.dataSystem = null;
        
        this.init();
    }

    init() {
        this.loadAllNPCs();
        this.initializeDataSystem();
        this.setupEventListeners();
        this.initializeImageManager();
        this.renderNPCs();
    }

    // =========================================================================
    // DATA LOADING - Updated for New System
    // =========================================================================
    
    loadAllNPCs() {
        // Try to load from new modular system first
        if (window.SCIENTISTS_DATA && window.SUPPORT_DATA && window.SECURITY_DATA && window.DEPENDENTS_DATA) {
            this.allNPCs = [
                ...window.SCIENTISTS_DATA,
                ...window.SUPPORT_DATA,
                ...window.SECURITY_DATA,
                ...window.DEPENDENTS_DATA
            ];
            console.log('✅ Carregando dados do novo sistema modular');
        }
        // Fallback to old system
        else if (window.NPCS_DATA) {
            this.allNPCs = [
                ...(NPCS_DATA.scientistas || NPCS_DATA.cientificos || []),
                ...NPCS_DATA.suporte,
                ...NPCS_DATA.seguranca,
                ...NPCS_DATA.dependentes
            ];
            console.log('⚠️ Usando sistema de dados antigo como fallback');
        }
        else {
            console.error('❌ Nenhum sistema de dados encontrado!');
            this.allNPCs = [];
        }
        
        this.filteredNPCs = [...this.allNPCs];
        console.log(`📊 Total de NPCs carregados: ${this.allNPCs.length}`);
    }

    initializeDataSystem() {
        // Initialize new data system if available
        if (window.ESTACAO_API) {
            this.dataSystem = window.ESTACAO_API;
            console.log('✅ Sistema de dados avançado inicializado');
        } else if (window.NPC_FUNCTIONS) {
            this.dataSystem = window.NPC_FUNCTIONS;
            console.log('✅ Funções de dados básicas inicializadas');
        }
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

        // Enhanced keyboard shortcuts
        this.setupKeyboardShortcuts();
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + F for search focus
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault();
                document.getElementById('search-input').focus();
            }
            
            // Ctrl/Cmd + E for export
            if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
                e.preventDefault();
                this.exportToJSON();
            }
            
            // Ctrl/Cmd + I for image stats
            if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
                e.preventDefault();
                this.showImageStats();
            }
            
            // Ctrl/Cmd + Shift + R for refresh images
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
                e.preventDefault();
                this.refreshImages();
            }

            // Ctrl/Cmd + R for generate report (new feature)
            if ((e.ctrlKey || e.metaKey) && e.key === 'r' && !e.shiftKey) {
                e.preventDefault();
                this.generateStationReport();
            }

            // Ctrl/Cmd + G for random NPC (new feature)
            if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
                e.preventDefault();
                this.showRandomNPC();
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

        // Enhanced search filter with new data fields
        if (this.searchTerm) {
            filtered = filtered.filter(npc => {
                const searchableText = [
                    npc.nome,
                    npc.profissao,
                    npc.personalidade,
                    ...(npc.pericias || []),
                    ...(npc.equipamentos || []),
                    npc.biografia || '',
                    npc.descricaoFisica || '',
                    ...(npc.relacionamentos || []),
                    ...(npc.motivacoes || []),
                    ...(npc.medos || [])
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
    // ENHANCED DATA ACCESS METHODS
    // =========================================================================

    getNPCById(id) {
        if (this.dataSystem && this.dataSystem.buscar) {
            return this.dataSystem.buscar(id);
        }
        return this.allNPCs.find(n => n.id === id);
    }

    getNPCRelationships(npcId) {
        if (this.dataSystem && this.dataSystem.relacionamentos) {
            const relationships = this.dataSystem.relacionamentos(npcId);
            return this.formatRelationships(relationships);
        }
        
        // Fallback to basic relationships
        const npc = this.getNPCById(npcId);
        return npc?.relacionamentos || [];
    }

    formatRelationships(relationships) {
        const formatted = [];
        
        if (relationships.familia && relationships.familia[1]) {
            formatted.push(`👨‍👩‍👧‍👦 Família: ${relationships.familia[1].tipo} (${relationships.familia[1].membros.length} membros)`);
        }
        
        if (relationships.alianças && relationships.alianças.length > 0) {
            relationships.alianças.forEach(alianca => {
                formatted.push(`🤝 ${alianca.nome}: ${alianca.descrição}`);
            });
        }
        
        if (relationships.tensoes && relationships.tensoes.length > 0) {
            relationships.tensoes.forEach(tensao => {
                formatted.push(`⚡ Tensão: ${tensao.motivo} (${tensao.intensidade})`);
            });
        }
        
        return formatted;
    }

    getNPCConditions(npcId) {
        if (this.dataSystem && this.dataSystem.condicoes) {
            return this.dataSystem.condicoes(npcId);
        }
        
        // Fallback to global conditions if available
        if (window.CONDICOES_ESPECIAIS) {
            return window.CONDICOES_ESPECIAIS.filter(cond => cond.personagem === npcId);
        }
        
        return [];
    }

    getAdventureHooks(npcId) {
        if (this.dataSystem && this.dataSystem.ganchos) {
            return this.dataSystem.ganchos(npcId);
        }
        return [];
    }

    // =========================================================================
    // IMAGE METHODS
    // =========================================================================

    getImageHTML(npcId, className = 'npc-photo', size = 'medium') {
        if (this.imageManager) {
            return this.imageManager.getImageHTML(npcId, className, size);
        }
        
        // Enhanced fallback with visual prompts
        const npc = this.getNPCById(npcId);
        const icon = this.getCategoryIcon(npc?.categoria);
        const visualPrompt = npc?.visualPrompt;
        
        let fallbackHTML = `<div class="${className} placeholder" data-npc-id="${npcId}">${icon}</div>`;
        
        if (visualPrompt) {
            fallbackHTML = `<div class="${className} placeholder" data-npc-id="${npcId}" title="${this.truncateText(visualPrompt, 100)}">${icon}</div>`;
        }
        
        return fallbackHTML;
    }

    refreshImages() {
        if (this.imageManager) {
            this.imageManager.refreshAllImages();
        }
        console.log('🔄 Atualizando imagens...');
    }

    // =========================================================================
    // RENDERING METHODS - Enhanced
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
        const categoryIcon = this.getCategoryIcon(npc.categoria);
        const imageHTML = this.getImageHTML(npc.id, 'npc-photo', 'medium');
        const hasNewData = !!(npc.biografia || npc.descricaoFisica);
        
        return `
            <div class="npc-card ${npc.categoria}" data-npc-id="${npc.id}">
                ${hasNewData ? '<div class="enhanced-badge">📖</div>' : ''}
                <div class="npc-photo-section">
                    ${imageHTML}
                    <div class="npc-header">
                        <div class="npc-header-top">
                            <div class="npc-header-info">
                                <h3 class="npc-name">${npc.nome}</h3>
                                <p class="npc-profession">${npc.profissao}</p>
                                ${npc.altura ? `<p class="npc-height">📏 ${npc.altura}</p>` : ''}
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
                ${this.dataSystem ? '<p><small>💡 Use Ctrl+G para ver um NPC aleatório</small></p>' : ''}
            </div>
        `;
    }

    // =========================================================================
    // ENHANCED MODAL METHODS
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
        const npc = this.getNPCById(npcId);
        if (!npc) return;

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = this.renderModalContent(npc);
        
        const modal = document.getElementById('npc-modal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('npc-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    renderModalContent(npc) {
        const categoryIcon = this.getCategoryIcon(npc.categoria);
        const relacionamentos = this.getNPCRelationships(npc.id);
        const condicoes = this.getNPCConditions(npc.id);
        const ganchos = this.getAdventureHooks(npc.id);
        const imageHTML = this.getImageHTML(npc.id, 'modal-photo', 'large');
        
        return `
            <div class="modal-header">
                ${imageHTML}
                <div class="modal-header-info">
                    <h2>${npc.nome}</h2>
                    <p><strong>${npc.profissao}</strong></p>
                    ${npc.altura ? `<p>📏 ${npc.altura}</p>` : ''}
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

            ${npc.descricaoFisica ? `
                <div class="personality-traits">
                    <h4>👤 Descrição Física</h4>
                    <p>${npc.descricaoFisica}</p>
                </div>
            ` : (npc.detalhes ? `
                <div class="personality-traits">
                    <h4>👤 Descrição Física</h4>
                    <p>${npc.detalhes}</p>
                </div>
            ` : '')}

            ${npc.biografia ? `
                <div class="personality-traits">
                    <h4>📖 Biografia</h4>
                    <p>${npc.biografia}</p>
                </div>
            ` : (npc.historia ? `
                <div class="personality-traits">
                    <h4>📖 História</h4>
                    <p>${npc.historia}</p>
                </div>
            ` : '')}

            ${npc.motivacoes && npc.motivacoes.length > 0 ? `
                <div class="equipment-list">
                    <h4>🎯 Motivações</h4>
                    <ul>
                        ${npc.motivacoes.map(mot => `<li>${mot}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${npc.medos && npc.medos.length > 0 ? `
                <div class="equipment-list">
                    <h4>😨 Medos</h4>
                    <ul>
                        ${npc.medos.map(medo => `<li>${medo}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${npc.segredos && npc.segredos.length > 0 ? `
                <div class="personality-traits">
                    <h4>🤐 Segredos</h4>
                    <ul>
                        ${npc.segredos.map(segredo => `<li>${segredo}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

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

            ${ganchos.length > 0 ? `
                <div class="equipment-list">
                    <h4>🎲 Ganchos de Aventura</h4>
                    <ul>
                        ${ganchos.map(gancho => `<li><strong>${gancho.título}:</strong> ${gancho.descrição}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${npc.visualPrompt ? `
                <div class="personality-traits">
                    <h4>🎨 Prompt Visual</h4>
                    <p><small>${npc.visualPrompt}</small></p>
                </div>
            ` : ''}
        `;
    }

    // =========================================================================
    // NEW FEATURES
    // =========================================================================

    showRandomNPC() {
        if (this.dataSystem && this.dataSystem.aleatorio) {
            const randomNPC = this.dataSystem.aleatorio();
            if (randomNPC) {
                this.openModal(randomNPC.id);
                return;
            }
        }
        
        // Fallback to basic random selection
        const randomIndex = Math.floor(Math.random() * this.allNPCs.length);
        const randomNPC = this.allNPCs[randomIndex];
        if (randomNPC) {
            this.openModal(randomNPC.id);
        }
    }

    generateStationReport() {
        if (this.dataSystem && this.dataSystem.relatorio) {
            const report = this.dataSystem.relatorio();
            console.group('📊 Relatório da Estação Agulhas Negras');
            console.log('População:', report.estatisticas?.populacao_total || this.allNPCs.length);
            console.log('Capacidades:', report.capacidades);
            console.log('Recursos:', report.recursos);
            console.groupEnd();
            
            // Show in modal or alert
            alert(`📊 Relatório gerado! Verifique o console para detalhes.\n\nPopulação: ${report.estatisticas?.populacao_total || this.allNPCs.length} sobreviventes`);
        } else {
            console.log('📊 Relatório Básico:', {
                total_npcs: this.allNPCs.length,
                por_categoria: {
                    cientificos: this.allNPCs.filter(n => n.categoria === 'cientificos').length,
                    suporte: this.allNPCs.filter(n => n.categoria === 'suporte').length,
                    seguranca: this.allNPCs.filter(n => n.categoria === 'seguranca').length,
                    dependentes: this.allNPCs.filter(n => n.categoria === 'dependentes').length
                }
            });
        }
    }

    // =========================================================================
    // UTILITY METHODS
    // =========================================================================
    
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

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
        console.log(`🔍 Total de NPCs: ${stats.total}`);
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
// ADDITIONAL UTILITIES - Enhanced
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
        if (!npcManager) return null;
        
        let npcs = npcManager.allNPCs;
        
        if (category) {
            npcs = npcs.filter(npc => npc.categoria === category);
        }
        
        return npcs[Math.floor(Math.random() * npcs.length)];
    }

    // New utility methods for enhanced system
    static calculateCompatibility(npc1Id, npc2Id) {
        const npcManager = window.npcManager;
        if (npcManager?.dataSystem?.compatibilidade) {
            return npcManager.dataSystem.compatibilidade(npc1Id, npc2Id);
        }
        return 50; // neutral compatibility
    }

    static findSpecialists(area) {
        const npcManager = window.npcManager;
        if (npcManager?.dataSystem?.especialistas) {
            return npcManager.dataSystem.especialistas(area);
        }
        
        // Fallback search
        return npcManager?.allNPCs.filter(npc => 
            npc.pericias.some(pericia => 
                pericia.toLowerCase().includes(area.toLowerCase())
            )
        ) || [];
    }

    static generateRandomEvent() {
        const events = [
            { type: 'Calmaria', description: 'Um dia tranquilo na estação' },
            { type: 'Problema Técnico', description: 'Falha menor em equipamento' },
            { type: 'Tensão Social', description: 'Conflito entre NPCs' },
            { type: 'Descoberta', description: 'Algo interessante encontrado' },
            { type: 'Ameaça Externa', description: 'Sinais de perigo' },
            { type: 'Emergência', description: 'Situação crítica' }
        ];
        
        return events[Math.floor(Math.random() * events.length)];
    }
}

// =============================================================================
// ENHANCED STYLE INJECTION
// =============================================================================

const injectEnhancedStyles = () => {
    if (document.querySelector('#npc-enhanced-styles')) return;
    
    const styles = `
        /* Enhanced badge for NPCs with new data */
        .enhanced-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #4caf50;
            color: white;
            padding: 2px 6px;
            border-radius: 12px;
            font-size: 0.7rem;
            z-index: 10;
        }

        /* Height display */
        .npc-height {
            font-size: 0.8rem;
            color: var(--text-muted);
            margin: 0;
        }

        /* Enhanced modal sections */
        .modal-section {
            margin: var(--spacing-lg) 0;
            padding: var(--spacing-md);
            background: var(--secondary-bg);
            border-radius: var(--radius-md);
            border-left: 4px solid var(--accent-color);
        }

        .modal-section h4 {
            margin-bottom: var(--spacing-sm);
            color: var(--accent-color);
        }

        /* Visual prompt styling */
        .visual-prompt {
            font-family: monospace;
            font-size: 0.8rem;
            background: var(--primary-bg);
            padding: var(--spacing-sm);
            border-radius: var(--radius-sm);
            max-height: 100px;
            overflow-y: auto;
        }

        /* Compatibility indicator */
        .compatibility-high { color: #4caf50; }
        .compatibility-medium { color: #ff9800; }
        .compatibility-low { color: #f44336; }

        /* Loading states */
        .loading {
            opacity: 0.6;
            pointer-events: none;
        }

        .loading::after {
            content: '⏳';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
        }

        /* Search highlighting */
        mark {
            background-color: var(--accent-color);
            color: var(--primary-bg);
            padding: 1px 2px;
            border-radius: 2px;
        }

        /* Status indicators */
        .status-online { color: #4caf50; }
        .status-busy { color: #ff9800; }
        .status-offline { color: #f44336; }

        /* New system indicator */
        .new-system-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--accent-color);
            color: var(--primary-bg);
            padding: var(--spacing-sm);
            border-radius: var(--radius-md);
            font-size: 0.8rem;
            z-index: 1000;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        /* Keyboard shortcut hints */
        .shortcut-hint {
            position: fixed;
            bottom: 60px;
            right: 20px;
            background: var(--secondary-bg);
            color: var(--text-secondary);
            padding: var(--spacing-xs);
            border-radius: var(--radius-sm);
            font-size: 0.7rem;
            opacity: 0.8;
            z-index: 999;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'npc-enhanced-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
};

// =============================================================================
// SYSTEM COMPATIBILITY CHECKER
// =============================================================================

const checkSystemCompatibility = () => {
    const compatibility = {
        oldSystem: !!window.NPCS_DATA,
        newModular: !!(window.SCIENTISTS_DATA && window.SUPPORT_DATA),
        advancedAPI: !!window.ESTACAO_API,
        imageManager: !!window.NPCImageManager,
        relationships: !!(window.RELATIONSHIPS_DATA || window.RELATIONSHIP_FUNCTIONS),
        adventures: !!(window.ADVENTURE_DATA || window.ADVENTURE_FUNCTIONS)
    };

    console.group('🔍 Verificação de Compatibilidade do Sistema');
    console.log('Sistema Antigo (NPCS_DATA):', compatibility.oldSystem ? '✅' : '❌');
    console.log('Sistema Modular Novo:', compatibility.newModular ? '✅' : '❌');
    console.log('API Avançada (ESTACAO_API):', compatibility.advancedAPI ? '✅' : '❌');
    console.log('Gerenciador de Imagens:', compatibility.imageManager ? '✅' : '❌');
    console.log('Sistema de Relacionamentos:', compatibility.relationships ? '✅' : '❌');
    console.log('Sistema de Aventuras:', compatibility.adventures ? '✅' : '❌');
    console.groupEnd();

    return compatibility;
};

// =============================================================================
// MIGRATION HELPER
// =============================================================================

const createMigrationHelper = () => {
    return {
        // Convert old format to new format
        convertOldToNew: (oldNPC) => {
            return {
                ...oldNPC,
                descricaoFisica: oldNPC.detalhes || '',
                biografia: oldNPC.historia || '',
                altura: oldNPC.altura || 'Não informado',
                motivacoes: [],
                medos: [],
                segredos: [],
                visualPrompt: ''
            };
        },

        // Check if NPC has new format data
        hasNewFormat: (npc) => {
            return !!(npc.biografia || npc.descricaoFisica || npc.motivacoes || npc.medos);
        },

        // Generate missing visual prompts
        generateVisualPrompt: (npc) => {
            const category = npc.categoria;
            const age = npc.idade;
            const gender = npc.nome.includes('Ana') || npc.nome.includes('Elena') ? 'female' : 'male';
            
            return `${age}-year-old Brazilian ${gender} ${npc.profissao.toLowerCase()}, ${category} category, post-apocalyptic survivor, realistic portrait style`;
        }
    };
};

// =============================================================================
// INITIALIZATION - Enhanced
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Check system compatibility
    const compatibility = checkSystemCompatibility();
    
    // Inject enhanced styles
    injectEnhancedStyles();
    
    // Create migration helper
    const migrationHelper = createMigrationHelper();
    window.migrationHelper = migrationHelper;
    
    // Initialize NPC Manager with enhanced features
    window.npcManager = new NPCManager();
    window.NPCUtils = NPCUtils;
    
    // Show system status indicator
    if (compatibility.newModular || compatibility.advancedAPI) {
        const indicator = document.createElement('div');
        indicator.className = 'new-system-indicator';
        indicator.innerHTML = '🚀 Sistema Aprimorado Ativo';
        document.body.appendChild(indicator);
        
        // Remove indicator after 5 seconds
        setTimeout(() => {
            if (indicator.parentNode) {
                indicator.parentNode.removeChild(indicator);
            }
        }, 5000);
    }

    // Show keyboard shortcuts hint
    const shortcutHint = document.createElement('div');
    shortcutHint.className = 'shortcut-hint';
    shortcutHint.innerHTML = 'Pressione Ctrl+G para NPC aleatório';
    document.body.appendChild(shortcutHint);

    // Remove hint after 8 seconds
    setTimeout(() => {
        if (shortcutHint.parentNode) {
            shortcutHint.parentNode.removeChild(shortcutHint);
        }
    }, 8000);

    // Console welcome message
    console.group('🏔️ Sistema de NPCs da Estação Agulhas Negras');
    console.log('📊 Total de NPCs:', window.npcManager.allNPCs.length);
    console.log('🔧 Sistema:', compatibility.newModular ? 'Modular Avançado' : 'Clássico');
    console.log('🎲 Use NPCUtils.rollSkill(valor) para testar perícias');
    console.log('🧠 Use NPCUtils.sanityCheck(sanidade, perda) para testes de sanidade');
    console.log('🎯 Use NPCUtils.findSpecialists(area) para encontrar especialistas');
    console.log('📈 Use NPCUtils.calculateCompatibility(id1, id2) para compatibilidade');
    console.log('🎲 Use NPCUtils.generateRandomEvent() para eventos aleatórios');
    console.log('');
    console.log('⌨️ Atalhos do Teclado:');
    console.log('  Ctrl+F: Focar na busca');
    console.log('  Ctrl+E: Exportar dados');
    console.log('  Ctrl+I: Estatísticas de imagens');
    console.log('  Ctrl+G: NPC aleatório');
    console.log('  Ctrl+R: Relatório da estação');
    console.log('  Ctrl+Shift+R: Atualizar imagens');
    console.groupEnd();
});

// =============================================================================
// GLOBAL API EXPOSURE
// =============================================================================

// Make enhanced functions available globally
window.checkSystemCompatibility = checkSystemCompatibility;
window.createMigrationHelper = createMigrationHelper;

// Backward compatibility aliases
window.getNPCById = (id) => window.npcManager?.getNPCById(id);
window.getRandomNPC = (category) => NPCUtils.getRandomNPC(category);
window.rollSkill = NPCUtils.rollSkill;
window.rollAttribute = NPCUtils.rollAttribute;