// =============================================================================
// ADVENTURE HOOKS & CAMPAIGN DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const ADVENTURE_DATA = {
    // =========================================================================
    // MAJOR ADVENTURE HOOKS
    // =========================================================================
    ganchos_principais: [
        {
            id: 'desaparecimentos_misteriosos',
            título: 'Desaparecimentos na Floresta',
            categoria: 'Horror/Mistério',
            descrição: 'Pessoas somem durante patrulhas na floresta, deixando apenas equipamentos e pegadas que se interrompem abruptamente',
            npcs_envolvidos: ['marcos_lobo_pereira', 'ana_silva', 'carlos_indio_silva', 'roberto_silva'],
            nível_ameaça: 'Alto',
            sinais_iniciais: [
                'Marcos volta de patrulha visivelmente abalado',
                'Equipamentos encontrados abandonados',
                'Pegadas que simplesmente desaparecem',
                'Animais evitando certas áreas da floresta'
            ],
            investigação: [
                'Rastreamento com Carlos',
                'Análise psicológica com Dr. Paulo',
                'Estudos biológicos com Prof. João',
                'Análise de solo com Sofia'
            ],
            possíveis_causas: [
                'Criaturas mutantes subterrâneas',
                'Experimentos pré-guerra ainda ativos',
                'Fenômenos temporais/dimensionais',
                'Culto de sobreviventes hostis'
            ],
            desenvolvimento: 'Escalará até ameaçar a própria estação'
        },
        {
            id: 'sinais_estranhos',
            título: 'Transmissões Codificadas',
            categoria: 'Conspiração/Mistério',
            descrição: 'Ricardo intercepta sinais em códigos desconhecidos que parecem responder às atividades da estação',
            npcs_envolvidos: ['ricardo_costa', 'elena_vasquez', 'isadora_costa', 'mariana_costa'],
            nível_ameaça: 'Médio',
            sinais_iniciais: [
                'Ricardo nervoso e insone',
                'Padrões nos sinais coincidem com atividades da estação',
                'Isadora decifra parcialmente alguns códigos',
                'Elena detecta interferências nos sistemas'
            ],
            investigação: [
                'Triangulação de sinais',
                'Decodificação com Isadora',
                'Análise de padrões temporais',
                'Verificação de segurança dos sistemas'
            ],
            possíveis_causas: [
                'Outra instalação militar observando',
                'IA militar ainda operacional',
                'Experimentos de comunicação pré-guerra',
                'Organização de sobreviventes coordenada'
            ],
            desenvolvimento: 'Revelará conexões com outras instalações'
        },
        {
            id: 'mutacoes_botanicas',
            título: 'Evolução Acelerada das Plantas',
            categoria: 'Corpo/Horror Científico',
            descrição: 'Plantas apresentam crescimento e comportamentos anômalos, algumas desenvolvendo características aparentemente sencientes',
            npcs_envolvidos: ['joao_mendes', 'camila_rocha', 'sofia_oliveira', 'beatriz_almeida'],
            nível_ameaça: 'Alto',
            sinais_iniciais: [
                'Plantas crescendo em padrões geométricos',
                'Vegetação reagindo a presença humana',
                'Espécies híbridas impossíveis',
                'Solo mudando de composição'
            ],
            investigação: [
                'Catalogação de mutações com João',
                'Análises químicas com Sofia',
                'Monitoramento da horta com Camila',
                'Testes de solo agricultural com Beatriz'
            ],
            possíveis_causas: [
                'Radiação modificando DNA vegetal',
                'Experimentos biotecnológicos vazados',
                'Influência de entidade alienígena',
                'Evolução acelerada pós-apocalíptica'
            ],
            desenvolvimento: 'Ameaçará a segurança alimentar e física da estação'
        },
        {
            id: 'crise_medica',
            título: 'Epidemia Misteriosa',
            categoria: 'Sobrevivência/Horror Médico',
            descrição: 'Suprimentos médicos escassos enquanto pessoas começam a adoecer com sintomas desconhecidos',
            npcs_envolvidos: ['paulo_santos', 'mariana_costa', 'amanda_ferreira', 'sofia_oliveira'],
            nível_ameaça: 'Crítico',
            sinais_iniciais: [
                'Dr. Paulo preocupado com escassez de medicamentos',
                'Sintomas incomuns em alguns residentes',
                'Análises de Sofia detectam contaminantes',
                'Animais também afetados'
            ],
            investigação: [
                'Diagnósticos médicos com Dr. Paulo',
                'Análises laboratoriais com Sofia',
                'Veterinária com Amanda',
                'Decisões de quarentena com Mariana'
            ],
            possíveis_causas: [
                'Contaminação da água',
                'Exposição a radiação concentrada',
                'Vírus mutante pós-guerra',
                'Toxinas das plantas mutantes'
            ],
            desenvolvimento: 'Forçará decisões difíceis sobre isolamento e recursos'
        },
        {
            id: 'conflito_geracional',
            título: 'Tensão Entre Gerações',
            categoria: 'Drama Social/Psicológico',
            descrição: 'Crescente tensão entre jovens querendo explorar e veteranos cautelosos, ameaçando dividir a comunidade',
            npcs_envolvidos: ['ana_silva', 'pedro_mendes', 'lucas_ferreira', 'roberto_silva', 'marcos_lobo_pereira'],
            nível_ameaça: 'Baixo',
            sinais_iniciais: [
                'Ana questionando ordens de Roberto',
                'Pedro e Lucas planejando expedições secretas',
                'Marcos apoiando métodos mais agressivos',
                'Discussões durante reuniões comunitárias'
            ],
            investigação: [
                'Mediação com Dr. Paulo',
                'Conversas individuais com líderes',
                'Reuniões familiares',
                'Atividades conjuntas propostas'
            ],
            possíveis_causas: [
                'Frustração com isolamento',
                'Diferenças de experiência pré-guerra',
                'Pressão por recursos limitados',
                'Trauma não processado'
            ],
            desenvolvimento: 'Pode levar a divisão permanente da comunidade'
        },
        {
            id: 'segredos_bunker',
            título: 'Descobertas no Bunker',
            categoria: 'Mistério/Conspiração',
            descrição: 'Descoberta de áreas seladas com propósitos misteriosos que revelam a verdadeira natureza da estação',
            npcs_envolvidos: ['mariana_costa', 'roberto_silva', 'elena_vasquez', 'sofia_oliveira'],
            nível_ameaça: 'Desconhecido',
            sinais_iniciais: [
                'Elena encontra mapas arquitetônicos inconsistentes',
                'Roberto nervoso sobre certas áreas',
                'Mariana evita perguntas específicas',
                'Sofia detecta leituras anômalas'
            ],
            investigação: [
                'Exploração técnica com Elena',
                'Confronto com liderança',
                'Análise de documentos',
                'Desbloqueio de sistemas'
            ],
            possíveis_revelações: [
                'Estação era projeto militar classificado',
                'Experimentos em sobreviventes',
                'Conexão com outras instalações',
                'Arsenal ou tecnologia secreta'
            ],
            desenvolvimento: 'Mudará fundamentalmente a dinâmica da estação'
        },
        {
            id: 'visitantes_inesperados',
            título: 'Chegada de Estranhos',
            categoria: 'Suspense/Drama Social',
            descrição: 'Chegada de novos sobreviventes com histórias suspeitas e motivações ocultas',
            npcs_envolvidos: ['roberto_silva', 'mariana_costa', 'paulo_santos', 'ana_silva'],
            nível_ameaça: 'Variável',
            sinais_iniciais: [
                'Sinais de aproximação detectados',
                'Histórias inconsistentes dos visitantes',
                'Equipamentos de origem duvidosa',
                'Conhecimento suspeito sobre a estação'
            ],
            investigação: [
                'Interrogatórios com Roberto',
                'Exames médicos com Dr. Paulo',
                'Verificação de segurança',
                'Observação comportamental'
            ],
            possíveis_identidades: [
                'Espiões de outra facção',
                'Sobreviventes genuínos',
                'Militares renegados',
                'Cientistas fugitivos'
            ],
            desenvolvimento: 'Testará políticas de admissão e confiança'
        },
        {
            id: 'falha_sistemica',
            título: 'Colapso da Infraestrutura',
            categoria: 'Sobrevivência/Thriller Técnico',
            descrição: 'Equipamentos vitais começam a falhar simultaneamente, ameaçando a sobrevivência da estação',
            npcs_envolvidos: ['elena_vasquez', 'rosa_martinez', 'carlos_indio_silva', 'luiz_teixeira'],
            nível_ameaça: 'Crítico',
            sinais_iniciais: [
                'Elena trabalhando dia e noite',
                'Rosa preocupada com obsolescência',
                'Carlos detectando sinais na natureza',
                'Luiz notando deterioração estrutural'
            ],
            investigação: [
                'Diagnósticos técnicos',
                'Busca por peças de reposição',
                'Improvisação de soluções',
                'Priorização de sistemas críticos'
            ],
            possíveis_causas: [
                'Desgaste natural acelerado',
                'Sabotagem interna ou externa',
                'Interferência eletromagnética',
                'Falha em cascata de sistemas'
            ],
            desenvolvimento: 'Forçará evacuação ou soluções desesperadas'
        }
    ],

    // =========================================================================
    // MINOR ADVENTURE HOOKS
    // =========================================================================
    ganchos_menores: [
        {
            título: 'O Jardim Secreto de Camila',
            descrição: 'Descoberta do jardim ornamental secreto da Dra. Camila',
            tipo: 'Exploração',
            npcs: ['camila_rocha'],
            tempo: '1-2 sessões'
        },
        {
            título: 'Receitas Perdidas',
            descrição: 'Miguel procura ingredientes específicos para recrear pratos da família perdida',
            tipo: 'Busca',
            npcs: ['miguel_santos', 'dona_carmen'],
            tempo: '1 sessão'
        },
        {
            título: 'Os Diários de Seu Antônio',
            descrição: 'Descoberta de que Seu Antônio documenta tudo em diários secretos',
            tipo: 'Mistério Leve',
            npcs: ['seu_antonio'],
            tempo: '1 sessão'
        },
        {
            título: 'Competição de Reparo',
            descrição: 'Rosa e Elena competem para resolver problema técnico complexo',
            tipo: 'Desafio Técnico',
            npcs: ['rosa_martinez', 'elena_vasquez'],
            tempo: '1 sessão'
        },
        {
            título: 'Expedição de Lucas',
            descrição: 'Lucas desaparece em uma de suas aventuras e precisa ser resgatado',
            tipo: 'Resgate',
            npcs: ['lucas_ferreira', 'amanda_ferreira'],
            tempo: '1-2 sessões'
        },
        {
            título: 'Memorial dos Perdidos',
            descrição: 'Criação de um memorial para os que se perderam no apocalipse',
            tipo: 'Drama Emocional',
            npcs: ['seu_antonio', 'dona_carmen', 'mariana_costa'],
            tempo: '1 sessão'
        },
        {
            título: 'Caça ao Tesouro de Pedro',
            descrição: 'Pedro cria uma caça ao tesouro científica para entreter as crianças',
            tipo: 'Aventura Leve',
            npcs: ['pedro_mendes', 'maria_silva', 'isadora_costa'],
            tempo: '1 sessão'
        },
        {
            título: 'Noite de Talentos',
            descrição: 'Organização de uma noite especial para mostrar habilidades não-técnicas',
            tipo: 'Social',
            npcs: ['miguel_santos', 'seu_antonio', 'maria_silva'],
            tempo: '1 sessão'
        }
    ],

    // =========================================================================
    // SPECIAL CONDITIONS & EVENTS
    // =========================================================================
    condicoes_especiais: [
        {
            personagem: 'marcos_lobo_pereira',
            condicao: 'PTSD Severo',
            efeito: 'Testes de Sanidade com penalidade em combate, flashbacks aleatórios',
            gatilhos: ['Explosões', 'Gritos', 'Sangue', 'Situações de cerco'],
            tratamento: 'Conversas com Dr. Paulo, rotina estável, evitar gatilhos',
            impacto_narrativo: 'Pode comprometer missões críticas'
        },
        {
            personagem: 'seu_antonio',
            condicao: 'Artrite Crônica',
            efeito: 'Penalidades em DES quando está frio ou úmido',
            gatilhos: ['Clima frio', 'Umidade alta', 'Atividade física'],
            tratamento: 'Calor, massagens com Dona Carmen, atividade leve',
            impacto_narrativo: 'Limitações em evacuações ou emergências'
        },
        {
            personagem: 'pedro_mendes',
            condicao: 'Alergia Sazonal',
            efeito: 'Testes de CON na primavera, espirros comprometem furtividade',
            gatilhos: ['Pólen', 'Certas plantas', 'Vento forte'],
            tratamento: 'Anti-histamínicos quando disponíveis, evitar exposição',
            impacto_narrativo: 'Complicações em missões de reconhecimento'
        },
        {
            personagem: 'ricardo_costa',
            condicao: 'Transtorno de Ansiedade',
            efeito: 'Penalidades sociais com estranhos, testes de POD sob pressão',
            gatilhos: ['Multidões', 'Ruídos altos inesperados', 'Confrontos'],
            tratamento: 'Ambiente calmo, rotina previsível, apoio de Isadora',
            impacto_narrativo: 'Dificuldades em negociações ou primeiros contatos'
        },
        {
            personagem: 'ana_silva',
            condicao: 'Pesadelos Recorrentes',
            efeito: 'Recuperação de Sanidade mais lenta, cansaço ocasional',
            gatilhos: ['Estresse alto', 'Aniversários de traumas', 'Solidão'],
            tratamento: 'Conversa com Dr. Paulo, rotina estável, apoio de Miguel',
            impacto_narrativo: 'Vulnerabilidade em momentos críticos'
        },
        {
            personagem: 'elena_vasquez',
            condicao: 'Dependência de Cafeína',
            efeito: 'Penalidades em concentração sem café, irritabilidade',
            gatilhos: ['Abstinência de cafeína', 'Estresse técnico'],
            tratamento: 'Chás estimulantes, redução gradual, horário regular',
            impacto_narrativo: 'Problemas técnicos quando suprimentos escassos'
        }
    ],

    // =========================================================================
    // RESOURCES & LOGISTICS
    // =========================================================================
    recursos_estacao: {
        críticos: [
            {
                item: 'Gerador principal',
                responsável: ['elena_vasquez', 'carlos_indio_silva'],
                status: 'Funcional mas envelhecendo',
                reservas: '30 dias de combustível',
                falha_catastrófica: 'Perda total de energia'
            },
            {
                item: 'Sistema de purificação de água',
                responsável: ['sofia_oliveira'],
                status: 'Estável',
                reservas: 'Indefinido com manutenção',
                falha_catastrófica: 'Desidratação em 3 dias'
            },
            {
                item: 'Horta hidropônica',
                responsável: ['camila_rocha', 'beatriz_almeida'],
                status: 'Produtiva mas vulnerável',
                reservas: 'Colheita a cada 6 semanas',
                falha_catastrófica: 'Fome em 2 semanas'
            },
            {
                item: 'Sistema de comunicações',
                responsável: ['ricardo_costa'],
                status: 'Funcional mas limitado',
                reservas: 'Dependente de peças eletrônicas',
                falha_catastrófica: 'Isolamento total'
            },
            {
                item: 'Arsenal defensivo',
                responsável: ['teresa_goncalves'],
                status: 'Adequado mas munição limitada',
                reservas: '200 cartuchos variados',
                falha_catastrófica: 'Vulnerabilidade a ataques'
            }
        ],
        escassos: [
            'Medicamentos (especialmente antibióticos)',
            'Combustível para gerador',
            'Peças eletrônicas de reposição',
            'Munição',
            'Alimentos processados/conservados',
            'Roupas e calçados',
            'Ferramentas especializadas'
        ],
        abundantes: [
            'Água potável (com purificação)',
            'Vegetais frescos (graças às estufas)',
            'Conhecimento técnico e científico',
            'Moral da comunidade (graças ao grupo social)',
            'Segurança interna',
            'Materiais de construção básicos'
        ]
    },

    // =========================================================================
    // DAILY SCHEDULE & ROUTINES
    // =========================================================================
    cronograma_diario: {
        '06:00': {
            atividade: 'Troca de guarda e despertar geral',
            responsáveis: ['ana_silva', 'marcos_lobo_pereira'],
            localização: 'Torres de vigilância'
        },
        '07:00': {
            atividade: 'Café da manhã e briefing matinal',
            responsáveis: ['miguel_santos', 'dona_carmen', 'mariana_costa'],
            localização: 'Cozinha comunitária'
        },
        '08:00': {
            atividade: 'Início das atividades - trabalho especializado',
            responsáveis: 'Todos conforme especialização',
            localização: 'Laboratórios, oficinas, campo'
        },
        '12:00': {
            atividade: 'Almoço comunitário e tempo social',
            responsáveis: ['miguel_santos', 'dona_carmen'],
            localização: 'Cozinha comunitária'
        },
        '13:00': {
            atividade: 'Período de descanso ou atividades pessoais',
            responsáveis: 'Livre',
            localização: 'Variado'
        },
        '14:00': {
            atividade: 'Continuação do trabalho e manutenção',
            responsáveis: 'Equipes técnicas',
            localização: 'Conforme necessidade'
        },
        '18:00': {
            atividade: 'Jantar e hora das histórias',
            responsáveis: ['miguel_santos', 'seu_antonio'],
            localização: 'Cozinha comunitária'
        },
        '20:00': {
            atividade: 'Tempo livre e estudos das crianças',
            responsáveis: ['joao_mendes', 'isadora_costa'],
            localização: 'Sala de estudos'
        },
        '22:00': {
            atividade: 'Patrulha noturna e descanso geral',
            responsáveis: ['marcos_lobo_pereira', 'teresa_goncalves'],
            localização: 'Perímetro'
        },
        '00:00': {
            atividade: 'Vigilância reduzida e turnos de rádio',
            responsáveis: ['ricardo_costa', 'ana_silva'],
            localização: 'Centro de comando'
        }
    },

    // =========================================================================
    // SPECIAL LOCATIONS
    // =========================================================================
    localizacoes_especiais: {
        centro_comando: {
            descrição: 'Coração da estação onde Mariana coordena todas as operações',
            npcs_frequentes: ['mariana_costa', 'roberto_silva', 'ricardo_costa'],
            equipamentos: ['Rádios', 'Mapas', 'Computadores', 'Sistemas de segurança'],
            segredos: ['Mapas de outras instalações', 'Códigos de comunicação militar', 'Planos de evacuação'],
            acesso: 'Restrito - apenas liderança'
        },
        laboratorio_principal: {
            descrição: 'Área científica principal com equipamentos de pesquisa',
            npcs_frequentes: ['paulo_santos', 'sofia_oliveira', 'joao_mendes'],
            equipamentos: ['Microscópios', 'Equipamentos químicos', 'Amostras biológicas'],
            segredos: ['Catalogação de mutações', 'Resultados de testes de contaminação', 'Experimentos em andamento'],
            acesso: 'Científicos e equipe médica'
        },
        oficina_mecanica: {
            descrição: 'Local de reparos e manutenção de todos os equipamentos',
            npcs_frequentes: ['carlos_indio_silva', 'luiz_teixeira', 'rosa_martinez'],
            equipamentos: ['Ferramentas', 'Peças sobressalentes', 'Bancadas de trabalho'],
            segredos: ['Peças de equipamentos militares pré-guerra', 'Projetos de modificação', 'Relatórios de desgaste'],
            acesso: 'Equipe técnica'
        },
        cozinha_comunitaria: {
            descrição: 'Centro social da estação com função dupla de alimentação e reunião',
            npcs_frequentes: ['miguel_santos', 'dona_carmen', 'seu_antonio'],
            equipamentos: ['Fornos industriais', 'Geladeiras', 'Área de jantar', 'Sistema de som'],
            segredos: ['Reservas secretas de ingredientes especiais', 'Receitas da família perdida', 'Local de reuniões informais'],
            acesso: 'Público - centro social'
        },
        jardim_secreto: {
            descrição: 'Local privado da Dra. Camila com plantas ornamentais',
            npcs_frequentes: ['camila_rocha'],
            equipamentos: ['Plantas raras', 'Ferramentas de jardinagem', 'Cadernos de observação'],
            segredos: ['Plantas pré-guerra preservadas', 'Experimentos botânicos pessoais', 'Local de meditação'],
            acesso: 'Apenas Camila'
        },
        posto_observacao: {
            descrição: 'Torre de vigia principal com vista panorâmica',
            npcs_frequentes: ['ana_silva', 'marcos_lobo_pereira', 'teresa_goncalves'],
            equipamentos: ['Binóculos', 'Rádios', 'Equipamentos de vigilância', 'Armas'],
            segredos: ['Vista de instalações abandonadas ao longe', 'Rotas de fuga mapeadas', 'Esconderijos de suprimentos'],
            acesso: 'Apenas equipe de segurança'
        },
        bunker_subterraneo: {
            descrição: 'Área restrita e misteriosa com acesso limitado',
            npcs_frequentes: ['roberto_silva', 'mariana_costa'],
            equipamentos: ['Sistemas selados', 'Equipamentos militares', 'Documentos classificados'],
            segredos: ['Verdadeiro propósito da estação', 'Arsenal secreto', 'Conexões com comando militar'],
            acesso: 'Ultra-restrito'
        },
        estufa_hidroponicos: {
            descrição: 'Grande complexo de estufas para produção de alimentos',
            npcs_frequentes: ['camila_rocha', 'beatriz_almeida'],
            equipamentos: ['Sistemas hidropônicos', 'Controle climático', 'Sementes', 'Ferramentas agrícolas'],
            segredos: ['Experimentos com plantas mutantes', 'Reservas de sementes raras', 'Sistemas de backup ocultos'],
            acesso: 'Equipe agrícola e científica'
        }
    },

    // =========================================================================
    // RANDOM EVENTS
    // =========================================================================
    eventos_aleatorios: [
        {
            tipo: 'Calmaria',
            probabilidade: 40,
            descrição: 'Dia normal na estação',
            efeitos: ['Moral estável', 'Trabalho progride normalmente'],
            duração: '1 dia'
        },
        {
            tipo: 'Problema Técnico',
            probabilidade: 25,
            descrição: 'Falha menor em equipamento',
            efeitos: ['Reparo necessário', 'Possível atraso em atividades'],
            duração: '2-6 horas'
        },
        {
            tipo: 'Tensão Social',
            probabilidade: 15,
            descrição: 'Conflito entre NPCs',
            efeitos: ['Moral reduzido temporariamente', 'Necessidade de mediação'],
            duração: '1-3 dias'
        },
        {
            tipo: 'Descoberta',
            probabilidade: 10,
            descrição: 'Algo interessante encontrado',
            efeitos: ['Novo item ou informação', 'Possível gancho de aventura'],
            duração: 'Permanente'
        },
        {
            tipo: 'Ameaça Externa',
            probabilidade: 7,
            descrição: 'Sinal de perigo do exterior',
            efeitos: ['Alerta de segurança', 'Investigação necessária'],
            duração: '1-2 dias'
        },
        {
            tipo: 'Emergência',
            probabilidade: 3,
            descrição: 'Situação crítica',
            efeitos: ['Ação imediata necessária', 'Possível perda de recursos'],
            duração: 'Imediato'
        }
    ]
};

