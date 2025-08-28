// =============================================================================
// DEPENDENTS DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const DEPENDENTS_DATA = [
    {
        id: 'seu_antonio',
        nome: 'Seu Antônio',
        profissao: 'Contador de Histórias',
        categoria: 'dependentes',
        idade: 78,
        altura: '1,65m',
        atributos: {
            FOR: 30, DES: 35, INT: 75, CON: 50,
            APA: 60, POD: 85, TAM: 50, EDU: 60
        },
        status: {
            pontosVida: 50,
            sanidade: 85,
            sorte: 90
        },
        pericias: [
            'Contar Histórias 95%',
            'História 80%',
            'Persuasão 75%',
            'Psicologia 70%',
            'Folclore 90%'
        ],
        equipamentos: ['Bengala de madeira', 'Óculos', 'Cadeira preferida'],
        personalidade: 'Sábio, alegre, avô de todos',
        statusAtual: 'Frágil mas espirituoso, desdentado, cabelos brancos cacheados',
        descricaoFisica: 'Idoso negro brasileiro de constituição frágil, cabelos brancos cacheados sempre bem cuidados, sorriso desdentado que ilumina o ambiente. Bengala de madeira que ele talha pessoalmente, óculos antigos mas funcionais, sempre vestindo roupas simples mas limpas.',
        biografia: 'Seu Antônio trabalhou a vida toda como zelador de uma escola primária no subúrbio do Rio. Viúvo há 15 anos, perdeu os filhos no apocalipse, mas encontrou na estação uma nova família. Suas histórias misturam memórias reais, folclore brasileiro e sabedoria de vida, mantendo vivas as tradições culturais em um mundo que perdeu muito de sua humanidade.',
        relacionamentos: ['Avô adotivo de toda comunidade', 'Fonte de sabedoria e histórias', 'Amado por todos'],
        segredos: ['Lembra-se de mais do passado do que aparenta', 'Esconde tristeza profunda pela família perdida', 'Conhece histórias antigas da região'],
        motivacoes: ['Manter moral alto', 'Preservar cultura e tradições', 'Ser útil apesar da idade'],
        medos: ['Morrer e levar as histórias consigo', 'Ser um fardo', 'Esquecer as tradições'],
        condicoes: ['Artrite - penalidades em DEX quando está frio', 'Audição limitada'],
        visualPrompt: '78-year-old elderly Black Brazilian male storyteller, 1.65m height, thin build, white curly hair, wooden cane, toothless smile, wearing simple elderly clothes, post-apocalyptic community area background, warm natural lighting, realistic style, wise and cheerful expression, grandfather-like demeanor, surrounded by younger people listening'
    },
    {
        id: 'dona_carmen',
        nome: 'Dona Carmen',
        profissao: 'Cozinheira',
        categoria: 'dependentes',
        idade: 71,
        altura: '1,55m',
        atributos: {
            FOR: 40, DES: 45, INT: 60, CON: 55,
            APA: 55, POD: 80, TAM: 55, EDU: 45
        },
        status: {
            pontosVida: 55,
            sanidade: 80,
            sorte: 85
        },
        pericias: [
            'Culinária 85%',
            'Administração Doméstica 80%',
            'Primeiros Socorros 60%',
            'Psicologia 65%',
            'Artesanato 70%'
        ],
        equipamentos: ['Avental', 'Utensílios de cozinha', 'Receitas antigas'],
        personalidade: 'Maternal, cuidadosa, vovó amorosa',
        statusAtual: 'Saudável para a idade, cabelos brancos em coque, sempre de avental',
        descricaoFisica: 'Idosa branca brasileira de constituição corpulenta, cabelos brancos sempre organizados em coque tradicional, avental que nunca sai de seu corpo. Mãos calejadas por décadas de trabalho doméstico, expressão maternal que transmite cuidado e amor incondicional.',
        biografia: 'Carmen foi dona de casa e mãe de cinco filhos antes do apocalipse. Perdeu toda a família na catástrofe, mas canalizou sua dor em cuidar dos sobreviventes da estação como se fossem seus próprios filhos e netos. Sua culinária simples mas carinhosa e seus cuidados maternais são pilares emocionais da comunidade.',
        relacionamentos: ['Vovó de toda comunidade', 'Trabalha com Miguel', 'Cuida especialmente das crianças'],
        segredos: ['Esconde dor profunda pela família perdida', 'Guarda receitas de família como tesouro', 'Chora em particular regularmente'],
        motivacoes: ['Cuidar de todos como família', 'Manter tradições culinárias', 'Ser a vovó que perderam'],
        medos: ['Perder mais pessoas queridas', 'Ficar sem ingredientes para cozinhar', 'Morrer sem ensinar receitas'],
        visualPrompt: '71-year-old elderly white Brazilian female cook, 1.55m height, stocky build, white hair in bun, always wearing apron, post-apocalyptic kitchen background, warm domestic lighting, realistic style, maternal and caring expression, holding cooking utensils, nurturing grandmother demeanor'
    },
    {
        id: 'pedro_mendes',
        nome: 'Pedro Mendes',
        profissao: 'Estudante',
        categoria: 'dependentes',
        idade: 12,
        altura: '1,45m',
        atributos: {
            FOR: 40, DES: 70, INT: 80, CON: 60,
            APA: 65, POD: 75, TAM: 35, EDU: 50
        },
        status: {
            pontosVida: 47,
            sanidade: 75,
            sorte: 85
        },
        pericias: [
            'Ciências 70%',
            'Computadores 60%',
            'Escalar 75%',
            'Observação 70%',
            'Aprender Rápido 90%'
        ],
        equipamentos: ['Livros', 'Tablet educacional', 'Kit científico infantil'],
        personalidade: 'Curioso, energético, inteligente',
        statusAtual: 'Saudável, sempre com joelhos ralados, cabelos bagunçados',
        descricaoFisica: 'Menino brasileiro de 12 anos, magro e ágil, cabelos castanhos sempre bagunçados por suas aventuras. Joelhos perpetuamente ralados de escalar e explorar, olhos brilhantes de curiosidade científica. Roupas sempre ligeiramente sujas de suas investigações.',
        biografia: 'Pedro perdeu os pais no apocalipse mas foi criado pelo avô João, que nutriu sua curiosidade natural e amor pela ciência. Extremamente inteligente para a idade, Pedro absorve conhecimento como uma esponja e frequentemente faz perguntas que surpreendem os adultos. Sua energia juvenil e otimismo trazem alegria mesmo nos momentos mais difíceis.',
        relacionamentos: ['Neto do Prof. João', 'Protegido pelo Dr. Paulo', 'Líder natural entre as crianças'],
        segredos: ['Escuta conversas dos adultos sobre perigos', 'Explora áreas proibidas da estação', 'Sabe mais sobre os problemas do que aparenta'],
        motivacoes: ['Aprender tudo sobre ciência', 'Ajudar o avô', 'Explorar e descobrir'],
        medos: ['Perder o avô', 'Ser tratado como criança pequena', 'Não entender algo importante'],
        condicoes: ['Alergia a pólen - testes de CON na primavera'],
        visualPrompt: '12-year-old white Brazilian boy student, 1.45m height, thin build, messy brown hair, always scraped knees, wearing casual children\'s clothes, post-apocalyptic school or lab background, bright natural lighting, realistic style, curious and energetic expression, holding books or scientific tools, inquisitive demeanor'
    },
    {
        id: 'maria_silva',
        nome: 'Maria Silva',
        profissao: 'Estudante',
        categoria: 'dependentes',
        idade: 8,
        altura: '1,20m',
        atributos: {
            FOR: 30, DES: 65, INT: 70, CON: 55,
            APA: 80, POD: 80, TAM: 25, EDU: 30
        },
        status: {
            pontosVida: 40,
            sanidade: 80,
            sorte: 90
        },
        pericias: [
            'Arte 85%',
            'Observação 75%',
            'Furtividade 70%',
            'Empatia 80%',
            'Criatividade 90%'
        ],
        equipamentos: ['Materiais de desenho', 'Bonecas', 'Livros infantis'],
        personalidade: 'Tímida, observadora, artística',
        statusAtual: 'Saudável, cabelos cacheados em chiquinhas, sorriso tímido',
        descricaoFisica: 'Menina negra brasileira de 8 anos, pequena para a idade, cabelos cacheados sempre organizados em chiquinhas adoráveis. Sorriso tímido mas doce, olhos grandes e expressivos que captam tudo ao seu redor. Sempre carregando materiais de arte ou desenhos.',
        biografia: 'Maria perdeu a família no apocalipse e foi encontrada sozinha por uma patrulha da estação. Traumatizada inicialmente, ela encontrou refúgio na arte e no carinho da comunidade. Suas obras de arte, mesmo sendo criança, capturam tanto a beleza quanto a tristeza do mundo pós-apocalíptico de uma forma que comove os adultos.',
        relacionamentos: ['Irmã adotiva no grupo', 'Protegida por todos', 'Especialmente próxima da Dra. Camila'],
        segredos: ['Desenha pesadelos que não conta para ninguém', 'Lembra-se mais do apocalipse do que os adultos pensam', 'Esconde em locais secretos para desenhar'],
        motivacoes: ['Expressar sentimentos através da arte', 'Fazer todos sorrirem', 'Encontrar beleza no mundo'],
        medos: ['Ficar sozinha novamente', 'Perder seus materiais de arte', 'Escuridão e ruídos altos'],
        visualPrompt: '8-year-old Black Brazilian girl student, 1.20m height, curly hair in pigtails, shy smile, wearing simple children\'s clothes, holding drawing materials or artwork, post-apocalyptic community center background, soft natural lighting, realistic style, quiet and observant expression, artistic and thoughtful demeanor'
    },
    {
        id: 'lucas_ferreira',
        nome: 'Lucas Ferreira',
        profissao: 'Ajudante de Animais',
        categoria: 'dependentes',
        idade: 14,
        altura: '1,55m',
        atributos: {
            FOR: 55, DES: 80, INT: 65, CON: 70,
            APA: 60, POD: 70, TAM: 45, EDU: 45
        },
        status: {
            pontosVida: 57,
            sanidade: 70,
            sorte: 75
        },
        pericias: [
            'Cuidar de Animais 75%',
            'Escalar 85%',
            'Rastreamento 70%',
            'Sobrevivência 65%',
            'Travessuras 90%'
        ],
        equipamentos: ['Ração animal', 'Cordas', 'Ferramentas simples'],
        personalidade: 'Aventureiro, imprudente, curioso',
        statusAtual: 'Saudável, sempre sujo, cabelos loiros rebeldes, sardinhas',
        descricaoFisica: 'Adolescente brasileiro de 14 anos, sardento como sua tia Amanda, sempre sujo de terra e aventuras. Cabelos loiros rebeldes que se recusam a ficar penteados, constituição ágil e energética. Roupas sempre rasgadas ou manchadas de suas escapadas.',
        biografia: 'Lucas perdeu os pais quando tinha 10 anos e foi criado por sua tia Amanda. Herdou dela o amor pelos animais, mas desenvolveu uma natureza aventureira que a preocupa constantemente. Ele conhece cada canto da estação e arredores, frequentemente descobrindo coisas que deveria deixar em paz.',
        relacionamentos: ['Sobrinho de Amanda', 'Sempre metido em confusão', 'Curioso sobre tudo'],
        segredos: ['Explora túneis e áreas proibidas', 'Alimenta animais selvagens em segredo', 'Descobriu coisas estranhas na floresta'],
        motivacoes: ['Cuidar de todos os animais', 'Explorar lugares novos', 'Provar que é corajoso'],
        medos: ['Decepcionar Amanda', 'Animais morrerem', 'Ser impedido de explorar'],
        visualPrompt: '14-year-old white Brazilian boy animal helper, 1.55m height, freckled like his aunt, always dirty, rebellious blonde hair, wearing practical outdoor clothes, surrounded by animals, post-apocalyptic farm or animal area background, natural outdoor lighting, realistic style, adventurous and imprudent expression, curious about everything'
    },
    {
        id: 'isadora_costa',
        nome: 'Isadora Costa',
        profissao: 'Estudante',
        categoria: 'dependentes',
        idade: 10,
        altura: '1,30m',
        atributos: {
            FOR: 35, DES: 60, INT: 85, CON: 50,
            APA: 70, POD: 75, TAM: 30, EDU: 60
        },
        status: {
            pontosVida: 40,
            sanidade: 75,
            sorte: 80
        },
        pericias: [
            'Leitura Avançada 85%',
            'Matemática 80%',
            'Pesquisa 70%',
            'Memorização 90%',
            'Análise 75%'
        ],
        equipamentos: ['Livros', 'Óculos pequenos', 'Cadernos', 'Lápis'],
        personalidade: 'Intelectual, precoce, questionadora',
        statusAtual: 'Saudável, cabelos cacheados castanhos, óculos pequenos',
        descricaoFisica: 'Menina brasileira de 10 anos, mestiça, cabelos cacheados castanhos sempre bem cuidados, óculos pequenos que dão ar ainda mais intelectual. Sempre carregando livros ou cadernos, postura ereta e atenta, expressão séria para a idade.',
        biografia: 'Isadora é filha de professores universitários que morreram no apocalipse. Criada coletivamente pela estação, desenvolveu uma inteligência precoce e sede insaciável por conhecimento. Prima de Ricardo, ela frequentemente o ajuda com cálculos complexos e decodificação de sinais.',
        relacionamentos: ['Prima de Ricardo', 'Pequena gênia da comunidade', 'Sempre fazendo perguntas difíceis'],
        segredos: ['Lê arquivos técnicos que não deveria ter acesso', 'Entende mais sobre os problemas da estação do que parece', 'Decifrou códigos em transmissões'],
        motivacoes: ['Aprender tudo que puder', 'Ajudar com sua inteligência', 'Descobrir a verdade sobre tudo'],
        medos: ['Não ser levada a sério', 'Ficar sem livros para ler', 'Descobrir verdades assustadoras'],
        visualPrompt: '10-year-old mixed-race Brazilian girl student, 1.30m height, small glasses, always holding books, wearing neat children\'s clothes, post-apocalyptic library or study area background, soft reading light, realistic style, intellectual and precocious expression, thoughtful and questioning demeanor'
    }
];

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEPENDENTS_DATA;
}