// Enhanced Main Application Logic with Integrated Physical Characteristics System
// Fixed version - resolves variable conflicts and missing functions

// ========================================
// GLOBAL NAMESPACE AND DATA STRUCTURE
// ========================================

// Create global namespace to avoid conflicts
window.RolaiCharacterCreator = window.RolaiCharacterCreator || {};

// Enhanced character data that includes all physical characteristics
// Use window to avoid declaration conflicts
window.RolaiCharacterCreator.enhancedCharacterData = window.RolaiCharacterCreator.enhancedCharacterData || {
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

// Create aliases for compatibility
window.enhancedCharacterData = window.RolaiCharacterCreator.enhancedCharacterData;
window.characterData = window.RolaiCharacterCreator.enhancedCharacterData;

// ========================================
// CORE FUNCTIONS (FIXED)
// ========================================

// Make generateComprehensiveCharacterData globally available
function generateComprehensiveCharacterData() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const physical = data.physicalCharacteristics;
    
    return {
        basic: {
            name: data.name,
            age: data.age,
            occupation: data.occupation,
            background: data.background
        },
        physical: {
            appearance: `${physical.gender} person of ${physical.ethnicity} ethnicity with ${physical.skinTone} skin`,
            features: `${physical.eyeColor} eyes, ${physical.hairColor} ${physical.hairStyle} hair`,
            build: `${physical.height} height with ${physical.bodyType} build`,
            expression: `${physical.facialExpression} expression and ${physical.posture} posture`,
            clothing: `wearing ${physical.clothingStyle} clothing`,
            modifications: generateModificationsDescription(physical)
        },
        attributes: data.attributes,
        skills: data.skills || {}
    };
}

function generateModificationsDescription(physical) {
    let modifications = [];
    
    if (physical.prosthetics.enabled && physical.prosthetics.limbs.length > 0) {
        modifications.push(`${physical.prosthetics.quality} ${physical.prosthetics.type} prosthetic ${physical.prosthetics.limbs.join(', ')}`);
    }
    
    if (physical.augmentations.enabled && physical.augmentations.types.length > 0) {
        modifications.push(`${physical.augmentations.visibility} ${physical.augmentations.types.join(', ')}`);
    }
    
    if (physical.battleDamage.scars !== 'none') {
        modifications.push(`${physical.battleDamage.scars} scars`);
    }
    
    if (physical.battleDamage.radiationEffects !== 'none') {
        modifications.push(`${physical.battleDamage.radiationEffects} radiation effects`);
    }
    
    return modifications.join(', ');
}

// Make these functions globally available to fix reference errors
window.generateComprehensiveCharacterData = generateComprehensiveCharacterData;
window.RolaiCharacterCreator.generateComprehensiveCharacterData = generateComprehensiveCharacterData;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🧬 Enhanced Rolai Character Generator Loading...');
    
    try {
        // Initialize all systems
        initializeCharacterData();
        initializePhysicalCharacteristics();
        setupEventListeners();
        
        // Update all displays
        updateAllDisplays();
        
        console.log('✅ Enhanced Character Generator Ready!');
    } catch (error) {
        console.error('❌ Error during initialization:', error);
    }
});

function initializeCharacterData() {
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
}

function initializePhysicalCharacteristics() {
    // Set default values in UI
    updatePhysicalCharacteristicsUI();
    
    // Generate initial prompt preview
    updateEnhancedPromptPreview();
}

function setupEventListeners() {
    // Basic character info listeners
    const basicFields = ['characterName', 'characterAge', 'characterBackground'];
    basicFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('input', updateCharacterData);
            element.addEventListener('change', updateCharacterData);
        }
    });

    // Physical characteristics listeners
    const physicalFields = [
        'characterGender', 'characterEthnicity', 'characterSkinTone', 'characterEyeColor',
        'characterHairColor', 'characterHairStyle', 'facialExpression', 'characterPosture',
        'bodyType', 'characterHeight', 'clothingStyle'
    ];
    
    physicalFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('change', function() {
                const property = fieldId.replace('character', '').toLowerCase();
                updatePhysicalCharacteristic(property, this.value);
            });
        }
    });

    // Custom occupation listeners
    const customFields = ['customOccupationName', 'customOccupationDesc'];
    customFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('input', updateCharacterData);
        }
    });

    // ComfyUI settings listeners
    const comfyUIFields = ['imageStyle', 'imageQuality'];
    comfyUIFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('change', updateEnhancedPromptPreview);
        }
    });
}

// ========================================
// CHARACTER DATA MANAGEMENT
// ========================================