// =========================================================================
// UTILITY FUNCTIONS
// =========================================================================

const ADVENTURE_FUNCTIONS = {
    // Buscar ganchos por NPC
    obterGanchosPorNPC: (npc_id) => {
        return ADVENTURE_DATA.ganchos_principais.filter(gancho => 
            gancho.npcs_envolvidos.includes(npc_id)
        );
    },

    // Buscar ganchos por nível de ameaça
    obterGanchosPorAmeaca: (nivel) => {
        return ADVENTURE_DATA.ganchos_principais.filter(gancho => 
            gancho.nível_ameaça === nivel
        );
    },

    // Obter condições especiais de um NPC
    verificarCondicoes: (npc_id) => {
        return ADVENTURE_DATA.condicoes_especiais.filter(condicao => 
            condicao.personagem === npc_id
        );
    },

    // Verificar status de recursos
    verificarRecursos: (categoria = 'todos') => {
        if (categoria === 'todos') {
            return ADVENTURE_DATA.recursos_estacao;
        }
        return ADVENTURE_DATA.recursos_estacao[categoria] || [];
    },

    // Obter atividade no horário específico
    obterAtividade: (horario) => {
        return ADVENTURE_DATA.cronograma_diario[horario] || null;
    },

    // Gerar evento aleatório baseado em probabilidades
    gerarEventoAleatorio: () => {
        const eventos = ADVENTURE_DATA.eventos_aleatorios;
        const roll = Math.random() * 100;
        let acumulado = 0;
        
        for (let evento of eventos) {
            acumulado += evento.probabilidade;
            if (roll <= acumulado) {
                return evento;
            }
        }
        return eventos[0]; // fallback
    },

    // Obter localizações por acesso
    obterLocalizacoesPorAcesso: (nivelAcesso) => {
        const localizacoes = ADVENTURE_DATA.localizacoes_especiais;
        return Object.entries(localizacoes).filter(([nome, dados]) => 
            dados.acesso.toLowerCase().includes(nivelAcesso.toLowerCase())
        );
    },

    // Verificar recursos críticos em risco
    verificarRecursosCriticos: () => {
        return ADVENTURE_DATA.recursos_estacao.críticos.filter(recurso => 
            recurso.status.includes('envelhecendo') || 
            recurso.status.includes('limitado') ||
            recurso.status.includes('vulnerável')
        );
    },

    // Gerar relatório de status da estação
    gerarRelatorioStatus: () => {
        const recursos = ADVENTURE_DATA.recursos_estacao;
        const eventos = ADVENTURE_DATA.eventos_aleatorios;
        const ganchos = ADVENTURE_DATA.ganchos_principais;
        
        return {
            recursos_criticos: recursos.críticos.length,
            recursos_escassos: recursos.escassos.length,
            recursos_abundantes: recursos.abundantes.length,
            ameacas_ativas: ganchos.filter(g => g.nível_ameaça === 'Alto' || g.nível_ameaça === 'Crítico').length,
            ganchos_disponiveis: ganchos.length,
            localizacoes_especiais: Object.keys(ADVENTURE_DATA.localizacoes_especiais).length,
            probabilidade_evento_negativo: eventos.filter(e => e.tipo !== 'Calmaria' && e.tipo !== 'Descoberta').reduce((acc, e) => acc + e.probabilidade, 0)
        };
    },

    // Sugerir próxima aventura baseada no estado atual
    sugerirProximaAventura: (condicoes_atuais = {}) => {
        const ganchos = ADVENTURE_DATA.ganchos_principais;
        let sugestoes = [];

        // Priorizar por nível de ameaça e condições atuais
        if (condicoes_atuais.recursos_baixos) {
            sugestoes.push(...ganchos.filter(g => g.categoria.includes('Sobrevivência')));
        }
        
        if (condicoes_atuais.tensao_social) {
            sugestoes.push(...ganchos.filter(g => g.categoria.includes('Social') || g.categoria.includes('Psicológico')));
        }
        
        if (condicoes_atuais.ameaca_externa) {
            sugestoes.push(...ganchos.filter(g => g.nível_ameaça === 'Alto' || g.nível_ameaça === 'Crítico'));
        }

        // Se nenhuma condição específica, sugerir baseado em variedade
        if (sugestoes.length === 0) {
            sugestoes = ganchos.filter(g => g.nível_ameaça === 'Médio');
        }

        return sugestoes[Math.floor(Math.random() * sugestoes.length)] || ganchos[0];
    },

    // Calcular moral da estação baseado em eventos
    calcularMoralEstacao: (eventos_recentes = []) => {
        let moral = 70; // Base: moral neutro
        
        eventos_recentes.forEach(evento => {
            switch(evento.tipo) {
                case 'Calmaria':
                case 'Descoberta':
                    moral += 5;
                    break;
                case 'Problema Técnico':
                    moral -= 2;
                    break;
                case 'Tensão Social':
                    moral -= 5;
                    break;
                case 'Ameaça Externa':
                    moral -= 8;
                    break;
                case 'Emergência':
                    moral -= 15;
                    break;
            }
        });

        return Math.max(0, Math.min(100, moral));
    },

    // Obter NPCs disponíveis para uma missão específica
    obterNPCsDisponiveis: (tipo_missao) => {
        const especialidades = {
            'exploração': ['marcos_lobo_pereira', 'ana_silva', 'carlos_indio_silva'],
            'científica': ['joao_mendes', 'camila_rocha', 'sofia_oliveira', 'paulo_santos'],
            'técnica': ['elena_vasquez', 'rosa_martinez', 'carlos_indio_silva', 'luiz_teixeira'],
            'social': ['miguel_santos', 'mariana_costa', 'seu_antonio', 'dona_carmen'],
            'médica': ['paulo_santos', 'amanda_ferreira'],
            'segurança': ['roberto_silva', 'teresa_goncalves', 'marcos_lobo_pereira', 'ana_silva'],
            'comunicações': ['ricardo_costa', 'elena_vasquez'],
            'agricultura': ['camila_rocha', 'beatriz_almeida']
        };

        return especialidades[tipo_missao] || [];
    }
};

