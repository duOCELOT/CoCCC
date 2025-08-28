// =============================================================================
// RELATIONSHIPS & SOCIAL DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const RELATIONSHIPS_DATA = {
    // =========================================================================
    // FAMILY STRUCTURES
    // =========================================================================
    familias: {
        'Santos': {
            membros: ['miguel_santos', 'ana_silva'],
            tipo: 'Adotiva',
            descrição: 'Miguel adotou Ana após ela perder os pais no apocalipse',
            dinâmica: 'Relação tio-sobrinha muito próxima, Miguel é protetor mas preocupado com Ana em combate'
        },
        'Mendes': {
            membros: ['joao_mendes', 'pedro_mendes'],
            tipo: 'Consanguínea',
            descrição: 'João criou Pedro após a morte dos pais do menino',
            dinâmica: 'Avô dedicado ensina ciência ao neto brilhante, mas teme por sua segurança'
        },
        'Ferreira': {
            membros: ['amanda_ferreira', 'lucas_ferreira'],
            tipo: 'Consanguínea',
            descrição: 'Amanda cria o sobrinho Lucas desde os 10 anos',
            dinâmica: 'Tia dedicada luta com a natureza aventureira e imprudente de Lucas'
        },
        'Costa': {
            membros: ['ricardo_costa', 'isadora_costa'],
            tipo: 'Consanguínea',
            descrição: 'Ricardo e Isadora são primos, ela frequentemente o ajuda com trabalho técnico',
            dinâmica: 'Primos próximos, Ricardo impressionado com inteligência precoce de Isadora'
        }
    },

    // =========================================================================
    // TENSIONS & CONFLICTS
    // =========================================================================
    tensoes: [
        {
            personagens: ['marcos_lobo_pereira', 'ana_silva'],
            tipo: 'Metodológica',
            motivo: 'Métodos de patrulha diferentes - Marcos muito agressivo, Ana mais cautelosa',
            intensidade: 'Média',
            consequencias: 'Discussões durante briefings, patrulhas separadas',
            resolução_possível: 'Treinamento conjunto supervisionado por Roberto'
        },
        {
            personagens: ['elena_vasquez', 'rosa_martinez'],
            tipo: 'Profissional',
            motivo: 'Abordagens técnicas diferentes - Elena rápida e impaciente, Rosa meticulosa',
            intensidade: 'Baixa',
            consequencias: 'Demora em projetos colaborativos, comunicação formal',
            resolução_possível: 'Divisão clara de responsabilidades técnicas'
        },
        {
            personagens: ['joao_mendes', 'camila_rocha'],
            tipo: 'Acadêmica',
            motivo: 'Teorias botânicas divergentes sobre evolução das plantas',
            intensidade: 'Baixa',
            consequencias: 'Debates científicos acalorados, pesquisas paralelas',
            resolução_possível: 'Projeto conjunto de pesquisa supervisionado'
        },
        {
            personagens: ['roberto_silva', 'marcos_lobo_pereira'],
            tipo: 'Disciplinar',
            motivo: 'Diferenças sobre disciplina militar vs. métodos de guerrilha',
            intensidade: 'Média',
            consequencias: 'Marcos às vezes ignora ordens, Roberto questiona métodos',
            resolução_possível: 'Definição clara de hierarquia e protocolos'
        },
        {
            personagens: ['sofia_oliveira', 'mariana_costa'],
            tipo: 'Autoridade',
            motivo: 'Sofia questiona decisões da liderança baseada em dados científicos',
            intensidade: 'Baixa',
            consequencias: 'Reuniões tensas, Sofia às vezes retém informações',
            resolução_possível: 'Maior transparência nas decisões administrativas'
        }
    ],

    // =========================================================================
    // HIERARCHY & COMMAND STRUCTURE
    // =========================================================================
    hierarquia: {
        comando_geral: {
            lider: 'mariana_costa',
            titulo: 'Comandante da Estação',
            autoridade: 'Decisões finais sobre política, recursos, missões'
        },
        comando_militar: {
            lider: 'roberto_silva',
            titulo: 'Chefe de Segurança',
            autoridade: 'Todas as operações de defesa e patrulhamento',
            subordinados: ['ana_silva', 'marcos_lobo_pereira', 'teresa_goncalves']
        },
        comando_medico: {
            lider: 'paulo_santos',
            titulo: 'Médico Chefe',
            autoridade: 'Todas as decisões médicas e de saúde pública',
            subordinados: ['amanda_ferreira']
        },
        conselho_cientifico: {
            membros: ['mariana_costa', 'paulo_santos', 'joao_mendes', 'camila_rocha'],
            função: 'Decisões sobre pesquisa e política científica'
        }
    },

    // =========================================================================
    // ALLIANCE GROUPS
    // =========================================================================
    alianças: [
        {
            nome: 'Núcleo Científico',
            tipo: 'Profissional',
            membros: ['mariana_costa', 'paulo_santos', 'joao_mendes', 'camila_rocha', 'sofia_oliveira'],
            descrição: 'Grupo focado em pesquisa e preservação de conhecimento científico',
            reuniões: 'Semanais - laboratório principal',
            objetivos: ['Documentar mudanças pós-apocalipse', 'Desenvolver soluções técnicas', 'Preservar conhecimento']
        },
        {
            nome: 'Equipe Técnica',
            tipo: 'Operacional',
            membros: ['elena_vasquez', 'rosa_martinez', 'carlos_indio_silva', 'ricardo_costa'],
            descrição: 'Responsáveis pela manutenção de toda infraestrutura tecnológica',
            reuniões: 'Diárias - oficina mecânica',
            objetivos: ['Manter sistemas funcionando', 'Inovação com recursos limitados', 'Comunicação externa']
        },
        {
            nome: 'Força de Segurança',
            tipo: 'Militar',
            membros: ['roberto_silva', 'teresa_goncalves', 'marcos_lobo_pereira', 'ana_silva'],
            descrição: 'Equipe de defesa e segurança externa',
            reuniões: 'Briefings diários - centro de comando',
            objetivos: ['Defender a estação', 'Patrulhamento', 'Treinamento de combate']
        },
        {
            nome: 'Grupo de Cuidado',
            tipo: 'Social',
            membros: ['miguel_santos', 'dona_carmen', 'amanda_ferreira', 'camila_rocha'],
            descrição: 'Focado no bem-estar físico e emocional da comunidade',
            reuniões: 'Informais - cozinha comunitária',
            objetivos: ['Manter moral alto', 'Cuidar das crianças', 'Preservar humanidade']
        },
        {
            nome: 'Sustentabilidade',
            tipo: 'Sobrevivência',
            membros: ['camila_rocha', 'beatriz_almeida', 'carlos_indio_silva', 'luiz_teixeira'],
            descrição: 'Garantir autossuficiência da estação',
            reuniões: 'Semanais - estufa',
            objetivos: ['Produção de alimentos', 'Construção sustentável', 'Harmonia ambiental']
        }
    ],

    // =========================================================================
    // ROMANTIC & PERSONAL RELATIONSHIPS
    // =========================================================================
    relacionamentos_pessoais: [
        {
            personagens: ['elena_vasquez', 'ricardo_costa'],
            tipo: 'Amizade próxima',
            descrição: 'Trabalham juntos com eletrônicos, compartilham ansiedades sobre tecnologia',
            status: 'Platônico, mas há tensão não resolvida'
        },
        {
            personagens: ['camila_rocha', 'paulo_santos'],
            tipo: 'Respeito mútuo',
            descrição: 'Colaboram frequentemente em questões de saúde e nutrição',
            status: 'Profissional com amizade crescente'
        },
        {
            personagens: ['seu_antonio', 'dona_carmen'],
            tipo: 'Companheirismo',
            descrição: 'Idosos que encontraram conforto um no outro após perdas familiares',
            status: 'Amizade profunda, quase familiar'
        },
        {
            personagens: ['rosa_martinez', 'sofia_oliveira'],
            tipo: 'Mentora-aprendiz',
            descrição: 'Rosa ensina técnicas avançadas para Sofia, criando vínculo maternal',
            status: 'Relação familiar substituta'
        }
    ],

    // =========================================================================
    // CHILDREN'S SOCIAL DYNAMICS
    // =========================================================================
    dinamica_criancas: {
        lider_natural: 'pedro_mendes',
        grupos: {
            'exploradores': ['pedro_mendes', 'lucas_ferreira'],
            'estudiosos': ['pedro_mendes', 'isadora_costa'],
            'artistas': ['maria_silva'],
            'aventureiros': ['lucas_ferreira']
        },
        cuidadores_primarios: {
            'pedro_mendes': 'joao_mendes',
            'maria_silva': 'camila_rocha',
            'lucas_ferreira': 'amanda_ferreira',
            'isadora_costa': 'ricardo_costa'
        },
        figuras_parentais_coletivas: ['miguel_santos', 'dona_carmen', 'seu_antonio']
    },

    // =========================================================================
    // SOCIAL EVENTS & TRADITIONS
    // =========================================================================
    eventos_sociais: {
        regulares: [
            {
                nome: 'Jantar Comunitário',
                frequencia: 'Diário',
                local: 'Cozinha comunitária',
                responsavel: 'miguel_santos',
                descrição: 'Momento principal de socialização e histórias'
            },
            {
                nome: 'Hora das Histórias',
                frequencia: 'Noturno',
                local: 'Sala comum',
                responsavel: 'seu_antonio',
                descrição: 'Tradições orais e moral da comunidade'
            },
            {
                nome: 'Aulas das Crianças',
                frequencia: 'Manhãs',
                local: 'Laboratório/biblioteca improvisada',
                responsavel: 'joao_mendes',
                descrição: 'Educação formal e informal'
            }
        ],
        especiais: [
            {
                nome: 'Aniversários',
                descrição: 'Celebrações coletivas com comida especial de Miguel',
                importancia: 'Manter humanidade e esperança'
            },
            {
                nome: 'Memorial dos Perdidos',
                descrição: 'Dia mensal para lembrar entes queridos perdidos',
                importancia: 'Processar luto coletivo'
            },
            {
                nome: 'Feira de Colheita',
                descrição: 'Celebração trimestral dos sucessos agrícolas',
                importancia: 'Reconhecer trabalho de Camila e Beatriz'
            }
        ]
    }
};