function updateCharacterData() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    
    // Update basic character info
    const nameEl = document.getElementById('characterName');
    const ageEl = document.getElementById('characterAge');
    const backgroundEl = document.getElementById('characterBackground');
    
    if (nameEl) data.name = nameEl.value;
    if (ageEl) data.age = parseInt(ageEl.value) || 0;
    if (backgroundEl) data.background = backgroundEl.value;
    
    // Update custom occupation if active
    if (data.occupation === 'custom') {
        const customNameEl = document.getElementById('customOccupationName');
        const customDescEl = document.getElementById('customOccupationDesc');
        
        if (customNameEl) data.customOccupation.name = customNameEl.value;
        if (customDescEl) data.customOccupation.description = customDescEl.value;
    }
    
    // Update displays
    updateEnhancedPromptPreview();
    updateCharacterSheet();
}

function updatePhysicalCharacteristic(property, value) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    
    // Map UI field names to data structure
    const propertyMap = {
        'gender': 'gender',
        'ethnicity': 'ethnicity',
        'skintone': 'skinTone',
        'eyecolor': 'eyeColor',
        'haircolor': 'hairColor',
        'hairstyle': 'hairStyle',
        'expression': 'facialExpression',
        'posture': 'posture',
        'type': 'bodyType',
        'height': 'height',
        'style': 'clothingStyle'
    };
    
    const mappedProperty = propertyMap[property] || property;
    
    if (data.physicalCharacteristics.hasOwnProperty(mappedProperty)) {
        data.physicalCharacteristics[mappedProperty] = value;
        updateEnhancedPromptPreview();
        updateCharacterSheet();
    }
}

// ========================================
// PHYSICAL CHARACTERISTICS FUNCTIONS
// ========================================

function updatePhysical(property, value) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics[property] = value;
    updateEnhancedPromptPreview();
    updateCharacterSheet();
}

function toggleProsthetics(enabled) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.prosthetics.enabled = enabled;
    const optionsDiv = document.getElementById('prosthetics-options');
    if (optionsDiv) {
        optionsDiv.style.display = enabled ? 'block' : 'none';
    }
    updateEnhancedPromptPreview();
}

function toggleAugmentations(enabled) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.augmentations.enabled = enabled;
    const optionsDiv = document.getElementById('augmentations-options');
    if (optionsDiv) {
        optionsDiv.style.display = enabled ? 'block' : 'none';
    }
    updateEnhancedPromptPreview();
}

function updateProstheticLimb(limb, enabled) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const limbs = data.physicalCharacteristics.prosthetics.limbs;
    if (enabled) {
        if (!limbs.includes(limb)) {
            limbs.push(limb);
        }
    } else {
        const index = limbs.indexOf(limb);
        if (index > -1) {
            limbs.splice(index, 1);
        }
    }
    updateEnhancedPromptPreview();
}

function updateProstheticType(type) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.prosthetics.type = type;
    updateEnhancedPromptPreview();
}

function updateProstheticQuality(quality) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.prosthetics.quality = quality;
    updateEnhancedPromptPreview();
}

function updateAugmentation(type, enabled) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const types = data.physicalCharacteristics.augmentations.types;
    if (enabled) {
        if (!types.includes(type)) {
            types.push(type);
        }
    } else {
        const index = types.indexOf(type);
        if (index > -1) {
            types.splice(index, 1);
        }
    }
    updateEnhancedPromptPreview();
}

function updateAugmentationVisibility(visibility) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.augmentations.visibility = visibility;
    updateEnhancedPromptPreview();
}

function updateBattleDamage(property, value) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics.battleDamage[property] = value;
    updateEnhancedPromptPreview();
}

// ========================================
// ATTRIBUTE MANAGEMENT
// ========================================

function modifyAttribute(attr, change) {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const currentValue = data.attributes[attr];
    const newValue = Math.max(15, Math.min(90, currentValue + change));
    
    data.attributes[attr] = newValue;
    
    // Update display
    const valueElement = document.getElementById(`${attr}-value`);
    const halfElement = document.getElementById(`${attr}-half`);
    
    if (valueElement) valueElement.textContent = newValue;
    if (halfElement) halfElement.textContent = Math.floor(newValue / 2);
    
    // Update points if using point buy
    const pointMethod = document.getElementById('pointMethod');
    if (pointMethod && pointMethod.classList.contains('active')) {
        updatePointsDisplay();
    }
    
    // Update derived stats
    updateDerivedStats();
}