// =========================================================================
// CAMPAIGN MANAGEMENT HELPERS
// =========================================================================

const CAMPAIGN_HELPERS = {
    // Inicializar nova campanha
    iniciarCampanha: () => {
        return {
            data_inicio: new Date().toISOString(),
            sessao_atual: 1,
            eventos_passados: [],
            ganchos_ativos: [],
            ganchos_resolvidos: [],
            moral_estacao: 70,
            recursos_gastos: [],
            npcs_feridos: [],
            descobertas_feitas: [],
            ameacas_conhecidas: []
        };
    },

    // Avançar tempo na campanha
    avancarTempo: (estado_campanha, dias = 1) => {
        const novos_eventos = [];
        
        for (let i = 0; i < dias; i++) {
            const evento = ADVENTURE_FUNCTIONS.gerarEventoAleatorio();
            novos_eventos.push({
                ...evento,
                data: new Date(Date.now() + (i * 24 * 60 * 60 * 1000)).toISOString()
            });
        }

        return {
            ...estado_campanha,
            eventos_passados: [...estado_campanha.eventos_passados, ...novos_eventos],
            moral_estacao: ADVENTURE_FUNCTIONS.calcularMoralEstacao(novos_eventos)
        };
    },

    // Resolver gancho de aventura
    resolverGancho: (estado_campanha, gancho_id, resultado) => {
        const gancho = ADVENTURE_DATA.ganchos_principais.find(g => g.id === gancho_id);
        
        if (!gancho) return estado_campanha;

        return {
            ...estado_campanha,
            ganchos_ativos: estado_campanha.ganchos_ativos.filter(g => g !== gancho_id),
            ganchos_resolvidos: [...estado_campanha.ganchos_resolvidos, {
                id: gancho_id,
                titulo: gancho.título,
                resultado: resultado,
                data_resolucao: new Date().toISOString()
            }]
        };
    },

    // Ativar novo gancho
    ativarGancho: (estado_campanha, gancho_id) => {
        if (estado_campanha.ganchos_ativos.includes(gancho_id)) {
            return estado_campanha;
        }

        return {
            ...estado_campanha,
            ganchos_ativos: [...estado_campanha.ganchos_ativos, gancho_id]
        };
    },

    // Gerar relatório de sessão
    gerarRelatorioSessao: (estado_campanha) => {
        const eventos_recentes = estado_campanha.eventos_passados.slice(-7); // Última semana
        const ganchos_ativos = estado_campanha.ganchos_ativos.map(id => 
            ADVENTURE_DATA.ganchos_principais.find(g => g.id === id)
        ).filter(g => g);

        return {
            sessao: estado_campanha.sessao_atual,
            moral_atual: estado_campanha.moral_estacao,
            eventos_semana: eventos_recentes,
            ganchos_ativos: ganchos_ativos,
            ganchos_resolvidos_total: estado_campanha.ganchos_resolvidos.length,
            status_recursos: ADVENTURE_FUNCTIONS.gerarRelatorioStatus(),
            sugestao_proxima_aventura: ADVENTURE_FUNCTIONS.sugerirProximaAventura({
                recursos_baixos: estado_campanha.moral_estacao < 50,
                tensao_social: eventos_recentes.some(e => e.tipo === 'Tensão Social'),
                ameaca_externa: eventos_recentes.some(e => e.tipo === 'Ameaça Externa')
            })
        };
    }
};

