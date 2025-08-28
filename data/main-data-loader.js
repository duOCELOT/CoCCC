// =============================================================================
// MAIN DATA LOADER - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// Centralizes all NPC and campaign data with utility functions
// =============================================================================

// Import all data modules (uncomment when using as modules)

const SCIENTISTS_DATA = require('./scientists-data.js');
const SUPPORT_DATA = require('./support-data.js');
const SECURITY_DATA = require('./security-data.js');
const DEPENDENTS_DATA = require('./dependents-data.js');
const { RELATIONSHIPS_DATA, RELATIONSHIP_FUNCTIONS } = require('./relationships-data.js');
const { ADVENTURE_DATA, ADVENTURE_FUNCTIONS } = require('./adventure-data.js');


// =============================================================================
// UNIFIED NPC DATA STRUCTURE
// =============================================================================

const NPCS_DATA = {
    cientificos: SCIENTISTS_DATA || [],
    suporte: SUPPORT_DATA || [],
    seguranca: SECURITY_DATA || [],
    dependentes: DEPENDENTS_DATA || []
};

// =============================================================================
// CAMPAIGN STATISTICS
// =============================================================================

const ESTATISTICAS = {
    populacao_total: 23,
    por_categoria: {
        cientificos: 5,
        suporte: 8,
        seguranca: 4,
        dependentes: 6
    },
    distribuicao_idade: {
        criancas: 4,      // 8-14 anos
        jovens: 1,        // 15-25 anos
        adultos: 14,      // 26-55 anos
        idosos: 4         // 56+ anos
    },
    distribuicao_genero: {
        masculino: 12,
        feminino: 11
    },
    nivel_educacao_medio: 72,  // Média dos atributos EDU
    moral_geral: 'Estável mas preocupado',
    recursos_criticos: 5,
    ameacas_ativas: 2,
    tempo_operacao: '2 anos, 4 meses desde o apocalipse'
};

// =============================================================================
// CORE UTILITY FUNCTIONS
// =============================================================================

