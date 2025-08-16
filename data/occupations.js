// Occupations data for Call of Cthulhu 2053
const occupations = {
    scavenger: {
        name: "Sucateiro",
        description: "Mestre em encontrar valor onde outros veem apenas lixo radioativo. Conhece cada escombro e sabe avaliar o que ainda funciona.",
        skills: ["Avaliar", "Encontrar", "Mecânica", "Navegação", "Sobrevivência", "Furtividade", "Escalar", "Barganha"],
        appearance: "rugged, weathered, practical clothing, utility belt, protective gear"
    },
    mechanic: {
        name: "Mecânico",
        description: "Faz milagres com sucata e fita adesiva. Sem ele, nenhum veículo ou gerador continuaria funcionando.",
        skills: ["Mecânica", "Eletrônica", "Operar Máquinas", "Física", "Avaliar", "Encontrar", "Dirigir", "Consertos Elétricos"],
        appearance: "oil-stained overalls, tool belt, work gloves, practical boots"
    },
    medic: {
        name: "Médico de Campo",
        description: "Aprendeu medicina nos livros que sobraram e na prática brutal. Salva vidas com álcool batizado e suturas improvisadas.",
        skills: ["Medicina", "Primeiros Socorros", "Biologia", "Química", "Psicologia", "Farmácia", "Diagnóstico", "Persuasão"],
        appearance: "medical bag, surgical mask, clean hands, worn scrubs or coat"
    },
    trader: {
        name: "Comerciante",
        description: "Conecta assentamentos isolados, trazendo esperança e recursos. Sua lábia é tão valiosa quanto suas mercadorias.",
        skills: ["Barganha", "Persuasão", "Avaliar", "Contabilidade", "Psicologia", "Lábia", "Idioma", "Navegação"],
        appearance: "well-maintained clothes, messenger bag, trading goods, friendly demeanor"
    },
    guard: {
        name: "Guarda",
        description: "A linha entre a civilização e o caos. Protege os fracos dos saqueadores, mutantes e coisas piores.",
        skills: ["Armas de Fogo (Rifles)", "Lutar (Briga)", "Esquivar", "Escutar", "Encontrar", "Intimidação", "Primeiros Socorros", "Sobrevivência"],
        appearance: "tactical vest, weapons, alert posture, protective equipment"
    },
    scout: {
        name: "Explorador",
        description: "Vai onde outros temem pisar. Mapeia zonas mortas, encontra recursos e volta para contar a história.",
        skills: ["Navegação", "Sobrevivência", "Rastrear", "Furtividade", "Escalar", "Encontrar", "Escutar", "Armas de Fogo (Pistolas)"],
        appearance: "camouflage gear, binoculars, backpack, outdoor equipment"
    },
    cultist: {
        name: "Cultista",
        description: "Toca nos segredos que a radiação despertou. Conhece rituais e verdades que outros prefeririam esquecer.",
        skills: ["Ocultismo", "Persuasão", "Psicologia", "História", "Idioma (Latim)", "Biblioteca", "Antropologia", "Intimidação"],
        appearance: "robes, occult symbols, mysterious artifacts, piercing gaze"
    },
    mutant_hunter: {
        name: "Caçador de Mutantes",
        description: "Especialista em eliminar as aberrações criadas pela radiação. Conhece cada fraqueza das criaturas deformadas.",
        skills: ["Armas de Fogo (Rifles)", "Rastrear", "Sobrevivência", "Biologia", "Furtividade", "Armadilhas", "Navegação", "Medicina"],
        appearance: "hunting gear, specialized weapons, trophies, battle scars"
    },
    scholar: {
        name: "Acadêmico",
        description: "Preserva o conhecimento do mundo antigo. Em suas mãos estão os segredos da civilização perdida.",
        skills: ["Biblioteca", "História", "Arqueologia", "Idioma (escolha)", "Ciência (escolha)", "Antropologia", "Psicologia", "Educação"],
        appearance: "glasses, worn books, scholarly attire, thoughtful expression"
    }
};