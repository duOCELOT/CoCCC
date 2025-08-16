// Skills data for Call of Cthulhu
const allSkills = [
    // Combate
    "Armas de Fogo (Pistolas)", "Armas de Fogo (Rifles)", "Armas de Fogo (Submetralhadoras)",
    "Lutar (Briga)", "Lutar (Lâminas)", "Lutar (Cajados)", "Arremessar",
    // Movimento
    "Esquivar", "Escalar", "Natação", "Saltar",
    // Investigação
    "Encontrar", "Escutar", "Rastrear", "Biblioteca",
    // Social
    "Barganha", "Charme", "Intimidação", "Lábia", "Persuasão", "Psicologia",
    // Técnicas
    "Primeiros Socorros", "Medicina", "Mecânica", "Eletrônica", "Consertos Elétricos",
    "Operar Máquinas", "Dirigir", "Pilotar", "Navegação", "Sobrevivência",
    // Conhecimento
    "Antropologia", "Arqueologia", "Arte/Ofício", "Avaliar", "Contabilidade",
    "Ciência (Biologia)", "Ciência (Química)", "Ciência (Física)", "Ciência (Farmácia)",
    "Ciência (Geologia)", "Ciência (Matemática)", "Ciência (Astronomia)",
    "Direito", "Educação", "História", "História Natural", "Idioma (Nativo)",
    "Idioma (Outro)", "Ocultismo",
    // Furtividade
    "Furtividade", "Prestidigitação", "Disfarce", "Chaveiro",
    // Especiais 2053
    "Conhecimento Radioativo", "Tecnologia Antiga", "Mutações", "Armadilhas"
];

// Base skill values for Call of Cthulhu
const baseSkillValues = {
    "Armas de Fogo (Pistolas)": 20,
    "Armas de Fogo (Rifles)": 25,
    "Armas de Fogo (Submetralhadoras)": 15,
    "Lutar (Briga)": 25,
    "Lutar (Lâminas)": 15,
    "Lutar (Cajados)": 15,
    "Arremessar": 20,
    "Esquivar": 0, // Will be DEX/2
    "Escalar": 20,
    "Natação": 20,
    "Saltar": 20,
    "Encontrar": 25,
    "Escutar": 20,
    "Rastrear": 10,
    "Biblioteca": 20,
    "Barganha": 5,
    "Charme": 15,
    "Intimidação": 15,
    "Lábia": 5,
    "Persuasão": 10,
    "Psicologia": 10,
    "Primeiros Socorros": 30,
    "Medicina": 1,
    "Mecânica": 10,
    "Eletrônica": 1,
    "Consertos Elétricos": 10,
    "Operar Máquinas": 1,
    "Dirigir": 20,
    "Pilotar": 1,
    "Navegação": 10,
    "Sobrevivência": 10,
    "Antropologia": 1,
    "Arqueologia": 1,
    "Arte/Ofício": 5,
    "Avaliar": 5,
    "Contabilidade": 5,
    "Ciência (Biologia)": 1,
    "Ciência (Química)": 1,
    "Ciência (Física)": 1,
    "Ciência (Farmácia)": 1,
    "Ciência (Geologia)": 1,
    "Ciência (Matemática)": 10,
    "Ciência (Astronomia)": 1,
    "Direito": 5,
    "Educação": 5,
    "História": 5,
    "História Natural": 10,
    "Idioma (Nativo)": 0, // Will be EDU
    "Idioma (Outro)": 1,
    "Idioma (Latim)": 1,
    "Ocultismo": 5,
    "Furtividade": 20,
    "Prestidigitação": 10,
    "Disfarce": 5,
    "Chaveiro": 1,
    "Conhecimento Radioativo": 0,
    "Tecnologia Antiga": 0,
    "Mutações": 0,
    "Armadilhas": 5,
    "Diagnóstico": 5,
    "Farmácia": 1,
    "Física": 1,
    "Química": 1,
    "Biologia": 1
};