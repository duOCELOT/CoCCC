// Attribute management functions

// Generation method selection
function selectGenerationMethod(method) {
    enhancedCharacterData.generationMethod = method;
    
    // Update UI
    document.getElementById('rollMethod').classList.remove('active');
    document.getElementById('rollMethod2').classList.remove('active');
    document.getElementById('pointMethod').classList.remove('active');
    
    if (method === 'roll') {
        document.getElementById('rollMethod').classList.add('active');
    } else if (method === 'roll2') {
        document.getElementById('rollMethod2').classList.add('active');
    } else {
        document.getElementById('pointMethod').classList.add('active');
    }
    
    // Show/hide sections
    const rollSection = document.getElementById('rollDiceSection');
    const heroicSection = document.getElementById('rollHeroicSection');
    const pointsSection = document.getElementById('pointsSection');
    
    if (rollSection) rollSection.style.display = method === 'roll' ? 'block' : 'none';
    if (heroicSection) heroicSection.style.display = method === 'roll2' ? 'block' : 'none';
    if (pointsSection) pointsSection.style.display = method === 'points' ? 'block' : 'none';
    
    // Enable/disable attribute buttons
    disableAttributeButtons(method !== 'points');
}

// Enable/disable attribute modification buttons
function disableAttributeButtons(disable) {
    const buttons = document.querySelectorAll('.attribute-value button');
    buttons.forEach(button => {
        button.disabled = disable;
    });
}

// Modify attribute value
function modifyAttribute(attr, value) {
    if (enhancedCharacterData.generationMethod === 'roll') return;
    
    const current = enhancedCharacterData.attributes[attr];
    const newValue = current + value;
    
    // Check limits
    if (newValue < 15 || newValue > 90) return;
    
    // Check total points for point-buy method
    if (enhancedCharacterData.generationMethod === 'points') {
        const totalBefore = Object.values(enhancedCharacterData.attributes).reduce((a, b) => a + b, 0);
        const totalAfter = totalBefore - current + newValue;
        
        if (totalAfter > 460) {
            alert('Limite de 460 pontos atingido!');
            return;
        }
    }
    
    // Update attribute
    enhancedCharacterData.attributes[attr] = newValue;
    const valueElement = document.getElementById(`${attr}-value`);
    if (valueElement) valueElement.textContent = newValue;
    
    // Update displays
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    if (typeof updateEnhancedPromptPreview === 'function') {
        updateEnhancedPromptPreview();
    }
}

// Update half values display
function updateHalfValues() {
    const attrs = ['str', 'con', 'siz', 'dex', 'app', 'int', 'pow', 'edu'];
    attrs.forEach(attr => {
        const value = enhancedCharacterData.attributes[attr];
        const half = Math.floor(value / 2);
        const halfElement = document.getElementById(`${attr}-half`);
        if (halfElement) halfElement.textContent = half;
    });
}

// Update points display
function updatePointsDisplay() {
    const total = Object.values(enhancedCharacterData.attributes).reduce((a, b) => a + b, 0);
    const remaining = 460 - total;
    
    const totalElement = document.getElementById('totalPoints');
    const remainingElement = document.getElementById('remainingPoints');
    
    if (totalElement) totalElement.textContent = total;
    if (remainingElement) remainingElement.textContent = remaining;
    
    // Calculate skill points
    const eduPoints = enhancedCharacterData.attributes.edu * 4;
    const intPoints = enhancedCharacterData.attributes.int * 2;
    
    const occPointsElement = document.getElementById('occupationalPoints');
    const persPointsElement = document.getElementById('personalPoints');
    
    if (occPointsElement) occPointsElement.textContent = eduPoints;
    if (persPointsElement) persPointsElement.textContent = intPoints;
}

// Update derived statistics
function updateDerivedStats() {
    const attrs = enhancedCharacterData.attributes;
    
    // Hit Points: (CON + SIZ) / 10
    const hp = Math.floor((attrs.con + attrs.siz) / 10);
    const hpElement = document.getElementById('hitPoints');
    if (hpElement) hpElement.textContent = hp;
    
    // Sanity: POW
    const san = attrs.pow;
    const sanElement = document.getElementById('sanity');
    if (sanElement) sanElement.textContent = san;
    
    // Magic Points: POW / 5
    const mp = Math.floor(attrs.pow / 5);
    const mpElement = document.getElementById('magicPoints');
    if (mpElement) mpElement.textContent = mp;
    
    // Damage Bonus
    const db = calculateDamageBonus();
    const dbElement = document.getElementById('damageBonus');
    if (dbElement) dbElement.textContent = db;
    
    // Movement
    const mov = calculateMovement();
    const movElement = document.getElementById('movement');
    if (movElement) movElement.textContent = mov;
    
    // Dodge: DEX / 2
    const dodge = Math.floor(attrs.dex / 2);
    const dodgeElement = document.getElementById('dodge');
    if (dodgeElement) dodgeElement.textContent = dodge;
}

// Set attributes from array (for dice rolling)
function setAttributesFromArray(values) {
    const attrs = ['str', 'con', 'siz', 'dex', 'app', 'int', 'pow', 'edu'];
    
    attrs.forEach((attr, index) => {
        if (values[index] !== undefined) {
            enhancedCharacterData.attributes[attr] = values[index];
            const valueElement = document.getElementById(`${attr}-value`);
            if (valueElement) valueElement.textContent = values[index];
        }
    });
    
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    if (typeof updateEnhancedPromptPreview === 'function') {
        updateEnhancedPromptPreview();
    }
}

// Validate attributes
function validateAttributes() {
    const errors = [];
    
    // Check if all attributes are within valid range
    Object.entries(enhancedCharacterData.attributes).forEach(([attr, value]) => {
        if (value < 15 || value > 90) {
            errors.push(`${attr.toUpperCase()}: ${value} (deve estar entre 15-90)`);
        }
    });
    
    // Check total points for point-buy
    if (enhancedCharacterData.generationMethod === 'points') {
        const total = Object.values(enhancedCharacterData.attributes).reduce((a, b) => a + b, 0);
        if (total !== 460) {
            errors.push(`Total de pontos: ${total} (deve ser exatamente 460)`);
        }
    }
    
    return errors;
}

// Quick-set attribute presets
function setAttributePreset(presetName) {
    const presets = {
        balanced: [50, 50, 50, 50, 50, 50, 50, 50],
        investigator: [40, 50, 50, 60, 50, 70, 65, 75],
        combatant: [70, 65, 60, 65, 45, 50, 55, 40],
        scholar: [35, 45, 45, 50, 55, 75, 60, 85],
        survivor: [60, 70, 55, 60, 45, 55, 65, 50]
    };
    
    if (presets[presetName]) {
        setAttributesFromArray(presets[presetName]);
    }
}

// Get attribute modifier (for display purposes)
function getAttributeModifier(value) {
    if (value >= 80) return "Excepcional";
    if (value >= 70) return "Muito Alto";
    if (value >= 60) return "Alto";
    if (value >= 40) return "Médio";
    if (value >= 30) return "Baixo";
    return "Muito Baixo";
}