function updatePointsDisplay() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const attributes = data.attributes;
    const totalUsed = Object.values(attributes).reduce((sum, val) => sum + val, 0);
    const remaining = 460 - totalUsed;
    
    const totalElement = document.getElementById('totalPoints');
    const remainingElement = document.getElementById('remainingPoints');
    
    if (totalElement) totalElement.textContent = totalUsed;
    if (remainingElement) {
        remainingElement.textContent = remaining;
        remainingElement.style.color = remaining < 0 ? '#ff4444' : '#44ff44';
    }
}

function updateDerivedStats() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const attrs = data.attributes;
    
    // Calculate derived statistics
    const hitPoints = Math.floor((attrs.con + attrs.siz) / 10);
    const sanity = attrs.pow;
    const magicPoints = Math.floor(attrs.pow / 5);
    const movement = calculateMovement(attrs.str, attrs.dex, attrs.siz);
    const damageBonus = calculateDamageBonus(attrs.str, attrs.siz);
    const dodge = Math.floor(attrs.dex / 2);
    
    // Update display elements
    updateElementText('hitPoints', hitPoints);
    updateElementText('sanity', sanity);
    updateElementText('magicPoints', magicPoints);
    updateElementText('movement', movement);
    updateElementText('damageBonus', damageBonus);
    updateElementText('dodge', dodge);
}

function updateHalfValues() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const attributes = data.attributes;
    
    Object.entries(attributes).forEach(([key, value]) => {
        const halfElement = document.getElementById(`${key}-half`);
        const valueElement = document.getElementById(`${key}-value`);
        
        if (halfElement) halfElement.textContent = Math.floor(value / 2);
        if (valueElement) valueElement.textContent = value;
    });
}

function calculateMovement(str, dex, siz) {
    if (str < siz && dex < siz) return 7;
    if (str > siz || dex > siz) return 9;
    return 8;
}

function calculateDamageBonus(str, siz) {
    const total = str + siz;
    if (total < 65) return '-2';
    if (total < 85) return '-1';
    if (total < 125) return '0';
    if (total < 165) return '+1d4';
    if (total < 205) return '+1d6';
    return '+2d6';
}

function updateElementText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

// ========================================
// TAB MANAGEMENT (FIXED)
// ========================================