// =========================================================================
// EXPORTS
// =========================================================================

// Export para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ADVENTURE_DATA, 
        ADVENTURE_FUNCTIONS, 
        CAMPAIGN_HELPERS 
    };
}

// Disponibilizar globalmente no browser
if (typeof window !== 'undefined') {
    window.ADVENTURE_DATA = ADVENTURE_DATA;
    window.ADVENTURE_FUNCTIONS = ADVENTURE_FUNCTIONS;
    window.CAMPAIGN_HELPERS = CAMPAIGN_HELPERS;
}

// =========================================================================
// INITIALIZATION LOG
// =========================================================================

console.log('🎲 Sistema de Aventuras da Estação Agulhas Negras carregado!');
console.log(`📋 ${ADVENTURE_DATA.ganchos_principais.length} ganchos principais disponíveis`);
console.log(`🎯 ${ADVENTURE_DATA.ganchos_menores.length} ganchos menores disponíveis`);
console.log(`⚠️ ${ADVENTURE_DATA.condicoes_especiais.length} condições especiais catalogadas`);
console.log(`🏢 ${Object.keys(ADVENTURE_DATA.localizacoes_especiais).length} localizações especiais mapeadas`);
console.log('🎮 Use ADVENTURE_FUNCTIONS para acessar funcionalidades do sistema');
console.log('📊 Use CAMPAIGN_HELPERS para gerenciar campanhas');