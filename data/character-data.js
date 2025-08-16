// Enhanced Character Data Management
let enhancedCharacterData = {
    // Basic character info
    name: "",
    age: 0,
    occupation: "",
    customOccupation: {
        name: "",
        description: ""
    },
    background: "",
    generationMethod: "points",
    
    // Core attributes
    attributes: {
        str: 50, dex: 50, int: 50, con: 50,
        app: 50, pow: 50, siz: 50, edu: 50
    },
    
    // Skills
    occupationalSkills: {},
    personalSkills: {},
    
    // Enhanced physical characteristics
    physicalCharacteristics: {
        // Basic demographics
        gender: "person",
        ethnicity: "mixed",
        skinTone: "medium",
        eyeColor: "brown",
        hairColor: "dark_brown",
        hairStyle: "short",
        
        // Body characteristics
        bodyType: "average",
        height: "average",
        build: "proportional",
        
        // Post-apocalyptic modifications
        prosthetics: {
            enabled: false,
            limbs: [],
            type: "mechanical",
            quality: "functional"
        },
        
        augmentations: {
            enabled: false,
            types: [],
            visibility: "hidden"
        },
        
        // Battle damage and scars
        battleDamage: {
            scars: "few",
            missingParts: [],
            radiationEffects: "none"
        },
        
        // Clothing and gear style
        clothingStyle: "practical",
        accessoryLevel: "basic",
        
        // Expression and demeanor
        facialExpression: "determined",
        posture: "confident",
        
        // Age-related features
        ageAppearance: "matches_age",
        
        // Special characteristics
        distinguishingMarks: [],
        mutationEffects: "none"
    },
    
    // Generation history
    rollHistory: [],
    heroicRolls: [],
    
    // Generated image data
    image: null,
    imageMetadata: null
};

// Maintain compatibility with existing code
let characterData = enhancedCharacterData;

// Initialize character data
function initializeCharacterData() {
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
}

// Update character name and basic info
function updateCharacterBasicInfo() {
    const nameEl = document.getElementById('characterName');
    const ageEl = document.getElementById('characterAge');
    const backgroundEl = document.getElementById('characterBackground');
    
    if (nameEl) enhancedCharacterData.name = nameEl.value;
    if (ageEl) enhancedCharacterData.age = parseInt(ageEl.value) || 0;
    if (backgroundEl) enhancedCharacterData.background = backgroundEl.value;
    
    if (enhancedCharacterData.occupation === 'custom') {
        const customNameEl = document.getElementById('customOccupationName');
        const customDescEl = document.getElementById('customOccupationDesc');
        
        if (customNameEl) enhancedCharacterData.customOccupation.name = customNameEl.value;
        if (customDescEl) enhancedCharacterData.customOccupation.description = customDescEl.value;
    }
}

// Get occupation display name
function getOccupationDisplayName() {
    if (enhancedCharacterData.occupation === 'custom') {
        return enhancedCharacterData.customOccupation.name || "Ocupação Personalizada";
    }
    return occupations[enhancedCharacterData.occupation]?.name || "Sobrevivente";
}

// Calculate damage bonus
function calculateDamageBonus() {
    const strSiz = enhancedCharacterData.attributes.str + enhancedCharacterData.attributes.siz;
    if (strSiz <= 64) return "-2";
    if (strSiz <= 84) return "-1";
    if (strSiz <= 124) return "0";
    if (strSiz <= 164) return "+1d4";
    if (strSiz <= 204) return "+1d6";
    return "+2d6";
}

// Calculate movement rate
function calculateMovement() {
    let mov = 8;
    const attrs = enhancedCharacterData.attributes;
    if (attrs.dex < attrs.siz && attrs.str < attrs.siz) mov = 7;
    if (attrs.dex > attrs.siz && attrs.str > attrs.siz) mov = 9;
    return mov;
}

// Reset character data
function resetCharacterData() {
    enhancedCharacterData = {
        name: "",
        age: 0,
        occupation: "",
        customOccupation: {
            name: "",
            description: ""
        },
        background: "",
        generationMethod: "points",
        attributes: {
            str: 50, dex: 50, int: 50, con: 50,
            app: 50, pow: 50, siz: 50, edu: 50
        },
        occupationalSkills: {},
        personalSkills: {},
        physicalCharacteristics: {
            gender: "person",
            ethnicity: "mixed",
            skinTone: "medium",
            eyeColor: "brown",
            hairColor: "dark_brown",
            hairStyle: "short",
            bodyType: "average",
            height: "average",
            build: "proportional",
            prosthetics: {
                enabled: false,
                limbs: [],
                type: "mechanical",
                quality: "functional"
            },
            augmentations: {
                enabled: false,
                types: [],
                visibility: "hidden"
            },
            battleDamage: {
                scars: "few",
                missingParts: [],
                radiationEffects: "none"
            },
            clothingStyle: "practical",
            accessoryLevel: "basic",
            facialExpression: "determined",
            posture: "confident",
            ageAppearance: "matches_age",
            distinguishingMarks: [],
            mutationEffects: "none"
        },
        rollHistory: [],
        heroicRolls: [],
        image: null,
        imageMetadata: null
    };
    characterData = enhancedCharacterData;
}