function showTab(tabName) {
    try {
        // Hide all tab contents
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active'));
        
        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.tab-button');
        buttons.forEach(button => button.classList.remove('active'));
        
        // Show selected tab
        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Activate corresponding button
        const activeButton = document.querySelector(`[onclick*="showTab('${tabName}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Update specific tab content
        switch(tabName) {
            case 'attributes':
                updatePointsDisplay();
                updateHalfValues();
                break;
            case 'skills':
                if (typeof updateSkillsDisplay === 'function') {
                    updateSkillsDisplay();
                }
                break;
            case 'sheet':
                updateCharacterSheet();
                break;
            case 'comfyui':
                updateEnhancedPromptPreview();
                break;
        }
    } catch (error) {
        console.error('Error in showTab:', error);
    }
}

// ========================================
// SMART GENERATION FUNCTIONS
// ========================================

function generateFromAttributes() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const attributes = data.attributes;
    const physical = data.physicalCharacteristics;
    
    // Generate body type from STR and CON
    if (attributes.str >= 80) {
        physical.bodyType = "athletic";
        physical.build = "broad";
    } else if (attributes.str >= 70) {
        physical.bodyType = "athletic";
        physical.build = "proportional";
    } else if (attributes.str <= 30) {
        physical.bodyType = "thin";
        physical.build = "slight";
    }
    
    // Generate height from SIZ
    if (attributes.siz >= 80) {
        physical.height = "very_tall";
        if (attributes.siz >= 85) physical.build = "heavy";
    } else if (attributes.siz >= 70) {
        physical.height = "tall";
    } else if (attributes.siz <= 30) {
        physical.height = "short";
        physical.build = "slight";
    } else if (attributes.siz <= 40) {
        physical.height = "short";
    }
    
    // Generate appearance effects from APP
    if (attributes.app >= 80) {
        physical.clothingStyle = "well_maintained";
        physical.facialExpression = "confident";
    } else if (attributes.app <= 30) {
        physical.clothingStyle = "ragged";
        physical.battleDamage.scars = "moderate";
        physical.ageAppearance = "weathered";
    }
    
    // Generate demeanor from POW
    if (attributes.pow >= 80) {
        physical.posture = "confident";
        physical.facialExpression = "determined";
    } else if (attributes.pow <= 30) {
        physical.posture = "nervous";
        physical.facialExpression = "worried";
    }
    
    updatePhysicalCharacteristicsUI();
    updateEnhancedPromptPreview();
    
    showNotification('🎲 Características físicas geradas baseadas nos atributos!', 'success');
}

function randomizePhysical() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const physical = data.physicalCharacteristics;
    
    // Randomize basic characteristics
    const genders = ["male", "female", "person", "non-binary"];
    const ethnicities = ["caucasian", "african", "asian", "latino", "indigenous", "mixed"];
    const skinTones = ["very_light", "light", "medium", "tan", "dark", "very_dark"];
    const eyeColors = ["brown", "blue", "green", "hazel", "amber", "gray"];
    const hairColors = ["black", "dark_brown", "brown", "light_brown", "blonde", "red", "gray"];
    const hairStyles = ["short", "medium", "long", "bald", "buzzcut", "ponytail", "braided"];
    const expressions = ["determined", "calm", "alert", "worried", "confident", "suspicious"];
    const postures = ["confident", "alert", "relaxed", "nervous", "aggressive", "cautious"];
    
    physical.gender = genders[Math.floor(Math.random() * genders.length)];
    physical.ethnicity = ethnicities[Math.floor(Math.random() * ethnicities.length)];
    physical.skinTone = skinTones[Math.floor(Math.random() * skinTones.length)];
    physical.eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];
    physical.hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    physical.hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
    physical.facialExpression = expressions[Math.floor(Math.random() * expressions.length)];
    physical.posture = postures[Math.floor(Math.random() * postures.length)];
    
    updatePhysicalCharacteristicsUI();
    updateEnhancedPromptPreview();
    
    showNotification('🎯 Características físicas aleatorizadas!', 'success');
}

function resetPhysicalCharacteristics() {
    if (!confirm('Resetar todas as características físicas para os valores padrão?')) {
        return;
    }
    
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    data.physicalCharacteristics = {
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
    };
    
    updatePhysicalCharacteristicsUI();
    updateEnhancedPromptPreview();
    
    showNotification('🔄 Características físicas resetadas!', 'success');
}

function applyOccupationModifications() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    if (!data.occupation) {
        alert('Selecione uma ocupação primeiro!');
        return;
    }
    
    const physical = data.physicalCharacteristics;
    const occupation = data.occupation;
    
    // Reset distinguishing marks
    physical.distinguishingMarks = [];
    
    // Apply occupation-specific modifications
    // This would use your occupations data if available
    
    updatePhysicalCharacteristicsUI();
    updateEnhancedPromptPreview();
    
    showNotification(`⚙️ Modificações de ocupação aplicadas!`, 'success');
}

// ========================================
// UI UPDATE FUNCTIONS
// ========================================

function updatePhysicalCharacteristicsUI() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const physical = data.physicalCharacteristics;
    
    // Update basic characteristics dropdowns
    const fieldMappings = {
        'characterGender': 'gender',
        'characterEthnicity': 'ethnicity',
        'characterSkinTone': 'skinTone',
        'characterEyeColor': 'eyeColor',
        'characterHairColor': 'hairColor',
        'characterHairStyle': 'hairStyle',
        'facialExpression': 'facialExpression',
        'characterPosture': 'posture',
        'bodyType': 'bodyType',
        'characterHeight': 'height',
        'clothingStyle': 'clothingStyle'
    };
    
    Object.entries(fieldMappings).forEach(([elementId, property]) => {
        const element = document.getElementById(elementId);
        if (element && physical[property]) {
            element.value = physical[property];
        }
    });
    
    // Update prosthetics
    const prosthetics = physical.prosthetics;
    const prostheticsEnabled = document.getElementById('prosthetics-enabled');
    if (prostheticsEnabled) {
        prostheticsEnabled.checked = prosthetics.enabled;
        toggleProsthetics(prosthetics.enabled);
    }
    
    // Update augmentations
    const augmentations = physical.augmentations;
    const augmentationsEnabled = document.getElementById('augmentations-enabled');
    if (augmentationsEnabled) {
        augmentationsEnabled.checked = augmentations.enabled;
        toggleAugmentations(augmentations.enabled);
    }
}

function updateAllDisplays() {
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    updateCharacterSheet();
    updateEnhancedPromptPreview();
}

// ========================================
// ENHANCED PROMPT GENERATION
// ========================================

function buildComprehensiveFluxPrompt() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const char = data;
    const physical = char.physicalCharacteristics;
    
    let sections = {
        identity: [],
        physical: [],
        equipment: [],
        environment: [],
        quality: []
    };
    
    // IDENTITY SECTION
    sections.identity.push(`${physical.gender} ${getOccupationDisplayName()}`);
    if (char.age && char.age !== 0) {
        sections.identity.push(`${char.age} years old`);
    }
    sections.identity.push(`${physical.ethnicity} ethnicity`);
    
    // PHYSICAL SECTION
    sections.physical.push(`${physical.skinTone.replace('_', ' ')} skin`);
    sections.physical.push(`${physical.eyeColor} eyes`);
    sections.physical.push(`${physical.hairColor.replace('_', ' ')} ${physical.hairStyle} hair`);
    sections.physical.push(`${physical.bodyType} build`);
    sections.physical.push(`${physical.facialExpression} expression`);
    sections.physical.push(`${physical.posture} posture`);
    
    // Modifications
    if (physical.prosthetics.enabled && physical.prosthetics.limbs.length > 0) {
        const prostheticDesc = physical.prosthetics.limbs.map(limb => 
            `${physical.prosthetics.quality} ${physical.prosthetics.type} ${limb.replace('_', ' ')}`
        ).join(', ');
        sections.physical.push(`prosthetic ${prostheticDesc}`);
    }
    
    if (physical.augmentations.enabled && physical.augmentations.types.length > 0) {
        const augDesc = physical.augmentations.types.map(type => 
            type.replace('_', ' ')
        ).join(', ');
        sections.physical.push(`${physical.augmentations.visibility} ${augDesc}`);
    }
    
    // Battle damage
    if (physical.battleDamage.scars !== "none") {
        sections.physical.push(`${physical.battleDamage.scars} battle scars`);
    }
    if (physical.battleDamage.radiationEffects !== "none") {
        sections.physical.push(`${physical.battleDamage.radiationEffects} radiation exposure effects`);
    }
    
    // EQUIPMENT SECTION
    sections.equipment.push(`wearing ${physical.clothingStyle.replace('_', ' ')} clothing`);
    
    // ENVIRONMENT SECTION
    sections.environment.push("post-apocalyptic Brazil 2053");
    sections.environment.push("Itatiaia mountain settlement");
    sections.environment.push("survivor community background");
    
    // QUALITY SECTION
    const style = getSelectedStyle() || "realistic";
    const quality = getQualityLevel() || "standard";
    
    sections.quality.push("detailed character portrait");
    sections.quality.push(style);
    
    if (quality === "high") {
        sections.quality.push("high quality, 4k resolution");
    } else {
        sections.quality.push("good quality, detailed");
    }
    
    sections.quality.push("professional lighting");
    sections.quality.push("realistic proportions");
    
    // BUILD FINAL PROMPT
    const finalPrompt = [
        sections.identity.join(', '),
        sections.physical.join(', '),
        sections.equipment.join(', '),
        sections.environment.join(', '),
        sections.quality.join(', ')
    ].join(', ');
    
    return {
        full: finalPrompt,
        sections: sections,
        metadata: {
            character: char.name || "Unknown",
            occupation: getOccupationDisplayName(),
            hasModifications: physical.prosthetics.enabled || physical.augmentations.enabled,
            complexity: Object.values(sections).flat().length
        }
    };
}

function buildEnhancedNegativePrompt() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const physical = data.physicalCharacteristics;
    
    const negatives = [
        "low quality", "blurry", "distorted", "deformed", "ugly", "bad anatomy",
        "bad hands", "extra fingers", "missing fingers", "malformed limbs",
        "bad proportions", "asymmetrical face", "crossed eyes",
        "cartoon", "anime", "manga", "chibi", "unrealistic proportions",
        "nudity", "nsfw", "sexual content", "gore", "extreme violence",
        "modern technology", "smartphones", "cars", "contemporary clothing",
        "watermark", "signature", "text", "logo", "copyright",
        "multiple people", "crowd", "duplicate person", "floating objects"
    ];
    
    // Add specific negatives based on character
    if (!physical.prosthetics.enabled) {
        negatives.push("prosthetic limbs", "mechanical arms", "robotic parts");
    }
    
    if (!physical.augmentations.enabled) {
        negatives.push("cybernetic implants", "glowing eyes", "visible tech");
    }
    
    if (physical.battleDamage.scars === "none") {
        negatives.push("battle scars", "facial scars", "extensive wounds");
    }
    
    return negatives.join(", ");
}

function updateEnhancedPromptPreview() {
    const preview = document.getElementById('promptPreview');
    if (!preview) return;
    
    try {
        const promptData = buildComprehensiveFluxPrompt();
        const negativePrompt = buildEnhancedNegativePrompt();
        
        preview.innerHTML = `
            <div style="margin-bottom: 15px;">
                <h4 style="color: #4fc3a1; margin-bottom: 10px;">🎯 Enhanced Flux Prompt:</h4>
                
                <div class="prompt-section identity" style="margin-bottom: 10px; padding: 8px; background: rgba(79, 195, 161, 0.1); border-radius: 4px;">
                    <h4 style="color: #4fc3a1; margin-bottom: 5px;">Identity</h4>
                    <div class="prompt-text" style="font-size: 0.9em;">${promptData.sections.identity.join(', ')}</div>
                </div>
                
                <div class="prompt-section physical" style="margin-bottom: 10px; padding: 8px; background: rgba(79, 195, 161, 0.1); border-radius: 4px;">
                    <h4 style="color: #4fc3a1; margin-bottom: 5px;">Physical Characteristics</h4>
                    <div class="prompt-text" style="font-size: 0.9em;">${promptData.sections.physical.join(', ')}</div>
                </div>
                
                <div class="prompt-section equipment" style="margin-bottom: 10px; padding: 8px; background: rgba(79, 195, 161, 0.1); border-radius: 4px;">
                    <h4 style="color: #4fc3a1; margin-bottom: 5px;">Equipment & Style</h4>
                    <div class="prompt-text" style="font-size: 0.9em;">${promptData.sections.equipment.join(', ')}</div>
                </div>
                
                <div class="prompt-section environment" style="margin-bottom: 10px; padding: 8px; background: rgba(79, 195, 161, 0.1); border-radius: 4px;">
                    <h4 style="color: #4fc3a1; margin-bottom: 5px;">Environment</h4>
                    <div class="prompt-text" style="font-size: 0.9em;">${promptData.sections.environment.join(', ')}</div>
                </div>
                
                <div class="prompt-section quality" style="margin-bottom: 10px; padding: 8px; background: rgba(79, 195, 161, 0.1); border-radius: 4px;">
                    <h4 style="color: #4fc3a1; margin-bottom: 5px;">Quality & Style</h4>
                    <div class="prompt-text" style="font-size: 0.9em;">${promptData.sections.quality.join(', ')}</div>
                </div>
                
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #444;">
                    <strong style="color: #a8d8c8;">Complete Prompt:</strong>
                    <div style="background: rgba(168, 216, 200, 0.1); padding: 8px; border-radius: 4px; margin-top: 5px; font-family: monospace; font-size: 0.85em; max-height: 150px; overflow-y: auto;">
                        ${promptData.full}
                    </div>
                </div>
                
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #444;">
                    <strong style="color: #f44336;">Negative Prompt:</strong>
                    <div style="background: rgba(244, 67, 54, 0.1); padding: 8px; border-radius: 4px; margin-top: 5px; font-family: monospace; font-size: 0.85em; max-height: 100px; overflow-y: auto;">
                        ${negativePrompt}
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 10px; font-size: 0.85em; color: #888;">
                Character: ${promptData.metadata.character} • 
                Occupation: ${promptData.metadata.occupation} • 
                Modifications: ${promptData.metadata.hasModifications ? 'Yes' : 'No'} • 
                Complexity: ${promptData.metadata.complexity} elements
            </div>
        `;
    } catch (error) {
        console.error('Error updating prompt preview:', error);
        preview.innerHTML = `<div style="color: #f44336;">Error generating prompt preview</div>`;
    }
}

// ========================================
// GENERATION METHODS
// ========================================

function selectGenerationMethod(method) {
    // Remove active class from all methods
    document.querySelectorAll('.generation-method').forEach(m => m.classList.remove('active'));
    
    // Add active class to selected method
    const selectedMethod = document.getElementById(method + 'Method');
    if (selectedMethod) selectedMethod.classList.add('active');
    
    // Show/hide relevant sections
    const rollDiceSection = document.getElementById('rollDiceSection');
    const rollHeroicSection = document.getElementById('rollHeroicSection');
    const pointsSection = document.getElementById('pointsSection');
    
    if (rollDiceSection) rollDiceSection.style.display = method === 'roll' ? 'block' : 'none';
    if (rollHeroicSection) rollHeroicSection.style.display = method === 'roll2' ? 'block' : 'none';
    if (pointsSection) pointsSection.style.display = method === 'points' ? 'block' : 'none';
    
    // Update character data
    window.RolaiCharacterCreator.enhancedCharacterData.generationMethod = method;
}

function rollAllAttributes() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const attributeNames = ['str', 'dex', 'int', 'con', 'app', 'pow', 'siz', 'edu'];
    
    attributeNames.forEach(attr => {
        // Roll 3d6 * 5
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        const roll3 = Math.floor(Math.random() * 6) + 1;
        const total = (roll1 + roll2 + roll3) * 5;
        
        data.attributes[attr] = total;
        data.rollHistory.push({
            attribute: attr,
            rolls: [roll1, roll2, roll3],
            total: total
        });
    });
    
    updateHalfValues();
    updateDerivedStats();
    showNotification('🎲 Todos os atributos foram rolados!', 'success');
}

function rollHeroicAttributes() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    let rolls = [];
    
    // 5 rolls of 3d6
    for (let i = 0; i < 5; i++) {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        const roll3 = Math.floor(Math.random() * 6) + 1;
        rolls.push((roll1 + roll2 + roll3) * 5);
    }
    
    // 3 rolls of 2d6+6
    for (let i = 0; i < 3; i++) {
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;
        rolls.push((roll1 + roll2 + 6) * 5);
    }
    
    data.heroicRolls = rolls;
    
    const resultsDiv = document.getElementById('heroicResults');
    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <div style="margin-top: 15px;">
                <h4>Valores gerados (distribua como desejar):</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                    ${rolls.map((roll, index) => `
                        <div style="background: rgba(79, 195, 161, 0.2); padding: 8px 12px; border-radius: 4px; font-weight: bold;">
                            ${roll}
                        </div>
                    `).join('')}
                </div>
                <p style="margin-top: 10px; font-size: 0.9em; color: #888;">
                    Clique nos valores dos atributos para distribuir manualmente.
                </p>
            </div>
        `;
    }
    
    showNotification('🎯 Valores heroicos gerados! Distribua-os entre os atributos.', 'success');
}

// ========================================
// PLACEHOLDER AND COMPATIBILITY FUNCTIONS
// ========================================

function updateOccupationInfo() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    const select = document.getElementById('occupationSelect');
    const infoDiv = document.getElementById('occupationInfo');
    const customGroup = document.getElementById('customOccupationGroup');
    
    if (!select) return;
    
    if (select.value === 'custom') {
        if (customGroup) customGroup.style.display = 'block';
        if (infoDiv) infoDiv.innerHTML = '';
        data.occupation = 'custom';
    } else if (select.value) {
        if (customGroup) customGroup.style.display = 'none';
        data.occupation = select.value;
        
        // Try to use occupations data if available
        if (typeof window.occupations !== 'undefined' && window.occupations[select.value]) {
            const occ = window.occupations[select.value];
            if (infoDiv) {
                infoDiv.innerHTML = `
                    <div style="padding: 15px; background: rgba(79, 195, 161, 0.1); border-radius: 8px; margin-top: 15px;">
                        <h3 style="color: #4fc3a1; margin-bottom: 10px;">${occ.name}</h3>
                        <p style="margin-bottom: 10px; font-style: italic;">"${occ.description}"</p>
                        <p><strong>Perícias Ocupacionais:</strong></p>
                        <p style="color: #a8d8c8;">${occ.skills ? occ.skills.join(' • ') : 'N/A'}</p>
                    </div>
                `;
            }
        }
    } else {
        if (customGroup) customGroup.style.display = 'none';
        if (infoDiv) infoDiv.innerHTML = '';
        data.occupation = '';
    }
    
    updateEnhancedPromptPreview();
}