// =========================================================================
// UTILITY FUNCTIONS
// =========================================================================

const RELATIONSHIP_FUNCTIONS = {
    // Buscar tensões envolvendo um NPC específico
    obterTensoes: (npc_id) => {
        return RELATIONSHIPS_DATA.tensoes.filter(tensao => 
            tensao.personagens.includes(npc_id)
        );
    },

    // Buscar alianças de um NPC
    obterAliancas: (npc_id) => {
        return RELATIONSHIPS_DATA.alianças.filter(alianca => 
            alianca.membros.includes(npc_id)
        );
    },

    // Verificar se dois NPCs são família
    saoFamilia: (npc1_id, npc2_id) => {
        for (let familia in RELATIONSHIPS_DATA.familias) {
            const membros = RELATIONSHIPS_DATA.familias[familia].membros;
            if (membros.includes(npc1_id) && membros.includes(npc2_id)) {
                return RELATIONSHIPS_DATA.familias[familia];
            }
        }
        return false;
    },

    // Obter hierarquia de comando
    obterComando: (npc_id) => {
        const hierarquia = RELATIONSHIPS_DATA.hierarquia;
        
        // Verifica se é líder de algum grupo
        for (let grupo in hierarquia) {
            if (hierarquia[grupo].lider === npc_id) {
                return { cargo: 'lider', grupo: grupo, dados: hierarquia[grupo] };
            }
            if (hierarquia[grupo].subordinados && hierarquia[grupo].subordinados.includes(npc_id)) {
                return { cargo: 'subordinado', grupo: grupo, superior: hierarquia[grupo].lider };
            }
        }
        
        return { cargo: 'independente' };
    },

    // Calcular compatibilidade social entre dois NPCs
    calcularCompatibilidade: (npc1_id, npc2_id) => {
        let score = 50; // Base neutra
        
        // Família aumenta compatibilidade
        if (RELATIONSHIP_FUNCTIONS.saoFamilia(npc1_id, npc2_id)) {
            score += 30;
        }
        
        // Mesma aliança aumenta
        const aliancas1 = RELATIONSHIP_FUNCTIONS.obterAliancas(npc1_id);
        const aliancas2 = RELATIONSHIP_FUNCTIONS.obterAliancas(npc2_id);
        const aliancasComuns = aliancas1.filter(a1 => 
            aliancas2.some(a2 => a1.nome === a2.nome)
        );
        score += aliancasComuns.length * 15;
        
        // Tensões diminuem
        const tensoes = RELATIONSHIPS_DATA.tensoes.filter(tensao =>
            tensao.personagens.includes(npc1_id) && tensao.personagens.includes(npc2_id)
        );
        tensoes.forEach(tensao => {
            switch (tensao.intensidade) {
                case 'Baixa': score -= 10; break;
                case 'Média': score -= 20; break;
                case 'Alta': score -= 35; break;
            }
        });
        
        return Math.max(0, Math.min(100, score));
    }
};

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RELATIONSHIPS_DATA, RELATIONSHIP_FUNCTIONS };
}