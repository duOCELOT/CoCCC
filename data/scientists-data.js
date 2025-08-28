// =============================================================================
// SCIENTISTS DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const SCIENTISTS_DATA = [
    {
        id: 'mariana_costa',
        nome: 'Dra. Mariana Costa',
        profissao: 'Líder da Estação / Cientista Chefe',
        categoria: 'cientificos',
        idade: 42,
        altura: '1,65m',
        atributos: {
            FOR: 60, DES: 70, INT: 85, CON: 75,
            APA: 65, POD: 80, TAM: 55, EDU: 90
        },
        status: {
            pontosVida: 65,
            sanidade: 80,
            sorte: 65
        },
        pericias: [
            'Ciências (Geral) 85%',
            'Liderança 80%',
            'Primeiros Socorros 70%',
            'Psicologia 65%',
            'Sobrevivência 75%'
        ],
        equipamentos: ['Tablet científico', 'Equipamentos de laboratório', 'Pistola .22'],
        personalidade: 'Determinada, protetora, pragmática',
        statusAtual: 'Saudável, preocupada com recursos diminuindo',
        descricaoFisica: 'Mulher brasileira de 42 anos, constituição mediana, pele morena, cabelos castanho-escuros presos em rabo de cavalo prático. Usa óculos de armação metálica e possui uma cicatriz visível no braço esquerdo - lembrança dos primeiros dias caóticos após o apocalipse. Sua expressão é determinada, mas seus olhos revelam uma preocupação constante pelo bem-estar de todos sob sua responsabilidade.',
        biografia: 'Antes da Grande Guerra Nuclear de 2051, Mariana era uma respeitada cientista ambiental trabalhando no Instituto Nacional de Pesquisas da Amazônia. Quando os primeiros sinais de conflito global emergiram, ela foi recrutada para liderar um projeto de preservação científica em uma estação remota nas montanhas de Agulhas Negras. O que começou como uma missão de seis meses transformou-se em um refúgio permanente quando o mundo desabou. A cicatriz em seu braço veio de um acidente nos primeiros dias da estação, quando ainda aprendiam a adaptar equipamentos científicos para a sobrevivência. Esse momento a ensinou que liderar significava mais do que conhecimento técnico - significava tomar decisões impossíveis para manter 22 pessoas vivas em um mundo hostil.',
        relacionamentos: ['Líder respeitada por todos', 'Confia especialmente no Dr. Paulo', 'Preocupa-se com Ana Silva como uma filha'],
        segredos: ['Sabe detalhes sobre a verdadeira missão da estação', 'Mantém diário pessoal com dúvidas sobre liderança', 'Recebe comunicações misteriosas de outras instalações'],
        motivacoes: ['Manter todos vivos', 'Preservar conhecimento científico', 'Encontrar outras comunidades sobreviventes'],
        medos: ['Perder alguém sob sua responsabilidade', 'Tomar a decisão errada', 'Ficar sozinha no comando'],
        visualPrompt: '8K, masterpiece, ultra high-definition macro photography, ultra-detailed, Nikon D850, 105mm f/2.8 macro lens, soft diffused natural light, digital painting with photographic realism, hyperrealistic depiction of: 42-year-old Brazilian woman scientist in post-apocalyptic setting, medium build 1.65m, brown skin tone, dark brown hair tied back in practical ponytail, wearing metal-framed glasses, visible scar on left arm, determined facial expression with caring eyes, wearing practical field clothes with scientist patches, holding tablet or scientific equipment, over a {grass path|dirt road|rocky terrain|water pond| cement area| wooden planks path}, dust clouds, positioned in a rugged tropical forest scene with cracked ochre earth, scattered tufts of green grass, vegetation, thorny acacia shrubs and sparse arboreal vegetation, warm ambient light casting soft shadows, dust particles subtly suspended in air, harmonious blend of realism and painterly composition, mood is wild, raw, and powerfully visceral. {day time, blue sky, white clouds| night time, full moon, stars, constellations and galaxies}'
    },
    {
        id: 'paulo_santos',
        nome: 'Dr. Paulo Santos',
        profissao: 'Médico Chefe',
        categoria: 'cientificos',
        idade: 38,
        altura: '1,78m',
        atributos: {
            FOR: 70, DES: 65, INT: 80, CON: 80,
            APA: 70, POD: 75, TAM: 65, EDU: 85
        },
        status: {
            pontosVida: 72,
            sanidade: 75,
            sorte: 60
        },
        pericias: [
            'Medicina 90%',
            'Primeiros Socorros 95%',
            'Psicologia 60%',
            'Farmácia 70%',
            'Biologia 65%'
        ],
        equipamentos: ['Kit médico completo', 'Estetoscópio', 'Medicamentos'],
        personalidade: 'Calmo, profissional, cético mas bondoso',
        statusAtual: 'Saudável, sobrecarregado com casos médicos',
        descricaoFisica: 'Homem negro brasileiro alto e atlético, barba prematuramente grisalha que contrasta com sua idade. Mantém as mãos sempre limpas - um luxo que ele insiste em preservar mesmo no pós-apocalipse. Postura ereta e porte profissional, emanando calma mesmo nas situações mais tensas. Geralmente veste jaleco médico sobre roupas práticas, estetoscópio sempre ao redor do pescoço.',
        biografia: 'Paulo formou-se em medicina pela UFMG e especializou-se em medicina de emergência, trabalhando em hospitais de trauma no Rio de Janeiro. Quando foi recrutado para a Estação Agulhas Negras como médico de expedição, pensou que seria apenas mais uma missão científica rotineira. O apocalipse o forçou a redefinir completamente sua prática médica. Sem recursos modernos, teve que reaprender medicina usando técnicas antigas e improvisações criativas. Seu ceticismo desenvolveu-se após presenciar como rapidamente a civilização se desintegrou, mas sua bondade fundamental permanece inabalada.',
        relacionamentos: ['Braço direito da Dra. Mariana', 'Mentor do jovem Pedro', 'Respeitado por toda comunidade'],
        segredos: ['Preocupa-se com mutações genéticas nos sobreviventes', 'Questiona métodos de Roberto com feridos', 'Mantém registros médicos secretos'],
        motivacoes: ['Curar e proteger todos', 'Manter padrões médicos altos', 'Treinar sucessores'],
        medos: ['Epidemia na estação', 'Perder sua humanidade', 'Não ter recursos para emergências'],
        visualPrompt: '38-year-old Black Brazilian male doctor, tall 1.78m athletic build, prematurely gray beard, clean hands, upright posture, calm and professional demeanor, wearing medical coat or practical clothes, stethoscope around neck, post-apocalyptic medical facility background, natural lighting, realistic style, kind but skeptical expression, protective stance'
    },
    {
        id: 'elena_vasquez',
        nome: 'Elena Vasquez',
        profissao: 'Engenheira Elétrica',
        categoria: 'cientificos',
        idade: 29,
        altura: '1,55m',
        atributos: {
            FOR: 45, DES: 80, INT: 85, CON: 60,
            APA: 60, POD: 65, TAM: 45, EDU: 80
        },
        status: {
            pontosVida: 52,
            sanidade: 65,
            sorte: 70
        },
        pericias: [
            'Eletrônica 90%',
            'Conserto Elétrico 85%',
            'Engenharia 80%',
            'Computadores 75%',
            'Operar Máquinas Pesadas 60%'
        ],
        equipamentos: ['Kit de ferramentas eletrônicas', 'Multímetro', 'Laptop resistente'],
        personalidade: 'Perfeccionista, focada, nervosa',
        statusAtual: 'Saudável, viciada em café (quando disponível)',
        descricaoFisica: 'Mulher latina pequena e energética, cabelos curtos e cacheados sempre ligeiramente desalinhados pelo trabalho. Uma tatuagem de placa de circuito é visível em seu pulso - arte que ela fez questão de manter mesmo após o apocalipse. Sempre carrega ferramentas ou equipamentos eletrônicos, mãos ágeis constantemente em movimento.',
        biografia: 'Elena era uma engenheira promissora em uma startup de energia renovável em São Paulo. Especialista em sistemas solares e eletrônica de baixo consumo, foi recrutada para a estação devido à necessidade de sistemas energéticos sustentáveis em locais remotos. Sua personalidade perfeccionista, que a fez brilhar na carreira, agora se tornou uma obsessão vital - um sistema mal ajustado pode significar a diferença entre vida e morte para toda a comunidade. Elena raramente dorme mais de quatro horas por noite, constantemente verificando e ajustando os sistemas elétricos da estação.',
        relacionamentos: ['Às vezes conflita com Rosa sobre métodos', 'Admirada por sua competência', 'Próxima de Ricardo por trabalharem com eletrônicos'],
        segredos: ['Intercepta sinais eletrônicos estranhos', 'Suspeita de sabotagem nos sistemas', 'Esconde falhas críticas para não causar pânico'],
        motivacoes: ['Manter todos os sistemas funcionando', 'Inovar com recursos limitados', 'Provar seu valor técnico'],
        medos: ['Falha total dos sistemas', 'Cometer erro fatal', 'Ser responsabilizada por mortes'],
        condicoes: ['Dependência de Cafeína - penalidades em concentração sem café'],
        visualPrompt: '29-year-old petite Latina engineer, 1.55m height, short curly hair, circuit board tattoo visible on wrist, always holding tools or electronic equipment, wearing practical work clothes with tool belt, perfectionist focused expression, post-apocalyptic workshop background with electronic equipment, dramatic workshop lighting, realistic style, slightly nervous energy, coffee cup nearby'
    },
    {
        id: 'joao_mendes',
        nome: 'Prof. João Mendes',
        profissao: 'Biólogo / Professor',
        categoria: 'cientificos',
        idade: 67,
        altura: '1,70m',
        atributos: {
            FOR: 50, DES: 45, INT: 90, CON: 55,
            APA: 40, POD: 85, TAM: 60, EDU: 95
        },
        status: {
            pontosVida: 57,
            sanidade: 85,
            sorte: 45
        },
        pericias: [
            'Biologia 95%',
            'Botânica 90%',
            'Ensino 85%',
            'História Natural 80%',
            'Rastreamento 60%'
        ],
        equipamentos: ['Lupas', 'Cadernos de campo', 'Amostras biológicas'],
        personalidade: 'Distraído, brilhante, ausente',
        statusAtual: 'Saudável para a idade, frequentemente sujo de terra',
        descricaoFisica: 'Professor idoso de constituição mediana, cabelos brancos sempre desalinhados e barba descuidada. Suas roupas estão perpetuamente sujas de terra - uma marca registrada que ele considera um sinal de trabalho produtivo. Olhos brilhantes revelam uma inteligência aguçada apesar da aparência distraída.',
        biografia: 'João dedicou 40 anos ao ensino de biologia na Universidade Federal Rural do Rio de Janeiro. Professor emérito especialista em adaptação de plantas a ambientes hostis, foi recrutado para a estação devido ao seu conhecimento sobre sobrevivência botânica em condições extremas. Viúvo há cinco anos, João encontrou na estação uma nova família e um propósito renovado. Seu neto Pedro é sua maior alegria e preocupação. O apocalipse, paradoxalmente, trouxe-lhe uma oportunidade única de estudar adaptação biológica em tempo real.',
        relacionamentos: ['Avô de Pedro', 'Às vezes discorda da Dra. Camila sobre teorias', 'Respeitado professor da comunidade'],
        segredos: ['Documenta mutações preocupantes nas plantas', 'Suspeita de experimentos pré-guerra', 'Esconde descobertas perturbadoras de Pedro'],
        motivacoes: ['Proteger Pedro', 'Documentar mudanças biológicas', 'Ensinar conhecimento às novas gerações'],
        medos: ['Perder Pedro', 'Plantas tornarem-se hostis', 'Morrer antes de passar conhecimento'],
        visualPrompt: '67-year-old elderly white Brazilian male professor, 1.70m height, disheveled white hair, unkempt beard, clothes dirty with soil, distracted but brilliant expression, holding biological specimens or field notes, surrounded by plants and research materials, outdoor forest setting, natural lighting, realistic style, wise but absent-minded demeanor, weathered hands'
    },
    {
        id: 'camila_rocha',
        nome: 'Dra. Camila Rocha',
        profissao: 'Botânica',
        categoria: 'cientificos',
        idade: 30,
        altura: '1,68m',
        atributos: {
            FOR: 65, DES: 70, INT: 75, CON: 70,
            APA: 75, POD: 70, TAM: 60, EDU: 80
        },
        status: {
            pontosVida: 65,
            sanidade: 70,
            sorte: 75
        },
        pericias: [
            'Botânica 85%',
            'Agricultura 80%',
            'Química 60%',
            'Primeiros Socorros 65%',
            'Sobrevivência 70%'
        ],
        equipamentos: ['Ferramentas de jardinagem', 'Sementes', 'Mudas'],
        personalidade: 'Otimista, maternal, cuidadosa',
        statusAtual: 'Saudável, sempre com terra nas unhas',
        descricaoFisica: 'Mulher brasileira de ascendência mista, cabelos longos sempre presos para trabalhar, mãos inevitavelmente sujas de terra - uma característica que ela abraça como símbolo de seu trabalho vital. Sorriso fácil e expressão otimista que brilha mesmo nos dias mais difíceis. Sua presença maternal é imediatamente perceptível, irradiando cuidado e esperança.',
        biografia: 'Camila especializou-se em botânica aplicada pela ESALQ-USP, focando em agricultura sustentável e recuperação de solos degradados. Chegou à estação como consultora para o projeto de autossuficiência alimentar, nunca imaginando que se tornaria literalmente a fonte de vida da comunidade. Após o apocalipse, Camila assumiu a responsabilidade de garantir que a estação seja alimentarmente autossuficiente. Desenvolveu sistemas hidropônicos inovadores e adaptou plantas para crescerem no solo contaminado da região.',
        relacionamentos: ['Trabalha próxima com Prof. João', 'Figura maternal para as crianças', 'Colabora com Beatriz na agricultura'],
        segredos: ['Plantas estão evoluindo de forma não-natural', 'Alguns espécimes são potencialmente perigosos', 'Mantém jardim secreto de flores'],
        motivacoes: ['Garantir alimentação da comunidade', 'Preservar beleza no mundo', 'Cuidar das crianças'],
        medos: ['Perda da colheita', 'Plantas tornarem-se tóxicas', 'Fracassar como figura maternal'],
        visualPrompt: '30-year-old mixed-race Brazilian female botanist, 1.68m height, long hair always tied back, hands with soil under nails, easy smile, optimistic expression, wearing gardening clothes, surrounded by plants and greenhouse setting, natural bright lighting, realistic style, maternal and nurturing presence, holding seedlings or botanical specimens'
    }
];

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SCIENTISTS_DATA;
}