const NPC_FUNCTIONS = {
    
    // =========================================================================
    // BASIC SEARCH & RETRIEVAL
    // =========================================================================
    
    /**
     * Busca NPC por ID
     * @param {string} id - ID único do NPC
     * @returns {Object|null} - Dados do NPC ou null se não encontrado
     */
    buscarNPC: (id) => {
        for (let categoria in NPCS_DATA) {
            const npc = NPCS_DATA[categoria].find(n => n.id === id);
            if (npc) return npc;
        }
        return null;
    },

    /**
     * Lista NPCs por categoria
     * @param {string} categoria - categoria desejada
     * @returns {Array} - Array de NPCs da categoria
     */
    listarPorCategoria: (categoria) => {
        return NPCS_DATA[categoria] || [];
    },

    /**
     * Busca NPCs por nome (busca parcial)
     * @param {string} nome - Nome ou parte do nome
     * @returns {Array} - Array de NPCs encontrados
     */
    buscarPorNome: (nome) => {
        let resultados = [];
        for (let categoria in NPCS_DATA) {
            const encontrados = NPCS_DATA[categoria].filter(npc => 
                npc.nome.toLowerCase().includes(nome.toLowerCase())
            );
            resultados = resultados.concat(encontrados);
        }
        return resultados;
    },

    /**
     * Busca NPCs por profissão
     * @param {string} profissao - Profissão ou parte dela
     * @returns {Array} - Array de NPCs encontrados
     */
    buscarPorProfissao: (profissao) => {
        let resultados = [];
        for (let categoria in NPCS_DATA) {
            const encontrados = NPCS_DATA[categoria].filter(npc => 
                npc.profissao.toLowerCase().includes(profissao.toLowerCase())
            );
            resultados = resultados.concat(encontrados);
        }
        return resultados;
    },

    /**
     * Busca NPCs por perícia
     * @param {string} pericia - Perícia desejada
     * @returns {Array} - Array de NPCs que possuem a perícia
     */
    buscarPorPericia: (pericia) => {
        let resultados = [];
        for (let categoria in NPCS_DATA) {
            const encontrados = NPCS_DATA[categoria].filter(npc => 
                npc.pericias.some(p => 
                    p.toLowerCase().includes(pericia.toLowerCase())
                )
            );
            resultados = resultados.concat(encontrados);
        }
        return resultados;
    },

    // =========================================================================
    // RELATIONSHIP FUNCTIONS
    // =========================================================================

    /**
     * Obtém relacionamentos de um NPC
     * @param {string} npc_id - ID do NPC
     * @returns {Object} - Objeto com família, tensões e alianças
     */
    obterRelacionamentos: (npc_id) => {
        if (!RELATIONSHIP_FUNCTIONS) return null;
        
        return {
            familia: RELATIONSHIP_FUNCTIONS.saoFamilia ? 
                Object.entries(RELATIONSHIPS_DATA?.familias || {}).find(([fam, data]) => 
                    data.membros.includes(npc_id)
                ) : null,
            tensoes: RELATIONSHIPS_DATA?.tensoes?.filter(tensao => 
                tensao.personagens.includes(npc_id)
            ) || [],
            alianças: RELATIONSHIPS_DATA?.alianças?.filter(alianca => 
                alianca.membros.includes(npc_id)
            ) || []
        };
    },

    /**
     * Calcula compatibilidade entre dois NPCs
     * @param {string} npc1_id - ID do primeiro NPC
     * @param {string} npc2_id - ID do segundo NPC
     * @returns {number} - Score de compatibilidade (0-100)
     */
    calcularCompatibilidade: (npc1_id, npc2_id) => {
        if (!RELATIONSHIP_FUNCTIONS?.calcularCompatibilidade) return 50;
        return RELATIONSHIP_FUNCTIONS.calcularCompatibilidade(npc1_id, npc2_id);
    },

    // =========================================================================
    // ADVENTURE & CONDITION FUNCTIONS
    // =========================================================================

    /**
     * Verifica condições especiais de um NPC
     * @param {string} npc_id - ID do NPC
     * @returns {Array} - Array de condições especiais
     */
    verificarCondicoes: (npc_id) => {
        if (!ADVENTURE_FUNCTIONS?.verificarCondicoes) return [];
        return ADVENTURE_FUNCTIONS.verificarCondicoes(npc_id);
    },

    /**
     * Obtém ganchos de aventura envolvendo um NPC
     * @param {string} npc_id - ID do NPC
     * @returns {Array} - Array de ganchos de aventura
     */
    obterGanchosPorNPC: (npc_id) => {
        if (!ADVENTURE_FUNCTIONS?.obterGanchosPorNPC) return [];
        return ADVENTURE_FUNCTIONS.obterGanchosPorNPC(npc_id);
    },

    // =========================================================================
    // ANALYSIS FUNCTIONS
    // =========================================================================

    /**
     * Analisa distribuição de atributos
     * @param {string} atributo - Nome do atributo (FOR, DES, INT, etc.)
     * @returns {Object} - Estatísticas do atributo
     */
    analisarAtributo: (atributo) => {
        let valores = [];
        for (let categoria in NPCS_DATA) {
            for (let npc of NPCS_DATA[categoria]) {
                if (npc.atributos && npc.atributos[atributo]) {
                    valores.push(npc.atributos[atributo]);
                }
            }
        }
        
        if (valores.length === 0) return null;
        
        valores.sort((a, b) => a - b);
        const soma = valores.reduce((acc, val) => acc + val, 0);
        const media = soma / valores.length;
        const mediana = valores[Math.floor(valores.length / 2)];
        
        return {
            media: Math.round(media),
            mediana: mediana,
            minimo: valores[0],
            maximo: valores[valores.length - 1],
            total_npcs: valores.length
        };
    },

    /**
     * Identifica especialistas em uma área
     * @param {string} area - Área de especialização
     * @returns {Array} - NPCs especialistas ordenados por competência
     */
    identificarEspecialistas: (area) => {
        let especialistas = [];
        
        for (let categoria in NPCS_DATA) {
            for (let npc of NPCS_DATA[categoria]) {
                if (npc.pericias) {
                    for (let pericia of npc.pericias) {
                        if (pericia.toLowerCase().includes(area.toLowerCase())) {
                            // Extrai a porcentagem da perícia
                            const match = pericia.match(/(\d+)%/);
                            const nivel = match ? parseInt(match[1]) : 0;
                            
                            especialistas.push({
                                npc: npc,
                                pericia: pericia,
                                nivel: nivel
                            });
                        }
                    }
                }
            }
        }
        
        return especialistas.sort((a, b) => b.nivel - a.nivel);
    },

    /**
     * Gera resumo de capacidades da estação
     * @returns {Object} - Resumo das capacidades por área
     */
    gerarResumoCapacidades: () => {
        const areas = [
            'Medicina', 'Ciências', 'Eletrônica', 'Mecânica', 'Construção',
            'Armas', 'Culinária', 'Agricultura', 'Liderança', 'Sobrevivência'
        ];
        
        const resumo = {};
        
        for (let area of areas) {
            const especialistas = NPC_FUNCTIONS.identificarEspecialistas(area);
            resumo[area] = {
                especialistas: especialistas.slice(0, 3), // Top 3
                capacidade_total: especialistas.reduce((acc, esp) => acc + esp.nivel, 0),
                nivel_medio: especialistas.length > 0 ? 
                    Math.round(especialistas.reduce((acc, esp) => acc + esp.nivel, 0) / especialistas.length) : 0
            };
        }
        
        return resumo;
    },

    // =========================================================================
    // RANDOM GENERATION FUNCTIONS
    // =========================================================================

    /**
     * Seleciona NPC aleatório
     * @param {string} categoria - Categoria específica (opcional)
     * @returns {Object} - NPC selecionado aleatoriamente
     */
    selecionarNPCAleatorio: (categoria = null) => {
        let pool = [];
        
        if (categoria && NPCS_DATA[categoria]) {
            pool = NPCS_DATA[categoria];
        } else {
            for (let cat in NPCS_DATA) {
                pool = pool.concat(NPCS_DATA[cat]);
            }
        }
        
        if (pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    },

    /**
     * Gera interação aleatória entre NPCs
     * @returns {Object} - Descrição de interação
     */
    gerarInteracaoAleatoria: () => {
        const npc1 = NPC_FUNCTIONS.selecionarNPCAleatorio();
        const npc2 = NPC_FUNCTIONS.selecionarNPCAleatorio();
        
        if (!npc1 || !npc2 || npc1.id === npc2.id) {
            return { erro: 'Não foi possível gerar interação' };
        }
        
        const compatibilidade = NPC_FUNCTIONS.calcularCompatibilidade(npc1.id, npc2.id);
        const relacionamentos = NPC_FUNCTIONS.obterRelacionamentos(npc1.id);
        
        let tipo_interacao;
        if (compatibilidade > 70) {
            tipo_interacao = 'Colaboração positiva';
        } else if (compatibilidade < 30) {
            tipo_interacao = 'Tensão ou conflito';
        } else {
            tipo_interacao = 'Interação neutra';
        }
        
        return {
            npc1: npc1,
            npc2: npc2,
            compatibilidade: compatibilidade,
            tipo_interacao: tipo_interacao,
            relacionamentos: relacionamentos
        };
    },

    // =========================================================================
    // EXPORT FUNCTIONS
    // =========================================================================

    /**
     * Exporta dados completos de um NPC
     * @param {string} npc_id - ID do NPC
     * @returns {Object} - Dados completos incluindo relacionamentos
     */
    exportarNPCCompleto: (npc_id) => {
        const npc = NPC_FUNCTIONS.buscarNPC(npc_id);
        if (!npc) return null;
        
        return {
            ...npc,
            relacionamentos_detalhados: NPC_FUNCTIONS.obterRelacionamentos(npc_id),
            condicoes_especiais: NPC_FUNCTIONS.verificarCondicoes(npc_id),
            ganchos_aventura: NPC_FUNCTIONS.obterGanchosPorNPC(npc_id)
        };
    },

    /**
     * Exporta todos os NPCs com dados básicos
     * @returns {Object} - Todos os NPCs organizados por categoria
     */
    exportarTodosNPCs: () => {
        return NPCS_DATA;
    },

    /**
     * Gera relatório da estação
     * @returns {Object} - Relatório completo da estação
     */
    gerarRelatorioEstacao: () => {
        return {
            estatisticas: ESTATISTICAS,
            capacidades: NPC_FUNCTIONS.gerarResumoCapacidades(),
            recursos: ADVENTURE_FUNCTIONS?.verificarRecursos ? 
                ADVENTURE_FUNCTIONS.verificarRecursos() : {},
            ameacas_ativas: ADVENTURE_FUNCTIONS?.obterGanchosPorAmeaca ? 
                ADVENTURE_FUNCTIONS.obterGanchosPorAmeaca('Alto').length + 
                ADVENTURE_FUNCTIONS.obterGanchosPorAmeaca('Crítico').length : 0,
            familias: RELATIONSHIPS_DATA?.familias || {},
            tensoes_ativas: RELATIONSHIPS_DATA?.tensoes?.length || 0
        };
    }
};

// =============================================================================
// INITIALIZATION & VALIDATION
// =============================================================================

const SYSTEM_FUNCTIONS = {
    /**
     * Valida integridade dos dados
     * @returns {Object} - Relatório de validação
     */
    validarDados: () => {
        const problemas = [];
        let total_npcs = 0;
        
        // Verifica se todas as categorias existem
        const categorias_esperadas = ['cientificos', 'suporte', 'seguranca', 'dependentes'];
        for (let categoria of categorias_esperadas) {
            if (!NPCS_DATA[categoria]) {
                problemas.push(`Categoria '${categoria}' não encontrada`);
            } else {
                total_npcs += NPCS_DATA[categoria].length;
            }
        }
        
        // Verifica IDs únicos
        const ids_encontrados = new Set();
        for (let categoria in NPCS_DATA) {
            for (let npc of NPCS_DATA[categoria]) {
                if (ids_encontrados.has(npc.id)) {
                    problemas.push(`ID duplicado encontrado: ${npc.id}`);
                }
                ids_encontrados.add(npc.id);
                
                // Verifica campos obrigatórios
                const campos_obrigatorios = ['id', 'nome', 'profissao', 'categoria', 'idade'];
                for (let campo of campos_obrigatorios) {
                    if (!npc[campo]) {
                        problemas.push(`Campo '${campo}' ausente em ${npc.id || 'NPC sem ID'}`);
                    }
                }
            }
        }
        
        return {
            valido: problemas.length === 0,
            total_npcs: total_npcs,
            problemas: problemas,
            timestamp: new Date().toISOString()
        };
    },

    /**
     * Inicializa sistema com verificações
     * @returns {Object} - Status da inicialização
     */
    inicializar: () => {
        const validacao = SYSTEM_FUNCTIONS.validarDados();
        
        if (!validacao.valido) {
            console.warn('Problemas encontrados na validação:', validacao.problemas);
        }
        
        return {
            inicializado: true,
            versao: '1.0.0',
            validacao: validacao,
            funcionalidades: {
                busca_npcs: true,
                relacionamentos: !!RELATIONSHIP_FUNCTIONS,
                aventuras: !!ADVENTURE_FUNCTIONS,
                estatisticas: true
            }
        };
    }
};

// =============================================================================
// PUBLIC API
// =============================================================================

const ESTACAO_API = {
    // Dados principais
    npcs: NPCS_DATA,
    estatisticas: ESTATISTICAS,
    
    // Funções principais
    buscar: NPC_FUNCTIONS.buscarNPC,
    listar: NPC_FUNCTIONS.listarPorCategoria,
    buscarNome: NPC_FUNCTIONS.buscarPorNome,
    buscarProfissao: NPC_FUNCTIONS.buscarPorProfissao,
    buscarPericia: NPC_FUNCTIONS.buscarPorPericia,
    
    // Análises
    analisar: NPC_FUNCTIONS.analisarAtributo,
    especialistas: NPC_FUNCTIONS.identificarEspecialistas,
    capacidades: NPC_FUNCTIONS.gerarResumoCapacidades,
    
    // Relacionamentos
    relacionamentos: NPC_FUNCTIONS.obterRelacionamentos,
    compatibilidade: NPC_FUNCTIONS.calcularCompatibilidade,
    
    // Aventuras
    condicoes: NPC_FUNCTIONS.verificarCondicoes,
    ganchos: NPC_FUNCTIONS.obterGanchosPorNPC,
    
    // Utilitários
    aleatorio: NPC_FUNCTIONS.selecionarNPCAleatorio,
    interacao: NPC_FUNCTIONS.gerarInteracaoAleatoria,
    
    // Exportação
    exportarNPC: NPC_FUNCTIONS.exportarNPCCompleto,
    exportarTodos: NPC_FUNCTIONS.exportarTodosNPCs,
    relatorio: NPC_FUNCTIONS.gerarRelatorioEstacao,
    
    // Sistema
    validar: SYSTEM_FUNCTIONS.validarDados,
    inicializar: SYSTEM_FUNCTIONS.inicializar
};

// =============================================================================
// EXPORT & INITIALIZATION
// =============================================================================

// Inicialização automática
const STATUS_INICIAL = SYSTEM_FUNCTIONS.inicializar();
console.log('Estação Agulhas Negras - Sistema inicializado:', STATUS_INICIAL);

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ESTACAO_API,
        NPCS_DATA,
        ESTATISTICAS,
        NPC_FUNCTIONS,
        SYSTEM_FUNCTIONS
    };
}

// Global API for browser use
if (typeof window !== 'undefined') {
    window.EstacaoAPI = ESTACAO_API;
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/*
// Exemplos de uso:

// Buscar um NPC específico
const mariana = ESTACAO_API.buscar('mariana_costa');

// Listar todos os cientistas
const cientistas = ESTACAO_API.listar('cientificos');

// Encontrar especialistas em medicina
const medicos = ESTACAO_API.especialistas('medicina');

// Verificar relacionamentos de Ana Silva
const relacionamentos_ana = ESTACAO_API.relacionamentos('ana_silva');

// Gerar relatório completo da estação
const relatorio = ESTACAO_API.relatorio();

// Calcular compatibilidade entre dois NPCs
const compatibilidade = ESTACAO_API.compatibilidade('miguel_santos', 'ana_silva');

// Buscar NPCs por perícia
const atiradores = ESTACAO_API.buscarPericia('Armas de Fogo');

// Gerar interação aleatória
const interacao = ESTACAO_API.interacao();

// Exportar dados completos de um NPC
const dados_completos = ESTACAO_API.exportarNPC('pedro_mendes');
*/