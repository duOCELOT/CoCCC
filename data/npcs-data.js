// =============================================================================
// NPCs Data - Estação Agulhas Negras
// Call of Cthulhu 2053 - Post-Apocalyptic Campaign
// =============================================================================

const NPCS_DATA = {
    // =========================================================================
    // CIENTÍFICOS (5)
    // =========================================================================
    scientistas: [
        {
            id: 'mariana_costa',
            nome: 'Dra. Mariana Costa',
            profissao: 'Líder da Estação / Cientista Chefe',
            categoria: 'cientificos',
            idade: 42,
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
            detalhes: 'Cicatriz visível no braço esquerdo, óculos com armação metálica, cabelos castanhos escuros presos em rabo de cavalo prático.',
            relacionamentos: ['Líder respeitada por todos', 'Confia especialmente no Dr. Paulo', 'Preocupa-se com Ana Silva como uma filha'],
            historia: '1.65m de altura, pele morena, expressão determinada mas carinhosa. Lidera a estação com mão firme mas justa.'
        },
        {
            id: 'paulo_santos',
            nome: 'Dr. Paulo Santos',
            profissao: 'Médico Chefe',
            categoria: 'cientificos',
            idade: 38,
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
            detalhes: '1.78m de altura, negro brasileiro, barba grisalha prematura, mãos limpas, postura ereta.',
            relacionamentos: ['Braço direito da Dra. Mariana', 'Mentor do jovem Pedro', 'Respeitado por toda comunidade'],
            historia: 'Atlético apesar da idade, demeanor calmo e profissional. Sempre com jaleco médico ou roupas práticas.'
        },
        {
            id: 'elena_vasquez',
            nome: 'Elena Vasquez',
            profissao: 'Engenheira Elétrica',
            categoria: 'cientificos',
            idade: 29,
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
            detalhes: '1.55m de altura, latina pequena, cabelos curtos e cacheados, tatuagem de circuito visível no pulso.',
            relacionamentos: ['Às vezes conflita com Rosa sobre métodos', 'Admirada por sua competência', 'Próxima de Ricardo por trabalharem com eletrônicos'],
            historia: 'Sempre segurando ferramentas ou equipamentos eletrônicos, expressão perfeccionista focada, energia ligeiramente nervosa.'
        },
        {
            id: 'joao_mendes',
            nome: 'Prof. João Mendes',
            profissao: 'Biólogo / Professor',
            categoria: 'cientificos',
            idade: 67,
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
            detalhes: '1.70m, brasileiro branco idoso, cabelos brancos desalinhados, barba desleixada, roupas sujas de terra.',
            relacionamentos: ['Avô de Pedro', 'Às vezes discorda da Dra. Camila sobre teorias', 'Respeitado professor da comunidade'],
            historia: 'Expressão distraída mas brilhante, sempre segurando espécimes ou cadernos de campo, mãos calejadas.'
        },
        {
            id: 'camila_rocha',
            nome: 'Dra. Camila Rocha',
            profissao: 'Botânica',
            categoria: 'cientificos',
            idade: 30,
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
            detalhes: '1.68m, brasileira mestiça, cabelos longos sempre presos, sorriso fácil, expressão otimista.',
            relacionamentos: ['Trabalha próxima com Prof. João', 'Figura maternal para as crianças', 'Colabora com Beatriz na agricultura'],
            historia: 'Mãos com terra sob as unhas, presença maternal e acolhedora, sempre segurando mudas ou espécimes botânicos.'
        }
    ],

    // =========================================================================
    // SUPORTE (8)
    // =========================================================================
    suporte: [
        {
            id: 'miguel_santos',
            nome: 'Miguel Santos',
            profissao: 'Cozinheiro Chefe',
            categoria: 'suporte',
            idade: 41,
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
            detalhes: '1.75m, negro brasileiro, corpulento com barriga proeminente, sorriso largo, cicatriz na testa.',
            relacionamentos: ['Tio adotivo de Ana Silva', 'Centro social da comunidade', 'Amigo próximo de Dona Carmen'],
            historia: 'Sempre de avental ou roupas de cozinha, segurando utensílios, expressão de contador de histórias, demeanor acolhedor e jovial.'
        },
        {
            id: 'rosa_martinez',
            nome: 'Rosa Martinez',
            profissao: 'Técnica em Eletrônicos',
            categoria: 'suporte',
            idade: 55,
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
            detalhes: '1.62m, brasileira mestiça, cabelos grisalhos em coque organizado, óculos de armação grossa, mãos ágeis.',
            relacionamentos: ['Às vezes conflita com Elena sobre abordagens técnicas', 'Mentora de Sofia', 'Respeitada por sua experiência'],
            historia: 'Trabalhando em eletrônicos, expressão meticulosa e paciente, rodeada por componentes eletrônicos.'
        },
        {
            id: 'carlos_indio_silva',
            nome: 'Carlos "Índio" Silva',
            profissao: 'Mecânico',
            categoria: 'suporte',
            idade: 52,
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
            detalhes: '1.73m, indígena brasileiro, pele curtida pelo tempo, cabelos longos pretos, tatuagens tribais nos braços.',
            relacionamentos: ['Respeitado por sua sabedoria', 'Mentor silencioso', 'Trabalha bem com Luiz'],
            historia: 'Expressão silenciosa e observadora, segurando ferramentas mecânicas, demeanor sábio e estoico.'
        },
        {
            id: 'amanda_ferreira',
            nome: 'Amanda Ferreira',
            profissao: 'Técnica Veterinária',
            categoria: 'suporte',
            idade: 26,
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
            detalhes: '1.60m, brasileira branca, cabelos loiros bagunçados, sardinhas, expressão tímida.',
            relacionamentos: ['Tia de Lucas', 'Próxima das crianças', 'Trabalha com os animais da estação'],
            historia: 'Segurando pequenos animais ou equipamentos veterinários, demeanor gentil e cuidadoso, rodeada por animais.'
        },
        {
            id: 'luiz_teixeira',
            nome: 'Luiz Teixeira',
            profissao: 'Construtor',
            categoria: 'suporte',
            idade: 45,
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
            detalhes: '1.80m, brasileiro branco, musculoso, calvície avançada, barba espessa, mãos enormes.',
            relacionamentos: ['Trabalha bem com Carlos', 'Respeitado pela força de trabalho', 'Sem paciência para discussões'],
            historia: 'Roupas de trabalho de construção, segurando ferramentas, expressão pragmática e trabalhadora, demeanor sem rodeios.'
        },
        {
            id: 'sofia_oliveira',
            nome: 'Sofia Oliveira',
            profissao: 'Técnica de Laboratório',
            categoria: 'suporte',
            idade: 31,
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
            detalhes: '1.65m, negra brasileira, cabelos em dreadlocks, piercing no nariz, braços definidos.',
            relacionamentos: ['Aprendiz de Rosa', 'Trabalha com os cientistas', 'Questionadora das autoridades'],
            historia: 'Jaleco sobre roupas casuais, expressão curiosa e questionadora, segurando instrumentos científicos.'
        },
        {
            id: 'ricardo_costa',
            nome: 'Ricardo Costa',
            profissao: 'Operador de Rádio',
            categoria: 'suporte',
            idade: 39,
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
            detalhes: '1.77m, brasileiro mestiço, magro, óculos redondos, barba rala, dedos ágeis.',
            relacionamentos: ['Primo de Isadora', 'Fonte de informações externas', 'Às vezes estressado por notícias ruins'],
            historia: 'Usando fones de ouvido, rodeado por equipamentos de rádio, expressão nervosa e falante, múltiplos dispositivos de rádio visíveis.'
        },
        {
            id: 'beatriz_almeida',
            nome: 'Beatriz Almeida',
            profissao: 'Técnica Agrícola',
            categoria: 'suporte',
            idade: 28,
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
            detalhes: '1.58m, brasileira branca, cabelos castanhos curtos, corpo atlético, sempre bronzeada.',
            relacionamentos: ['Trabalha com Dra. Camila', 'Responsável pela produção de alimentos', 'Respeitada por sua eficiência'],
            historia: 'Roupas práticas de fazenda, segurando ferramentas agrícolas ou plantas, expressão prática e eficiente, demeanor sem rodeios.'
        }
    ],

    // =========================================================================
    // SEGURANÇA (4)
    // =========================================================================
    seguranca: [
        {
            id: 'roberto_silva',
            nome: 'Capitão Roberto Silva',
            profissao: 'Capitão Militar / Chefe de Segurança',
            categoria: 'seguranca',
            idade: 54,
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
            detalhes: '1.85m, brasileiro mestiço, ombros largos, postura militar, cicatrizes no pescoço, cabelos grisalhos em corte militar.',
            relacionamentos: ['Segundo em comando', 'Protetor de Ana Silva', 'Respeita Dra. Mariana', 'Conflita às vezes com Marcos'],
            historia: 'Roupas táticas ou estilo militar, expressão disciplinada e protetora, segurando equipamentos militares.'
        },
        {
            id: 'ana_silva',
            nome: 'Ana Silva',
            profissao: 'Guarda Jovem',
            categoria: 'seguranca',
            idade: 16,
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
            detalhes: '1.68m, brasileira mestiça, magra mas forte, cabelos longos pretos, olhos atentos.',
            relacionamentos: ['Sobrinha adotiva de Miguel', 'Protegida pelo Capitão Roberto', 'Às vezes conflita com Marcos sobre métodos'],
            historia: 'Postura confiante, roupas táticas práticas, segurando rifle ou arma, aparência madura além dos anos, olhar determinado.'
        },
        {
            id: 'marcos_lobo_pereira',
            nome: 'Marcos "Lobo" Pereira',
            profissao: 'Guarda de Patrulha',
            categoria: 'seguranca',
            idade: 43,
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
            detalhes: '1.75m, brasileiro branco, corpo coberto de cicatrizes, barba espessa, olhar penetrante.',
            relacionamentos: ['Veterano de guerra traumatizado', 'Competente mas preocupa os outros', 'Conflita com Ana sobre métodos'],
            historia: 'Equipamentos táticos gastos, expressão de veterano traumatizado, demeanor competente mas instável, aparência marcada pela batalha.',
            condicoes: ['PTSD - testes de Sanidade em combate', 'Flashbacks ocasionais']
        },
        {
            id: 'teresa_goncalves',
            nome: 'Teresa Gonçalves',
            profissao: 'Especialista em Armamentos',
            categoria: 'seguranca',
            idade: 37,
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
            detalhes: '1.72m, negra brasileira, músculos definidos, cabeça raspada, cicatriz na bochecha direita.',
            relacionamentos: ['Especialista respeitada', 'Trabalha bem com Roberto', 'Treina os outros em combate'],
            historia: 'Equipamentos táticos militares, segurando armas de fogo, expressão séria e focada, porte militar disciplinado.'
        }
    ],

    // =========================================================================
    // DEPENDENTES (6)
    // =========================================================================
    dependentes: [
        {
            id: 'seu_antonio',
            nome: 'Seu Antônio',
            profissao: 'Contador de Histórias',
            categoria: 'dependentes',
            idade: 78,
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
            detalhes: '1.65m, negro brasileiro idoso, magro, cabelos brancos cacheados, sorriso desdentado.',
            relacionamentos: ['Avô adotivo de toda comunidade', 'Fonte de sabedoria e histórias', 'Amado por todos'],
            historia: 'Bengala de madeira, óculos, expressão sábia e alegre, demeanor de avô amoroso, rodeado por pessoas ouvindo.',
            condicoes: ['Artrite - penalidades em DES quando está frio', 'Audição limitada']
        },
        {
            id: 'dona_carmen',
            nome: 'Dona Carmen',
            profissao: 'Cozinheira',
            categoria: 'dependentes',
            idade: 71,
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
            detalhes: '1.55m, brasileira branca idosa, corpulenta, cabelos brancos em coque, sempre de avental.',
            relacionamentos: ['Vovó de toda comunidade', 'Trabalha com Miguel', 'Cuida especialmente das crianças'],
            historia: 'Sempre de avental, utensílios de cozinha, expressão maternal e cuidadosa, demeanor de vovó amorosa.'
        },
        {
            id: 'pedro_mendes',
            nome: 'Pedro Mendes',
            profissao: 'Estudante',
            categoria: 'dependentes',
            idade: 12,
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
            detalhes: '1.45m, brasileiro branco menino, magro, cabelos castanhos bagunçados, sempre com joelhos ralados.',
            relacionamentos: ['Neto do Prof. João', 'Protegido pelo Dr. Paulo', 'Líder natural entre as crianças'],
            historia: 'Roupas infantis casuais, segurando livros ou ferramentas científicas, expressão curiosa e energética, demeanor inquisitivo.',
            condicoes: ['Alergia a pólen - testes de CON na primavera']
        },
        {
            id: 'maria_silva',
            nome: 'Maria Silva',
            profissao: 'Estudante',
            categoria: 'dependentes',
            idade: 8,
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
            detalhes: '1.20m, negra brasileira menina, cabelos cacheados em chiquinhas, sorriso tímido.',
            relacionamentos: ['Irmã adotiva no grupo', 'Protegida por todos', 'Especialmente próxima da Dra. Camila'],
            historia: 'Roupas infantis simples, segurando materiais de desenho ou obras de arte, expressão tímida e observadora, demeanor artístico e pensativo.'
        },
        {
            id: 'lucas_ferreira',
            nome: 'Lucas Ferreira',
            profissao: 'Ajudante de Animais',
            categoria: 'dependentes',
            idade: 14,
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
            detalhes: '1.55m, brasileiro branco adolescente, sardento como a tia, sempre sujo, cabelos loiros rebeldes.',
            relacionamentos: ['Sobrinho de Amanda', 'Sempre metido em confusão', 'Curioso sobre tudo'],
            historia: 'Roupas práticas ao ar livre, rodeado por animais, expressão aventureira e imprudente, curioso sobre tudo.'
        },
        {
            id: 'isadora_costa',
            nome: 'Isadora Costa',
            profissao: 'Estudante',
            categoria: 'dependentes',
            idade: 10,
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
            detalhes: '1.30m, brasileira mestiça menina, cabelos cacheados castanhos, óculos pequenos.',
            relacionamentos: ['Prima de Ricardo', 'Pequena gênia da comunidade', 'Sempre fazendo perguntas difíceis'],
            historia: 'Roupas infantis organizadas, sempre segurando livros, expressão intelectual e precoce, demeanor pensativo e questionador.'
        }
    ]
};

