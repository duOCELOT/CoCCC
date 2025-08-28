// =============================================================================
// SECURITY TEAM DATA - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const SECURITY_DATA = [
    {
        id: 'roberto_silva',
        nome: 'Capitão Roberto Silva',
        profissao: 'Capitão Militar / Chefe de Segurança',
        categoria: 'seguranca',
        idade: 54,
        altura: '1,85m',
        atributos: {
            FOR: 85, DES: 70, INT: 70, CON: 80,
            APA: 65, POD: 85, TAM: 75, EDU: 65
        },
        status: {
            pontosVida: 77,
            sanidade: 85,
            sorte: 60
        },
        pericias: [
            'Armas de Fogo 90%',
            'Liderança 85%',
            'Táticas Militares 90%',
            'Sobrevivência 80%',
            'Primeiros Socorros 70%'
        ],
        equipamentos: ['Rifle de assalto', 'Colete tático', 'Binóculos', 'Rádio'],
        personalidade: 'Disciplinado, protetor, autoritário',
        statusAtual: 'Saudável, cicatrizes no pescoço, postura militar',
        descricaoFisica: 'Homem brasileiro alto e imponente, ombros largos que demonstram décadas de treinamento militar. Cicatrizes visíveis no pescoço contam histórias que ele raramente compartilha. Cabelos grisalhos mantidos em corte militar rigoroso, postura sempre ereta e alerta.',
        biografia: 'Roberto serviu 25 anos no Exército Brasileiro, participando de missões de paz internacionais e operações de segurança interna. Suas cicatrizes vieram de uma emboscada durante uma missão na fronteira. Aposentou-se como Capitão e foi recrutado para a estação devido à sua experiência em proteção de instalações críticas. O apocalipse reativou seus instintos militares, mas também revelou um lado paternal protetor.',
        relacionamentos: ['Segundo em comando', 'Protetor de Ana Silva', 'Respeita Dra. Mariana', 'Conflita às vezes com Marcos'],
        segredos: ['Conhece a verdadeira natureza militar da estação', 'Mantém contato com outros militares', 'Esconde PTSD de combate'],
        motivacoes: ['Proteger todos os sobreviventes', 'Manter ordem e disciplina', 'Treinar próxima geração'],
        medos: ['Falhar em proteger alguém', 'Perder controle da situação', 'Volta dos conflitos armados'],
        visualPrompt: '54-year-old mixed-race Brazilian male military captain, 1.85m height, broad shoulders, military posture, scars on neck, graying hair in military cut, wearing tactical or military-style clothes, post-apocalyptic security outpost background, dramatic lighting, realistic style, disciplined and protective expression, holding military equipment'
    },
    {
        id: 'ana_silva',
        nome: 'Ana Silva',
        profissao: 'Guarda Jovem',
        categoria: 'seguranca',
        idade: 16,
        altura: '1,68m',
        atributos: {
            FOR: 65, DES: 85, INT: 70, CON: 70,
            APA: 75, POD: 80, TAM: 60, EDU: 55
        },
        status: {
            pontosVida: 65,
            sanidade: 80,
            sorte: 80
        },
        pericias: [
            'Armas de Fogo 75%',
            'Observação 85%',
            'Escalar 80%',
            'Furtividade 75%',
            'Artes Marciais 65%'
        ],
        equipamentos: ['Rifle', 'Equipamento tático leve', 'Binóculos'],
        personalidade: 'Madura além da idade, confiante, determinada',
        statusAtual: 'Saudável, cabelos longos pretos, olhos atentos',
        descricaoFisica: 'Adolescente brasileira de constituição magra mas forte, desenvolvida através de treinamento rigoroso. Cabelos longos e pretos geralmente presos durante o serviço, olhos atentos que nunca param de observar o ambiente. Postura confiante que impressiona visitantes pela maturidade.',
        biografia: 'Ana perdeu os pais no caos inicial do apocalipse e foi encontrada por Miguel, que a adotou como sobrinha. Determinada a nunca mais ser vítima, ela procurou treinamento militar com Roberto. Sua juventude e determinação a tornaram uma guardiã natural, mas também trouxeram preocupações sobre sua exposição à violência. Ana luta para equilibrar sua adolescência perdida com as responsabilidades adultas.',
        relacionamentos: ['Sobrinha adotiva de Miguel', 'Protegida pelo Capitão Roberto', 'Às vezes conflita com Marcos sobre métodos'],
        segredos: ['Ainda tem pesadelos sobre a perda dos pais', 'Sente pressão para provar seu valor', 'Esconde momentos de vulnerabilidade adolescente'],
        motivacoes: ['Proteger a comunidade', 'Provar que é competente', 'Honrar a memória dos pais'],
        medos: ['Perder Miguel', 'Falhar em proteger alguém', 'Ser vista como criança'],
        condicoes: ['Pesadelos - recuperação de Sanidade mais lenta'],
        visualPrompt: '16-year-old mixed-race Brazilian female young guard, 1.68m height, slim but strong build, long black hair, attentive eyes, confident posture, wearing practical tactical clothes, holding rifle or weapon, post-apocalyptic watchtower background, natural lighting, realistic style, mature beyond her years expression, determined look'
    },
    {
        id: 'marcos_lobo_pereira',
        nome: 'Marcos "Lobo" Pereira',
        profissao: 'Guarda de Patrulha',
        categoria: 'seguranca',
        idade: 43,
        altura: '1,75m',
        atributos: {
            FOR: 75, DES: 70, INT: 60, CON: 70,
            APA: 40, POD: 60, TAM: 65, EDU: 45
        },
        status: {
            pontosVida: 67,
            sanidade: 60,
            sorte: 40
        },
        pericias: [
            'Armas de Fogo 85%',
            'Combate Corporal 80%',
            'Rastreamento 75%',
            'Sobrevivência 85%',
            'Intimidação 80%'
        ],
        equipamentos: ['Shotgun', 'Faca de combate', 'Equipamento tático gasto'],
        personalidade: 'Traumatizado, competente, instável',
        statusAtual: 'PTSD leve, corpo coberto de cicatrizes, barba espessa',
        descricaoFisica: 'Homem brasileiro de constituição média, corpo marcado por inúmeras cicatrizes de combate que contam uma história de sobrevivência violenta. Barba espessa mal cuidada, olhar penetrante que raramente se acalma. Aparência gasta que reflete anos de luta pela sobrevivência.',
        biografia: 'Marcos era soldado das forças especiais quando o apocalipse começou. Passou meses sozinho na selva urbana antes de encontrar a estação. Suas experiências o traumatizaram profundamente, mas também o tornaram um sobrevivente incomparável. Seu apelido "Lobo" veio de sua tendência a trabalhar sozinho e métodos às vezes brutais mas eficazes.',
        relacionamentos: ['Veterano de guerra traumatizado', 'Competente mas preocupa os outros', 'Conflita com Ana sobre métodos'],
        segredos: ['Flashbacks violentos regulares', 'Cometeu atos que o assombram', 'Considera partir da estação'],
        motivacoes: ['Sobreviver mais um dia', 'Proteger os "inocentes"', 'Encontrar redenção'],
        medos: ['Perder controle completamente', 'Machucar alguém inocente', 'Morrer sozinho'],
        condicoes: ['PTSD - testes de Sanidade em combate', 'Flashbacks ocasionais'],
        visualPrompt: '43-year-old white Brazilian male patrol guard, 1.75m height, body covered in scars, thick beard, penetrating stare, wearing worn tactical gear, post-apocalyptic patrol setting, moody lighting, realistic style, traumatized veteran expression, competent but unstable demeanor, battle-worn appearance'
    },
    {
        id: 'teresa_goncalves',
        nome: 'Teresa Gonçalves',
        profissao: 'Especialista em Armamentos',
        categoria: 'seguranca',
        idade: 37,
        altura: '1,72m',
        atributos: {
            FOR: 80, DES: 75, INT: 65, CON: 75,
            APA: 55, POD: 75, TAM: 65, EDU: 60
        },
        status: {
            pontosVida: 70,
            sanidade: 75,
            sorte: 65
        },
        pericias: [
            'Armas de Fogo 95%',
            'Armamento/Explosivos 90%',
            'Táticas de Combate 85%',
            'Manutenção de Armas 90%',
            'Liderança 70%'
        ],
        equipamentos: ['Arsenal diverso', 'Kit de manutenção', 'Explosivos'],
        personalidade: 'Séria, focada, disciplinada',
        statusAtual: 'Saudável, cabeça raspada, cicatriz na bochecha direita',
        descricaoFisica: 'Mulher negra brasileira de porte atlético, músculos bem definidos resultado de anos de treinamento físico. Cabeça raspada por praticidade, cicatriz na bochecha direita que ela ganhou durante treinamento militar. Expressão sempre séria e focada, irradiando competência profissional.',
        biografia: 'Teresa serviu como sargento especialista em armamentos no Exército, responsável por treinamento e manutenção de arsenal. Sua expertise com explosivos e armas pesadas a tornou invaluável para a defesa da estação. Após o apocalipse, ela assumiu a responsabilidade de manter todas as armas funcionando e treinar os guardas em combate.',
        relacionamentos: ['Especialista respeitada', 'Trabalha bem com Roberto', 'Treina os outros em combate'],
        segredos: ['Arsenal está ficando baixo', 'Preocupa-se com falta de munição', 'Fabrica explosivos improvisados'],
        motivacoes: ['Manter defesas funcionando', 'Treinar combatentes competentes', 'Proteger através da força'],
        medos: ['Ficar sem munição', 'Ataque que não pode repelir', 'Falha nos equipamentos'],
        visualPrompt: '37-year-old Black Brazilian female weapons specialist, 1.72m height, defined muscles, shaved head, scar on right cheek, wearing military tactical gear, holding firearms, post-apocalyptic armory background, dramatic lighting, realistic style, serious and focused expression, disciplined military bearing'
    }
];

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SECURITY_DATA;
}