function updateSkillsDisplay() {
    // Placeholder for skills system
    console.log('Updating skills display...');
}

function updateCharacterSheet() {
    // Placeholder for character sheet update
    console.log('Updating character sheet...');
}

function getAllCharacterSkills() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    return {
        ...data.occupationalSkills,
        ...data.personalSkills
    };
}

function exportCharacter() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    updateCharacterData(); // Ensure all data is current
    
    const exportData = {
        sistema: "Call of Cthulhu - 7ª Edição",
        cenario: "Rolai 2053 - Ecos da Terra Queimada",
        
        // Enhanced character data
        personagem: {
            nome: data.name || "Investigador Sem Nome",
            idade: data.age || "Desconhecida",
            ocupacao: getOccupationDisplayName(),
            historia: data.background || "História não contada"
        },
        
        // Complete physical characteristics
        caracteristicasFisicas: data.physicalCharacteristics,
        
        // Attributes with calculated values
        atributos: Object.fromEntries(
            Object.entries(data.attributes).map(([key, value]) => [
                key, {
                    valor: value,
                    metade: Math.floor(value / 2),
                    quinto: Math.floor(value / 5)
                }
            ])
        ),
        
        // Derived characteristics
        caracteristicasDerivadas: {
            pontosDeVida: Math.floor((data.attributes.con + data.attributes.siz) / 10),
            sanidadeInicial: data.attributes.pow,
            pontosDeMagia: Math.floor(data.attributes.pow / 5),
            bonusDeDano: calculateDamageBonus(data.attributes.str, data.attributes.siz),
            movimento: calculateMovement(data.attributes.str, data.attributes.dex, data.attributes.siz),
            esquiva: Math.floor(data.attributes.dex / 2)
        },
        
        // Skills
        pericias: {
            ocupacionais: data.occupationalSkills,
            pessoais: data.personalSkills,
            combinadas: getAllCharacterSkills()
        },
        
        // Enhanced prompts for image generation
        promptsIA: {
            completo: buildComprehensiveFluxPrompt().full,
            secoes: buildComprehensiveFluxPrompt().sections,
            negativo: buildEnhancedNegativePrompt(),
            metadata: buildComprehensiveFluxPrompt().metadata
        },
        
        // Generation metadata
        metadadosGeracao: {
            metodo: data.generationMethod,
            versaoSistema: "2.0-Enhanced",
            historicoRolagens: data.rollHistory
        },
        
        // Image data if available
        imagem: data.image,
        metadadosImagem: data.imageMetadata,
        
        // Export info
        dataExportacao: new Date().toISOString(),
        versaoExportacao: "2.0"
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const filename = `${(data.name || 'investigador').replace(/\s+/g, '_')}_coc_2053_enhanced.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', filename);
    linkElement.click();
    
    showNotification('📊 Ficha completa exportada com características físicas detalhadas!', 'success');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function getOccupationDisplayName() {
    const data = window.RolaiCharacterCreator.enhancedCharacterData;
    if (data.occupation === 'custom') {
        return data.customOccupation.name || "Ocupação Personalizada";
    }
    
    // Try to use occupations data if available
    if (typeof window.occupations !== 'undefined' && window.occupations[data.occupation]) {
        return window.occupations[data.occupation].name;
    }
    
    return data.occupation || "Sobrevivente";
}

function getSelectedStyle() {
    const styleElement = document.getElementById('imageStyle');
    return styleElement ? styleElement.value : 'realistic';
}

function getQualityLevel() {
    const qualityElement = document.getElementById('imageQuality');
    return qualityElement ? qualityElement.value : 'standard';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 8px;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        cursor: pointer;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    });
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// ========================================
// GLOBAL EXPORTS AND COMPATIBILITY
// ========================================

// Export all functions globally for compatibility
window.showTab = showTab;
window.updateCharacterData = updateCharacterData;
window.updatePhysical = updatePhysical;
window.modifyAttribute = modifyAttribute;
window.selectGenerationMethod = selectGenerationMethod;
window.rollAllAttributes = rollAllAttributes;
window.rollHeroicAttributes = rollHeroicAttributes;
window.updateOccupationInfo = updateOccupationInfo;
window.toggleProsthetics = toggleProsthetics;
window.toggleAugmentations = toggleAugmentations;
window.updateProstheticLimb = updateProstheticLimb;
window.updateProstheticType = updateProstheticType;
window.updateProstheticQuality = updateProstheticQuality;
window.updateAugmentation = updateAugmentation;
window.updateAugmentationVisibility = updateAugmentationVisibility;
window.updateBattleDamage = updateBattleDamage;
window.generateFromAttributes = generateFromAttributes;
window.randomizePhysical = randomizePhysical;
window.applyOccupationModifications = applyOccupationModifications;
window.resetPhysicalCharacteristics = resetPhysicalCharacteristics;
window.exportCharacter = exportCharacter;

// Export enhanced functions
window.buildComprehensiveFluxPrompt = buildComprehensiveFluxPrompt;
window.buildEnhancedNegativePrompt = buildEnhancedNegativePrompt;
window.updateEnhancedPromptPreview = updateEnhancedPromptPreview;
window.updatePromptPreview = updateEnhancedPromptPreview; // Compatibility alias

// Export data structures
window.RolaiCharacterCreator.functions = {
    showTab,
    updateCharacterData,
    updatePhysical,
    modifyAttribute,
    generateComprehensiveCharacterData,
    buildComprehensiveFluxPrompt,
    buildEnhancedNegativePrompt,
    updateEnhancedPromptPreview
};

// ========================================
// CSS ANIMATIONS (INJECTED)
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification {
        transition: transform 0.2s ease;
    }
    
    .notification:hover {
        transform: translateX(-5px);
    }
    
    .prompt-section h4 {
        font-size: 0.9em;
        margin: 0;
        font-weight: 600;
    }
    
    .prompt-text {
        line-height: 1.4;
    }
`;

// Only add styles if they haven't been added yet
if (!document.querySelector('#rolai-styles')) {
    style.id = 'rolai-styles';
    document.head.appendChild(style);
}

console.log('🚀 Enhanced Character System with Physical Characteristics loaded and fixed!');