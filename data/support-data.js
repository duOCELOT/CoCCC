// =============================================================================
// SUPPORT STAFF DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const SUPPORT_DATA = [
    {
        id: 'miguel_santos',
        nome: 'Miguel Santos',
        profissao: 'Cozinheiro Chefe',
        categoria: 'suporte',
        idade: 41,
        altura: '1,75m',
        atributos: {
            FOR: 70, DES: 60, INT: 60, CON: 75,
            APA: 65, POD: 70, TAM: 70, EDU: 50
        },
        status: {
            pontosVida: 72,
            sanidade: 70,
            sorte: 80
        },
        pericias: [
            'Culinária 90%',
            'Administração 60%',
            'Contar Histórias 85%',
            'Arte (Culinária) 80%',
            'Persuasão 70%'
        ],
        equipamentos: ['Utensílios de cozinha', 'Avental', 'Facas profissionais'],
        personalidade: 'Jovial, contador de histórias, acolhedor',
        statusAtual: 'Saudável, sempre sorrindo apesar da cicatriz',
        descricaoFisica: 'Homem negro brasileiro de constituição robusta com barriga proeminente resultado de anos testando sua própria culinária. Cicatriz visível na testa conta uma história que ele transforma em piada para quebrar o gelo. Sorriso amplo e caloroso é sua marca registrada, irradiando acolhimento.',
        biografia: 'Miguel era chef em um restaurante popular no centro do Rio antes do apocalipse. Especialista em culinária brasileira tradicional, ele transformou sua paixão por alimentar pessoas em uma missão de sobrevivência. A cicatriz em sua testa veio de um acidente de cozinha anos antes da guerra. Na estação, Miguel descobriu que sua verdadeira vocação vai além da culinária: ele é o coração emocional da comunidade. Suas histórias durante as refeições mantêm o moral alto, e sua habilidade de transformar ingredientes limitados em refeições memoráveis é quase mágica.',
        relacionamentos: ['Tio adotivo de Ana Silva', 'Centro social da comunidade', 'Amigo próximo de Dona Carmen'],
        segredos: ['Esconde preocupações sobre Ana em combate', 'Mantém receitas da família perdida', 'Conhece histórias sobre o passado de todos'],
        motivacoes: ['Manter moral alto', 'Proteger Ana Silva', 'Preservar cultura através da comida'],
        medos: ['Perder Ana em combate', 'Ficar sem ingredientes', 'Comunidade perder esperança'],
        visualPrompt: '41-year-old Black Brazilian male chef, 1.75m height, stocky build with prominent belly, wide smile, scar on forehead, wearing chef\'s apron or kitchen clothes, holding cooking utensils, post-apocalyptic kitchen background, warm lighting, realistic style, storyteller expression, welcoming and jovial demeanor'
    },
    {
        id: 'rosa_martinez',
        nome: 'Rosa Martinez',
        profissao: 'Técnica em Eletrônicos',
        categoria: 'suporte',
        idade: 55,
        altura: '1,62m',
        atributos: {
            FOR: 50, DES: 85, INT: 75, CON: 65,
            APA: 55, POD: 75, TAM: 55, EDU: 70
        },
        status: {
            pontosVida: 60,
            sanidade: 75,
            sorte: 60
        },
        pericias: [
            'Eletrônica 85%',
            'Conserto (Geral) 80%',
            'Artesanato (Eletrônicos) 90%',
            'Matemática 70%',
            'Atenção aos Detalhes 85%'
        ],
        equipamentos: ['Óculos', 'Ferramentas precisas', 'Componentes eletrônicos'],
        personalidade: 'Meticulosa, paciente, observadora',
        statusAtual: 'Saudável, cabelos grisalhos bem cuidados',
        descricaoFisica: 'Mulher brasileira de meia-idade, cabelos grisalhos organizados em coque impecável, óculos de armação grossa que refletem sua personalidade meticulosa. Mãos ágeis e precisas trabalham constantemente com componentes eletrônicos delicados.',
        biografia: 'Rosa trabalhou 30 anos como técnica em eletrônicos para a Petrobras, especializada em equipamentos de precisão para exploração. Sua experiência com sistemas complexos em ambientes hostis a tornou invaluável para a estação. Divorciada, sem filhos, Rosa encontrou na comunidade a família que nunca teve. Sua paciência infinita contrasta com a urgência de Elena, criando uma dinâmica interessante entre as duas técnicas da estação.',
        relacionamentos: ['Às vezes conflita com Elena sobre abordagens técnicas', 'Mentora de Sofia', 'Respeitada por sua experiência'],
        segredos: ['Documenta falhas nos equipamentos antigos', 'Preocupa-se com obsolescência tecnológica', 'Mantém peças sobressalentes escondidas'],
        motivacoes: ['Manter tecnologia funcionando', 'Ensinar próxima geração', 'Provar valor da experiência'],
        medos: ['Equipamentos pararem definitivamente', 'Ser considerada obsoleta', 'Perder visão e precisão'],
        visualPrompt: '55-year-old mixed-race Brazilian female electronics technician, 1.62m height, graying hair in neat bun, thick-framed glasses, agile hands working on electronics, wearing practical work clothes, post-apocalyptic electronics workshop background, focused task lighting, realistic style, meticulous and patient expression, surrounded by electronic components'
    },
    {
        id: 'carlos_indio_silva',
        nome: 'Carlos "Índio" Silva',
        profissao: 'Mecânico',
        categoria: 'suporte',
        idade: 52,
        altura: '1,73m',
        atributos: {
            FOR: 80, DES: 70, INT: 65, CON: 85,
            APA: 60, POD: 80, TAM: 65, EDU: 45
        },
        status: {
            pontosVida: 75,
            sanidade: 80,
            sorte: 55
        },
        pericias: [
            'Mecânica 90%',
            'Operar Máquinas Pesadas 80%',
            'Rastreamento 75%',
            'Sobrevivência 85%',
            'Escutar 80%'
        ],
        equipamentos: ['Ferramentas mecânicas', 'Chaves inglesas', 'Peças de reposição'],
        personalidade: 'Silencioso, observador, sábio',
        statusAtual: 'Saudável, pele curtida pelo sol, tatuagens tribais',
        descricaoFisica: 'Homem brasileiro de ascendência indígena, pele curtida pelo sol e trabalho ao ar livre, cabelos longos e negros presos ou soltos conforme o trabalho. Tatuagens tribais decoram seus braços - arte que honra sua herança ancestral. Sua presença tranquila e confiante transmite competência sem necessidade de palavras.',
        biografia: 'Carlos cresceu em uma reserva indígena no Mato Grosso antes de se mudar para a cidade para estudar engenharia mecânica. Trabalhou em mineração e construção pesada, desenvolvendo habilidades com máquinas que agora são vitais para a estação. Suas tatuagens tribais contam a história de sua família e tradições que ele mantém vivas mesmo no mundo moderno. Conhecido como "Índio" desde a juventude, Carlos abraça o apelido como honra à sua herança.',
        relacionamentos: ['Respeitado por sua sabedoria', 'Mentor silencioso', 'Trabalha bem com Luiz'],
        segredos: ['Conhece sinais de mudanças na natureza', 'Mantém rituais ancestrais em segredo', 'Prevê problemas antes que aconteçam'],
        motivacoes: ['Manter harmonia com natureza', 'Preservar tradições ancestrais', 'Proteger a comunidade'],
        medos: ['Perda total da conexão com natureza', 'Desrespeito às tradições', 'Máquinas dominarem vida'],
        visualPrompt: '52-year-old Indigenous Brazilian male mechanic, 1.73m height, sun-weathered skin, long black hair, tribal tattoos on arms, silent and observant expression, wearing practical work clothes, post-apocalyptic mechanical workshop background, natural lighting, realistic style, wise and stoic demeanor, holding mechanical tools'
    },
    {
        id: 'amanda_ferreira',
        nome: 'Amanda Ferreira',
        profissao: 'Técnica Veterinária',
        categoria: 'suporte',
        idade: 26,
        altura: '1,60m',
        atributos: {
            FOR: 55, DES: 65, INT: 70, CON: 60,
            APA: 70, POD: 75, TAM: 50, EDU: 75
        },
        status: {
            pontosVida: 55,
            sanidade: 75,
            sorte: 70
        },
        pericias: [
            'Veterinária 80%',
            'Cuidar de Animais 90%',
            'Primeiros Socorros 70%',
            'Biologia 65%',
            'Empatia com Animais 95%'
        ],
        equipamentos: ['Kit veterinário', 'Medicamentos animais', 'Coleiras e guias'],
        personalidade: 'Tímida, cuidadosa, gentil',
        statusAtual: 'Saudável, cabelos loiros bagunçados, sardinhas',
        descricaoFisica: 'Jovem mulher branca brasileira, cabelos loiros frequentemente bagunçados pelo trabalho com animais, sardas espalhadas pelo rosto dão-lhe um ar jovial. Expressão tímida mas determinada, especialmente quando se trata do bem-estar animal. Sua timidez desaparece completamente quando trabalha com animais.',
        biografia: 'Amanda formou-se técnica veterinária em uma escola rural em Minas Gerais. Trabalhou em clínicas urbanas mas sempre sonhou em trabalhar com vida selvagem. O projeto da estação ofereceu a oportunidade de estabelecer um programa de conservação animal que ela abraçou enthusiasticamente. Após o apocalipse, seu papel expandiu drasticamente. Amanda é tia do adolescente Lucas, que perdeu os pais no apocalipse. Ela o criou com amor mas às vezes luta com sua natureza imprudente.',
        relacionamentos: ['Tia de Lucas', 'Próxima das crianças', 'Trabalha com os animais da estação'],
        segredos: ['Preocupa-se constantemente com Lucas', 'Documenta mutações nos animais', 'Esconde animais feridos dos outros'],
        motivacoes: ['Proteger todos os animais', 'Criar Lucas adequadamente', 'Manter biodiversidade'],
        medos: ['Lucas se machucar', 'Animais morrerem de doença', 'Falhar como figura materna'],
        visualPrompt: '26-year-old white Brazilian female veterinary technician, 1.60m height, messy blonde hair, freckles, shy expression, holding small animal or pet, wearing practical clothes suitable for animal care, post-apocalyptic animal shelter background, soft natural lighting, realistic style, gentle and caring demeanor, surrounded by animals'
    },
    {
        id: 'luiz_teixeira',
        nome: 'Luiz Teixeira',
        profissao: 'Construtor',
        categoria: 'suporte',
        idade: 45,
        altura: '1,80m',
        atributos: {
            FOR: 90, DES: 60, INT: 55, CON: 85,
            APA: 50, POD: 65, TAM: 75, EDU: 40
        },
        status: {
            pontosVida: 80,
            sanidade: 65,
            sorte: 50
        },
        pericias: [
            'Construção 90%',
            'Operar Máquinas Pesadas 75%',
            'Artesanato (Madeira) 80%',
            'Demolições 70%',
            'Engenharia Prática 65%'
        ],
        equipamentos: ['Ferramentas pesadas', 'Capacete', 'Martelo'],
        personalidade: 'Pragmático, trabalhador, sem rodeios',
        statusAtual: 'Saudável, calvo avançado, barba espessa, mãos enormes',
        descricaoFisica: 'Homem branco brasileiro alto e musculoso, calvície avançada compensada por barba espessa e bem cuidada. Mãos enormes e calejadas revelam décadas de trabalho manual pesado. Postura ereta e confiante, sem rodeios na comunicação.',
        biografia: 'Luiz trabalhou 25 anos na construção civil, subindo desde servente até mestre de obras em grandes projetos de infraestrutura no Rio e São Paulo. Sua experiência com construção em terrenos difíceis o tornou essencial para estabelecer e expandir as estruturas da estação. Prático até o âmago, Luiz vê problemas em termos de soluções concretas. Enquanto outros debatem teorias, ele pega suas ferramentas e constrói a resposta.',
        relacionamentos: ['Trabalha bem com Carlos', 'Respeitado pela força de trabalho', 'Sem paciência para discussões'],
        segredos: ['Estruturas estão se deteriorando mais rápido que esperado', 'Preocupa-se com fundações da estação', 'Esconde sua educação limitada'],
        motivacoes: ['Manter todos abrigados e seguros', 'Construir para durar', 'Ensinar habilidades práticas'],
        medos: ['Colapso estrutural', 'Ferimentos graves no trabalho', 'Ser considerado burro'],
        visualPrompt: '45-year-old white Brazilian male construction worker, 1.80m height, muscular build, advanced baldness, thick beard, enormous hands, wearing construction work clothes, holding tools, post-apocalyptic construction site background, industrial lighting, realistic style, pragmatic and hardworking expression, no-nonsense demeanor'
    },
    {
        id: 'sofia_oliveira',
        nome: 'Sofia Oliveira',
        profissao: 'Técnica de Laboratório',
        categoria: 'suporte',
        idade: 31,
        altura: '1,65m',
        atributos: {
            FOR: 60, DES: 70, INT: 80, CON: 65,
            APA: 70, POD: 70, TAM: 60, EDU: 75
        },
        status: {
            pontosVida: 62,
            sanidade: 70,
            sorte: 65
        },
        pericias: [
            'Química 80%',
            'Ciências (Laboratório) 85%',
            'Pesquisa 75%',
            'Observação 80%',
            'Análise de Dados 70%'
        ],
        equipamentos: ['Jaleco', 'Equipamentos de laboratório', 'Piercing no nariz'],
        personalidade: 'Curiosa, questionadora, analítica',
        statusAtual: 'Saudável, dreadlocks bem cuidados, braços definidos',
        descricaoFisica: 'Mulher negra brasileira de porte atlético, cabelos cacheados em dreadlocks bem cuidados que refletem sua personalidade organizada mas criativa. Piercing no nariz adiciona um toque de individualidade ao jaleco de laboratório profissional. Braços definidos revelam que ela equilibra trabalho intelectual com atividade física.',
        biografia: 'Sofia formou-se em química pela UFRJ e trabalhou em laboratórios farmacêuticos antes de se especializar em análises ambientais. Seu trabalho na estação envolve testar qualidade da água, solo e ar - uma responsabilidade vital em um mundo pós-nuclear. Sua natureza questionadora às vezes irrita aqueles que preferem aceitar respostas simples, mas Sofia acredita que questionar constantemente é a única forma de sobreviver em um ambiente onde pequenos erros podem ser fatais.',
        relacionamentos: ['Aprendiz de Rosa', 'Trabalha com os cientistas', 'Questionadora das autoridades'],
        segredos: ['Detecta contaminação crescente', 'Questiona decisões da liderança', 'Mantém resultados alarmantes em segredo'],
        motivacoes: ['Descobrir a verdade científica', 'Manter todos seguros', 'Questionar autoridade quando necessário'],
        medos: ['Contaminação letal', 'Ser silenciada por autoridades', 'Descobrir verdades horríveis'],
        visualPrompt: '31-year-old Black Brazilian female lab technician, 1.65m height, curly hair in dreadlocks, nose piercing, defined arms, wearing lab coat over casual clothes, post-apocalyptic laboratory background, bright scientific lighting, realistic style, curious and questioning expression, holding scientific instruments'
    },
    {
        id: 'ricardo_costa',
        nome: 'Ricardo Costa',
        profissao: 'Operador de Rádio',
        categoria: 'suporte',
        idade: 39,
        altura: '1,77m',
        atributos: {
            FOR: 50, DES: 80, INT: 75, CON: 55,
            APA: 60, POD: 60, TAM: 55, EDU: 70
        },
        status: {
            pontosVida: 55,
            sanidade: 60,
            sorte: 75
        },
        pericias: [
            'Rádio/Comunicações 90%',
            'Eletrônica 75%',
            'Escutar 85%',
            'Línguas (Inglês) 60%',
            'Criptografia 65%'
        ],
        equipamentos: ['Fones de ouvido', 'Equipamentos de rádio', 'Óculos redondos'],
        personalidade: 'Nervoso, falante, ágil',
        statusAtual: 'Saudável mas ansioso, barba rala, sempre com fones',
        descricaoFisica: 'Homem brasileiro de constituição magra, óculos redondos que amplificam seus olhos expressivos, barba rala que ele coça quando nervoso. Dedos ágeis dançam constantemente sobre controles e botões. Raramente visto sem fones de ouvido, mesmo quando não está trabalhando.',
        biografia: 'Ricardo era operador de rádio amador antes de se profissionalizar em telecomunicações. Trabalhava para uma empresa de comunicações por satélite quando foi recrutado para a estação. Sua personalidade naturalmente ansiosa se intensificou após o apocalipse, quando ele se tornou a única conexão da estação com o mundo exterior. Cada transmissão pode trazer notícias vitais ou devastadoras, um peso que ele carrega sozinho.',
        relacionamentos: ['Primo de Isadora', 'Fonte de informações externas', 'Às vezes estressado por notícias ruins'],
        segredos: ['Intercepta comunicações militares', 'Esconde más notícias para proteger moral', 'Recebe mensagens codificadas misteriosas'],
        motivacoes: ['Manter comunicação com mundo exterior', 'Proteger a estação de ameaças', 'Encontrar outros sobreviventes'],
        medos: ['Perder contato com mundo exterior', 'Receber notícias catastróficas', 'Equipamentos falharem permanentemente'],
        condicoes: ['Ansiedade - penalidades sociais com estranhos'],
        visualPrompt: '39-year-old mixed-race Brazilian male radio operator, 1.77m height, thin build, round glasses, sparse beard, agile fingers, wearing headphones, surrounded by radio equipment, post-apocalyptic communications center background, electronic glow lighting, realistic style, nervous and talkative expression, multiple radio devices visible'
    },
    {
        id: 'beatriz_almeida',
        nome: 'Beatriz Almeida',
        profissao: 'Técnica Agrícola',
        categoria: 'suporte',
        idade: 28,
        altura: '1,58m',
        atributos: {
            FOR: 70, DES: 75, INT: 65, CON: 80,
            APA: 65, POD: 70, TAM: 50, EDU: 65
        },
        status: {
            pontosVida: 65,
            sanidade: 70,
            sorte: 70
        },
        pericias: [
            'Agricultura 85%',
            'Sobrevivência 80%',
            'Botânica 70%',
            'Operar Máquinas (Agrícolas) 75%',
            'Administração 60%'
        ],
        equipamentos: ['Ferramentas agrícolas', 'Sementes', 'Equipamentos de irrigação'],
        personalidade: 'Prática, eficiente, sem rodeios',
        statusAtual: 'Saudável, sempre bronzeada, cabelos castanhos curtos',
        descricaoFisica: 'Mulher brasileira baixa mas de constituição atlética, cabelos castanhos curtos por praticidade, sempre bronzeada pelo trabalho ao sol. Mãos calejadas e sujas de terra revelam dedicação ao trabalho agrícola. Expressão determinada e eficiente, sem tempo para frivolidades.',
        biografia: 'Beatriz cresceu em uma fazenda familiar em Minas Gerais, aprendendo agricultura desde criança. Formou-se técnica agrícola e especializou-se em agricultura sustentável e orgânica. Foi recrutada para a estação devido à necessidade de estabelecer sistemas alimentares autossuficientes. Sua abordagem prática e conhecimento tradicional complementam perfeitamente o conhecimento científico da Dra. Camila.',
        relacionamentos: ['Trabalha com Dra. Camila', 'Responsável pela produção de alimentos', 'Respeitada por sua eficiência'],
        segredos: ['Preocupa-se com pragas mutantes', 'Esconde falhas nas colheitas', 'Mantém sementes secretas como reserva'],
        motivacoes: ['Garantir autossuficiência alimentar', 'Manter tradições agrícolas', 'Proteger biodiversidade'],
        medos: ['Perda total das colheitas', 'Solo tornar-se improdutivo', 'Comunidade passar fome'],
        visualPrompt: '28-year-old white Brazilian female agricultural technician, 1.58m height, short brown hair, athletic body, always tanned, wearing practical farm clothes, holding agricultural tools or plants, greenhouse or farm background, natural bright lighting, realistic style, practical and efficient expression, no-nonsense demeanor'
    }
];

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPPORT_DATA;
}