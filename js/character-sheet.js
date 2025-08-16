// character-sheet.js - Fixed version with missing functions

// Add missing updateCharacterImage function
function updateCharacterImage() {
    const sheetImage = document.getElementById('sheetImage');
    if (!sheetImage) return;
    
    const data = window.RolaiCharacterCreator?.enhancedCharacterData;
    if (data && data.image) {
        // If character has an image, display it
        sheetImage.innerHTML = `<img src="${data.image}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;" alt="Character Image">`;
    } else {
        // Default placeholder
        sheetImage.innerHTML = '<div class="no-image">👤</div>';
    }
}

// Enhanced character sheet update function
function updateCharacterSheet() {
    try {
        // Update character image first
        updateCharacterImage();
        
        // Get character data safely
        const data = window.RolaiCharacterCreator?.enhancedCharacterData;
        if (!data) {
            console.warn('Character data not available yet');
            return;
        }
        
        // Update basic info
        updateSheetBasicInfo(data);
        
        // Update physical characteristics
        updateSheetPhysicalCharacteristics(data);
        
        // Update attributes
        updateSheetAttributes(data);
        
        // Update skills
        updateSheetSkills(data);
        
    } catch (error) {
        console.error('Error updating character sheet:', error);
    }
}

function updateSheetBasicInfo(data) {
    const sheetBasicInfo = document.getElementById('sheetBasicInfo');
    if (!sheetBasicInfo) return;
    
    const occupationName = getOccupationDisplayName();
    
    sheetBasicInfo.innerHTML = `
        <div class="character-basic-info">
            <h3>${data.name || 'Investigador Sem Nome'}</h3>
            <div class="info-grid">
                <div><strong>Idade:</strong> ${data.age || 'N/A'}</div>
                <div><strong>Ocupação:</strong> ${occupationName}</div>
            </div>
            <div class="background-section">
                <strong>História:</strong>
                <p>${data.background || 'História não definida'}</p>
            </div>
        </div>
    `;
}

function updateSheetPhysicalCharacteristics(data) {
    const sheetPhysical = document.getElementById('sheetPhysicalCharacteristics');
    if (!sheetPhysical) return;
    
    const physical = data.physicalCharacteristics;
    
    let modificationsHtml = '';
    
    // Prosthetics
    if (physical.prosthetics.enabled && physical.prosthetics.limbs.length > 0) {
        modificationsHtml += `
            <div class="modification-item">
                <strong>Próteses:</strong> ${physical.prosthetics.quality} ${physical.prosthetics.type} 
                ${physical.prosthetics.limbs.map(limb => limb.replace('_', ' ')).join(', ')}
            </div>
        `;
    }
    
    // Augmentations
    if (physical.augmentations.enabled && physical.augmentations.types.length > 0) {
        modificationsHtml += `
            <div class="modification-item">
                <strong>Augmentações:</strong> ${physical.augmentations.visibility} 
                ${physical.augmentations.types.map(type => type.replace('_', ' ')).join(', ')}
            </div>
        `;
    }
    
    // Battle damage
    if (physical.battleDamage.scars !== 'none' || physical.battleDamage.radiationEffects !== 'none') {
        modificationsHtml += `
            <div class="modification-item">
                <strong>Danos:</strong> 
                ${physical.battleDamage.scars !== 'none' ? `${physical.battleDamage.scars} cicatrizes` : ''}
                ${physical.battleDamage.radiationEffects !== 'none' ? `, ${physical.battleDamage.radiationEffects} efeitos de radiação` : ''}
            </div>
        `;
    }
    
    sheetPhysical.innerHTML = `
        <div class="physical-characteristics-grid">
            <div class="physical-group">
                <h4>Aparência Básica</h4>
                <div class="characteristic-item">
                    <span>Gênero:</span> <span>${translatePhysicalValue('gender', physical.gender)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Etnia:</span> <span>${translatePhysicalValue('ethnicity', physical.ethnicity)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Tom de Pele:</span> <span>${translatePhysicalValue('skinTone', physical.skinTone)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Cor dos Olhos:</span> <span>${translatePhysicalValue('eyeColor', physical.eyeColor)}</span>
                </div>
            </div>
            
            <div class="physical-group">
                <h4>Cabelo e Expressão</h4>
                <div class="characteristic-item">
                    <span>Cabelo:</span> <span>${translatePhysicalValue('hairColor', physical.hairColor)} ${translatePhysicalValue('hairStyle', physical.hairStyle)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Expressão:</span> <span>${translatePhysicalValue('facialExpression', physical.facialExpression)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Postura:</span> <span>${translatePhysicalValue('posture', physical.posture)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Tipo Corporal:</span> <span>${translatePhysicalValue('bodyType', physical.bodyType)}</span>
                </div>
            </div>
            
            <div class="physical-group">
                <h4>Estilo e Equipamentos</h4>
                <div class="characteristic-item">
                    <span>Altura:</span> <span>${translatePhysicalValue('height', physical.height)}</span>
                </div>
                <div class="characteristic-item">
                    <span>Estilo de Roupa:</span> <span>${translatePhysicalValue('clothingStyle', physical.clothingStyle)}</span>
                </div>
            </div>
            
            ${modificationsHtml ? `
                <div class="physical-group">
                    <h4>Modificações Pós-Apocalípticas</h4>
                    ${modificationsHtml}
                </div>
            ` : ''}
        </div>
    `;
}