// =============================================================================
// DADOS ADICIONAIS
// =============================================================================

const RELACIONAMENTOS = {
    familias: {
        'Santos': ['miguel_santos', 'ana_silva'],
        'Mendes': ['joao_mendes', 'pedro_mendes'],
        'Ferreira': ['amanda_ferreira', 'lucas_ferreira'],
        'Costa': ['ricardo_costa', 'isadora_costa']
    },
    tensoes: [
        {
            personagens: ['marcos_lobo_pereira', 'ana_silva'],
            motivo: 'Métodos de patrulha diferentes'
        },
        {
            personagens: ['elena_vasquez', 'rosa_martinez'],
            motivo: 'Abordagens técnicas diferentes'
        },
        {
            personagens: ['joao_mendes', 'camila_rocha'],
            motivo: 'Teorias botânicas divergentes'
        }
    ],
    hierarquia: [
        'mariana_costa',
        'roberto_silva',
        'paulo_santos'
    ]
};

const GANCHOS_AVENTURA = [
    'Desaparecimentos misteriosos na floresta',
    'Sinais de rádio estranhos captados por Ricardo',
    'Mutações nas plantas estudadas por João/Camila',
    'Suprimentos médicos escassos - Dr. Paulo preocupado',
    'Tensão entre gerações - jovens vs. veteranos',
    'Segredos do bunker que nem todos conhecem'
];

const CONDICOES_ESPECIAIS = [
    {
        personagem: 'marcos_lobo_pereira',
        condicao: 'PTSD',
        efeito: 'Testes de Sanidade em combate'
    },
    {
        personagem: 'seu_antonio',
        condicao: 'Artrite',
        efeito: 'Penalidades em DEX quando está frio'
    },
    {
        personagem: 'pedro_mendes',
        condicao: 'Alergia a pólen',
        efeito: 'Testes de CON na primavera'
    },
    {
        personagem: 'ricardo_costa',
        condicao: 'Ansiedade',
        efeito: 'Penalidades sociais com estranhos'
    },
    {
        personagem: 'ana_silva',
        condicao: 'Pesadelos',
        efeito: 'Recuperação de Sanidade mais lenta'
    }
];