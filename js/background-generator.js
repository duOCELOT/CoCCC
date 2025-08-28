// Background Story Generator for Call of Cthulhu 2053
// Timeline: War 2026-2030, Underground 2030-2053, Surface return 2053

function generateRandomBackgroundStory() {
    const data = window.RolaiCharacterCreator?.enhancedCharacterData || window.enhancedCharacterData || {};
    const occupation = data.occupation || 'survivor';
    const age = parseInt(data.age) || 35;
    
    // Calculate ages during different periods
    const warStartAge = age - 27; // 2053 - 2026 = 27 years ago
    const bornUnderground = warStartAge < 0;
    const wasChildDuringWar = warStartAge >= 0 && warStartAge < 18;
    
    // Pre-war origins (only for those who lived before 2026)
    const preWarOrigins = {
        'scavenger': [
            "Trabalhava como técnico em eletrônicos no centro de São Paulo",
            "Era estudante de engenharia na UNESP em 2025",
            "Ajudava o pai na oficina mecânica da família"
        ],
        'medic': [
            "Estudava medicina na USP quando a guerra eclodiu em 2026",
            "Era enfermeiro no Hospital das Clínicas",
            "Fazia residência em emergência médica"
        ],
        'guard': [
            "Servia na Polícia Militar de São Paulo",
            "Era segurança em uma empresa multinacional",
            "Acabara de se formar na academia militar"
        ],
        'scholar': [
            "Ensinava história em uma escola pública de Campinas",
            "Trabalhava na biblioteca da UNICAMP",
            "Fazia mestrado em arqueologia brasileira"
        ],
        'trader': [
            "Tinha uma loja de ferragens em Resende",
            "Trabalhava como vendedor viajante pelo interior",
            "Gerenciava o mercado municipal de Itatiaia"
        ],
        'cultist': [
            "Estudava filosofia e religiões comparadas",
            "Participava de grupos esotéricos no Rio de Janeiro",
            "Era professor de história das religiões"
        ]
    };
    
    // War experiences (2026-2030)
    const warExperiences = [
        "Viu as primeiras bombas caírem sobre São Paulo em 2026",
        "Participou dos esforços de evacuação durante os primeiros meses",
        "Perdeu familiares nos bombardeios de 2027",
        "Fugiu para os bunkers da serra quando tudo desmoronou",
        "Ajudou a construir os abrigos subterrâneos de emergência",
        "Viu a civilização colapsar em apenas quatro anos"
    ];
    
    // Underground survival (2030-2053 - 23 years)
    const undergroundExperiences = {
        'scavenger': [
            "Nos 23 anos subterrâneos, especializou-se em manter os geradores funcionando",
            "Durante duas décadas no subsolo, aprendeu a reciclar cada peça eletrônica",
            "Passou 23 anos organizando expedições aos níveis superiores dos bunkers"
        ],
        'medic': [
            "Nas duas décadas subterrâneas, tornou-se o único médico de três setores",
            "Durante 23 anos no underground, tratou desde partos até ferimentos de escavação",
            "Nos longos anos no subsolo, desenvolveu tratamentos com recursos limitadíssimos"
        ],
        'guard': [
            "Por 23 anos, manteve a ordem nos corredores apertados do bunker",
            "Durante duas décadas underground, treinou grupos de segurança civil",
            "Nos anos subterrâneos, organizou as patrulhas dos túneis principais"
        ],
        'scholar': [
            "Nas duas décadas subterrâneas, preservou livros em arquivos improvisados",
            "Durante 23 anos no subsolo, ensinou crianças que nunca viram o sol",
            "Nos longos anos underground, memorizou centenas de textos importantes"
        ],
        'trader': [
            "Por 23 anos, organizou o sistema de trocas entre os setores do bunker",
            "Durante as décadas subterrâneas, estabeleceu redes de distribuição de comida",
            "Nos anos no underground, negociou disputas de recursos entre famílias"
        ],
        'cultist': [
            "Nas duas décadas subterrâneas, encontrou textos estranhos nos arquivos perdidos",
            "Durante 23 anos no subsolo, teve visões sobre o que acontecia na superfície",
            "Nos anos underground, descobriu que alguns túneis levavam a lugares... diferentes"
        ]
    };
    
    // Surface return experiences (2053)
    const surfaceReturn = [
        "Quando finalmente emergiram em 2053, o mundo era irreconhecível",
        "A superfície em 2053 revelou uma natureza selvagem que reconquistou as cidades",
        "O retorno à luz do sol mostrou ruínas cobertas por décadas de vegetação",
        "Em 2053, descobriram que Itatiaia havia sobrevivido melhor que as metrópoles",
        "A superficie mostrou que a vida encontrou formas estranhas de se adaptar"
    ];
    
    // Current motivations
    const currentGoals = [
        "adaptar-se à vida na superfície após 23 anos no escuro",
        "reconstruir habilidades perdidas durante as décadas subterrâneas",
        "encontrar outros grupos de sobreviventes que emergiram recentemente",
        "investigar as mudanças que ocorreram na superfície abandonada",
        "estabelecer uma nova vida em Itatiaia, longe dos bunkers"
    ];
    
    // Underground challenges
    const undergroundChallenges = [
        "A vida nos bunkers ensinou a valorizar cada gota d'água e migalha de comida",
        "Vinte e três anos sem ver o céu deixaram marcas profundas na alma",
        "A claustrofobia dos túneis ainda assombra os pesadelos",
        "Aprendeu que a sobrevivência depende mais da cooperação que da força",
        "Os anos no escuro desenvolveram outros sentidos além da visão"
    ];
    
    // Surface fears/concerns
    const surfaceFears = [
        "Ainda se sente perdido sob o céu aberto após décadas de tetos baixos",
        "Teme que a radiação residual ainda seja perigosa",
        "Preocupa-se que outros bunkers tenham sobreviventes hostis",
        "Suspeita que coisas estranhas evoluíram na superfície abandonada",
        "Carrega a culpa dos que ficaram para trás nos níveis inferiores"
    ];
    
    let story = "";
    
    // Build story based on age group
    if (bornUnderground) {
        // Born underground (age < 27)
        story = `Nasceu nos bunkers subterrâneos durante os anos mais sombrios da humanidade. `;
        story += randomChoice(undergroundExperiences[occupation] || undergroundExperiences['scavenger']);
        story += ` Nunca conheceu o mundo antigo, apenas as histórias contadas pelos mais velhos. `;
        story += randomChoice(surfaceReturn);
        story += ` Agora, aos ${age} anos, ${randomChoice(currentGoals)} enquanto tenta compreender este mundo de superfície que é completamente novo.`;
        
    } else if (wasChildDuringWar) {
        // Was a child during the war (age 27-44 approximately)
        story = `Tinha apenas ${warStartAge} anos quando a guerra começou em 2026. `;
        story += randomChoice(warExperiences);
        story += ` ${randomChoice(undergroundExperiences[occupation] || undergroundExperiences['scavenger'])}. `;
        story += randomChoice(surfaceReturn);
        story += ` Hoje, aos ${age} anos, ${randomChoice(currentGoals)}.`;
        
    } else {
        // Was an adult during the war (age 45+)
        const occupationData = preWarOrigins[occupation] || preWarOrigins['scavenger'];
        story = randomChoice(occupationData) + `. `;
        story += `Quando a guerra explodiu em 2026, ${randomChoice(warExperiences)}. `;
        story += randomChoice(undergroundExperiences[occupation] || undergroundExperiences['scavenger']);
        story += ` ${randomChoice(surfaceReturn)}. `;
        story += `Aos ${age} anos, ${randomChoice(currentGoals)}.`;
    }
    
    // Add underground-specific challenges
    story += ` ${randomChoice(undergroundChallenges)}.`;
    
    // Add current fears/hopes
    story += ` Apesar da liberdade reconquistada, ${randomChoice(surfaceFears)}.`;
    
    return story.replace(/\s+/g, ' ').trim();
}

// Helper function
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and populate the background field
function generateAndSetBackground() {
    const story = generateRandomBackgroundStory();
    const backgroundField = document.getElementById('characterBackground');
    if (backgroundField) {
        backgroundField.value = story;
        // Trigger the update function if it exists
        if (typeof updateCharacterData === 'function') {
            updateCharacterData();
        }
    }
}

// Add button to generate random background
function addBackgroundGeneratorButton() {
    const backgroundField = document.getElementById('characterBackground');
    if (backgroundField && backgroundField.parentNode) {
        // Check if button already exists
        if (backgroundField.parentNode.querySelector('.background-generator-btn')) {
            return;
        }
        
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-secondary background-generator-btn';
        button.textContent = 'Gerar História Aleatória';
        button.style.cssText = `
            margin-top: 5px;
            background: #6c757d;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        `;
        button.onclick = generateAndSetBackground;
        
        backgroundField.parentNode.appendChild(button);
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addBackgroundGeneratorButton, 1000);
});

// Export functions for global access
window.generateRandomBackgroundStory = generateRandomBackgroundStory;
window.generateAndSetBackground = generateAndSetBackground;