function updateSheetAttributes(data) {
    const sheetAttributes = document.getElementById('sheetAttributes');
    if (!sheetAttributes) return;
    
    const attributes = data.attributes;
    const attributeNames = {
        str: 'Força',
        dex: 'Destreza', 
        int: 'Inteligência',
        con: 'Constituição',
        app: 'Aparência',
        pow: 'Poder',
        siz: 'Tamanho',
        edu: 'Educação'
    };
    
    sheetAttributes.innerHTML = `
        <div class="attributes-sheet-grid">
            ${Object.entries(attributes).map(([key, value]) => `
                <div class="attribute-sheet-item">
                    <div class="attribute-name">${attributeNames[key]}</div>
                    <div class="attribute-values">
                        <div class="main-value">${value}</div>
                        <div class="half-value">Metade: ${Math.floor(value / 2)}</div>
                        <div class="fifth-value">Quinto: ${Math.floor(value / 5)}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function updateSheetSkills(data) {
    const sheetSkills = document.getElementById('sheetSkills');
    if (!sheetSkills) return;
    
    const allSkills = {
        ...data.occupationalSkills,
        ...data.personalSkills
    };
    
    if (Object.keys(allSkills).length === 0) {
        sheetSkills.innerHTML = '<p>Nenhuma perícia definida ainda.</p>';
        return;
    }
    
    sheetSkills.innerHTML = `
        <div class="skills-sheet-grid">
            ${Object.entries(allSkills).map(([skillName, value]) => `
                <div class="skill-sheet-item">
                    <span class="skill-name">${skillName}</span>
                    <span class="skill-value">${value}%</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Helper function to translate physical values to Portuguese
function translatePhysicalValue(category, value) {
    const translations = {
        gender: {
            'male': 'Masculino',
            'female': 'Feminino', 
            'person': 'Neutro',
            'non-binary': 'Não-binário'
        },
        ethnicity: {
            'caucasian': 'Caucasiana',
            'african': 'Africana',
            'asian': 'Asiática',
            'latino': 'Latino',
            'indigenous': 'Indígena',
            'mixed': 'Mista',
            'other': 'Outra'
        },
        skinTone: {
            'very_light': 'Muito Claro',
            'light': 'Claro',
            'medium': 'Médio',
            'tan': 'Bronzeado',
            'dark': 'Escuro',
            'very_dark': 'Muito Escuro'
        },
        eyeColor: {
            'brown': 'Castanho',
            'blue': 'Azul',
            'green': 'Verde',
            'hazel': 'Avelã',
            'amber': 'Âmbar',
            'gray': 'Cinza',
            'heterochromia': 'Heterocromia'
        },
        hairColor: {
            'black': 'Preto',
            'dark_brown': 'Castanho Escuro',
            'brown': 'Castanho',
            'light_brown': 'Castanho Claro',
            'blonde': 'Loiro',
            'red': 'Ruivo',
            'gray': 'Grisalho',
            'white': 'Branco',
            'dyed': 'Colorido'
        },
        hairStyle: {
            'short': 'Curto',
            'medium': 'Médio',
            'long': 'Longo',
            'bald': 'Careca',
            'buzzcut': 'Raspado',
            'ponytail': 'Rabo de Cavalo',
            'braided': 'Trançado',
            'messy': 'Bagunçado'
        },
        facialExpression: {
            'determined': 'Determinada',
            'calm': 'Calma',
            'alert': 'Alerta',
            'worried': 'Preocupada',
            'confident': 'Confiante',
            'suspicious': 'Desconfiada',
            'tired': 'Cansada'
        },
        posture: {
            'confident': 'Confiante',
            'alert': 'Alerta',
            'relaxed': 'Relaxada',
            'nervous': 'Nervosa',
            'aggressive': 'Agressiva',
            'cautious': 'Cautelosa'
        },
        bodyType: {
            'thin': 'Magro',
            'lean': 'Esbelto',
            'average': 'Médio',
            'athletic': 'Atlético',
            'stocky': 'Robusto',
            'heavy': 'Pesado'
        },
        height: {
            'very_short': 'Muito Baixo',
            'short': 'Baixo',
            'average': 'Médio',
            'tall': 'Alto',
            'very_tall': 'Muito Alto'
        },
        clothingStyle: {
            'practical': 'Prática',
            'military': 'Militar',
            'scavenged': 'Recuperada',
            'well_maintained': 'Bem Cuidada',
            'ragged': 'Esfarrapada',
            'formal': 'Formal'
        }
    };
    
    return translations[category]?.[value] || value;
}

// Helper function to get occupation display name safely
function getOccupationDisplayName() {
    const data = window.RolaiCharacterCreator?.enhancedCharacterData;
    if (!data) return 'Sobrevivente';
    
    if (data.occupation === 'custom') {
        return data.customOccupation?.name || "Ocupação Personalizada";
    }
    
    // Try to use occupations data if available
    if (typeof window.occupations !== 'undefined' && window.occupations[data.occupation]) {
        return window.occupations[data.occupation].name;
    }
    
    return data.occupation || "Sobrevivente";
}

// Export functions globally
window.updateCharacterImage = updateCharacterImage;
window.updateCharacterSheet = updateCharacterSheet;
window.updateSheetBasicInfo = updateSheetBasicInfo;
window.updateSheetPhysicalCharacteristics = updateSheetPhysicalCharacteristics;
window.updateSheetAttributes = updateSheetAttributes;
window.updateSheetSkills = updateSheetSkills;

console.log('✅ Character Sheet functions loaded successfully');