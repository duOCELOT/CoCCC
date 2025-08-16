// Skills management functions

// Update skills display
function updateSkillsDisplay() {
    const occGrid = document.getElementById('occupationalSkillsGrid');
    const persGrid = document.getElementById('personalSkillsGrid');
    
    if (!occGrid || !persGrid) return;
    
    // Clear grids
    occGrid.innerHTML = '';
    persGrid.innerHTML = '';
    
    // Update available points
    const eduPoints = characterData.attributes.edu * 4;
    const intPoints = characterData.attributes.int * 2;
    
    let usedOccPoints = 0;
    let usedPersPoints = 0;
    
    // Update dynamic skill values
    baseSkillValues["Esquivar"] = Math.floor(characterData.attributes.dex / 2);
    baseSkillValues["Idioma (Nativo)"] = characterData.attributes.edu;
    
    // Occupational skills
    if (characterData.occupation && characterData.occupation !== 'custom') {
        const occ = occupations[characterData.occupation];
        if (occ) {
            occ.skills.forEach(skill => {
                const value = characterData.occupationalSkills[skill] || baseSkillValues[skill] || 0;
                usedOccPoints += Math.max(0, value - (baseSkillValues[skill] || 0));
                
                const skillDiv = createSkillElement(skill, value, 'occupational', eduPoints - usedOccPoints);
                occGrid.appendChild(skillDiv);
            });
        }
    }
    
    // Personal interest skills
    allSkills.forEach(skill => {
        const value = characterData.personalSkills[skill] || baseSkillValues[skill] || 0;
        usedPersPoints += Math.max(0, value - (baseSkillValues[skill] || 0));
        
        const skillDiv = createSkillElement(skill, value, 'personal', intPoints - usedPersPoints);
        persGrid.appendChild(skillDiv);
    });
    
    // Update points display
    document.getElementById('usedOccupationalPoints').textContent = usedOccPoints;
    document.getElementById('usedPersonalPoints').textContent = usedPersPoints;
}

// Create skill element
function createSkillElement(skillName, value, type, remainingPoints) {
    const div = document.createElement('div');
    div.className = 'skill-item';
    
    const baseValue = baseSkillValues[skillName] || 0;
    if (value > baseValue) {
        div.classList.add('selected');
    }
    
    // Add skill description tooltip
    const description = getSkillDescription(skillName);
    if (description) {
        div.title = description;
    }
    
    div.innerHTML = `
        <span>${skillName}</span>
        <div class="skill-value">
            <button onclick="modifySkill('${skillName}', -5, '${type}')" 
                    ${value <= baseValue ? 'disabled' : ''} 
                    title="Diminuir perícia">-</button>
            <span title="Valor atual / Metade / Quinto">${value}%</span>
            <button onclick="modifySkill('${skillName}', 5, '${type}')" 
                    ${remainingPoints < 5 || value >= 90 ? 'disabled' : ''} 
                    title="Aumentar perícia">+</button>
        </div>
    `;
    
    return div;
}

// Modify skill value
function modifySkill(skillName, change, type) {
    const skills = type === 'occupational' ? characterData.occupationalSkills : characterData.personalSkills;
    const baseValue = baseSkillValues[skillName] || 0;
    const currentValue = skills[skillName] || baseValue;
    const newValue = currentValue + change;
    
    // Check limits
    if (newValue < baseValue || newValue > 90) return;
    
    // Check available points
    const maxPoints = type === 'occupational' 
        ? characterData.attributes.edu * 4 
        : characterData.attributes.int * 2;
        
    let usedPoints = 0;
    Object.keys(skills).forEach(skill => {
        usedPoints += Math.max(0, (skills[skill] || baseSkillValues[skill] || 0) - (baseSkillValues[skill] || 0));
    });
    
    const wouldUse = usedPoints + change;
    if (wouldUse > maxPoints) {
        alert('Pontos insuficientes!');
        return;
    }
    
    // Apply change
    skills[skillName] = newValue;
    updateSkillsDisplay();
    updatePromptPreview();
}

// Get skill description
function getSkillDescription(skillName) {
    const descriptions = {
        "Armas de Fogo (Pistolas)": "Uso de pistolas e revólveres",
        "Armas de Fogo (Rifles)": "Uso de rifles e espingardas",
        "Lutar (Briga)": "Combate desarmado e luta corporal",
        "Esquivar": "Evitar ataques e perigos físicos",
        "Encontrar": "Localizar objetos ocultos ou pistas",
        "Escutar": "Perceber sons e conversas",
        "Medicina": "Tratar ferimentos e doenças",
        "Mecânica": "Reparar e operar máquinas",
        "Ocultismo": "Conhecimento de magia e mistérios",
        "Psicologia": "Compreender comportamento humano",
        "Sobrevivência": "Sobreviver em ambientes hostis",
        "Furtividade": "Mover-se sem ser detectado",
        "Biblioteca": "Pesquisar informações em livros",
        "Navegação": "Orientar-se e encontrar caminhos",
        "Barganha": "Negociar preços e acordos",
        "Persuasão": "Convencer outras pessoas",
        "Intimidação": "Ameaçar e coagir",
        "Avaliar": "Determinar valor de objetos",
        "Primeiros Socorros": "Tratamento médico básico",
        "Dirigir": "Operar veículos terrestres",
        "Conhecimento Radioativo": "Entender radiação e seus efeitos",
        "Tecnologia Antiga": "Conhecimento sobre tech pré-guerra",
        "Mutações": "Identificar e lidar com mutantes",
        "Armadilhas": "Criar e desarmar armadilhas"
    };
    
    return descriptions[skillName] || "Perícia especializada";
}

// Quick skill allocation
function quickAllocateSkills(preset) {
    if (!characterData.occupation || characterData.occupation === 'custom') {
        alert('Selecione uma ocupação primeiro.');
        return;
    }
    
    const occ = occupations[characterData.occupation];
    if (!occ) return;
    
    const eduPoints = characterData.attributes.edu * 4;
    
    // Clear current allocations
    characterData.occupationalSkills = {};
    
    // Initialize with base values
    occ.skills.forEach(skill => {
        characterData.occupationalSkills[skill] = baseSkillValues[skill] || 0;
    });
    
    switch(preset) {
        case 'balanced':
            allocateBalanced(occ.skills, eduPoints);
            break;
        case 'specialized':
            allocateSpecialized(occ.skills, eduPoints);
            break;
        case 'minimum':
            allocateMinimum(occ.skills, eduPoints);
            break;
    }
    
    updateSkillsDisplay();
    updatePromptPreview();
}

// Balanced allocation
function allocateBalanced(skills, totalPoints) {
    const pointsPerSkill = Math.floor(totalPoints / skills.length);
    const remainder = totalPoints % skills.length;
    
    skills.forEach((skill, index) => {
        const baseValue = baseSkillValues[skill] || 0;
        const extraPoints = pointsPerSkill + (index < remainder ? 1 : 0);
        characterData.occupationalSkills[skill] = Math.min(90, baseValue + extraPoints);
    });
}

// Specialized allocation (focus on fewer skills)
function allocateSpecialized(skills, totalPoints) {
    const primarySkills = skills.slice(0, Math.ceil(skills.length / 2));
    const secondarySkills = skills.slice(primarySkills.length);
    
    const primaryPoints = Math.floor(totalPoints * 0.7);
    const secondaryPoints = totalPoints - primaryPoints;
    
    // Allocate to primary skills
    const primaryPerSkill = Math.floor(primaryPoints / primarySkills.length);
    primarySkills.forEach(skill => {
        const baseValue = baseSkillValues[skill] || 0;
        characterData.occupationalSkills[skill] = Math.min(90, baseValue + primaryPerSkill);
    });
    
    // Allocate to secondary skills
    const secondaryPerSkill = Math.floor(secondaryPoints / secondarySkills.length);
    secondarySkills.forEach(skill => {
        const baseValue = baseSkillValues[skill] || 0;
        characterData.occupationalSkills[skill] = Math.min(90, baseValue + secondaryPerSkill);
    });
}

// Minimum allocation (just enough to be competent)
function allocateMinimum(skills, totalPoints) {
    const minIncrease = 20; // Minimum increase above base
    let remainingPoints = totalPoints;
    
    skills.forEach(skill => {
        const baseValue = baseSkillValues[skill] || 0;
        const increase = Math.min(minIncrease, remainingPoints);
        characterData.occupationalSkills[skill] = baseValue + increase;
        remainingPoints -= increase;
    });
    
    // Distribute remaining points
    let skillIndex = 0;
    while (remainingPoints > 0 && skillIndex < skills.length) {
        const skill = skills[skillIndex];
        const currentValue = characterData.occupationalSkills[skill];
        if (currentValue < 90) {
            const increase = Math.min(5, remainingPoints, 90 - currentValue);
            characterData.occupationalSkills[skill] += increase;
            remainingPoints -= increase;
        }
        skillIndex = (skillIndex + 1) % skills.length;
    }
}

// Auto-allocate personal skills
function autoAllocatePersonalSkills() {
    const intPoints = characterData.attributes.int * 2;
    let remainingPoints = intPoints;
    
    // Clear current personal skills
    characterData.personalSkills = {};
    
    // Priority skills for investigators
    const prioritySkills = [
        "Biblioteca", "Encontrar", "Escutar", "Psicologia", 
        "Primeiros Socorros", "Esquivar", "Persuasão"
    ];
    
    // Allocate to priority skills first
    prioritySkills.forEach(skill => {
        if (remainingPoints >= 20) {
            const baseValue = baseSkillValues[skill] || 0;
            const currentOcc = characterData.occupationalSkills[skill] || baseValue;
            
            // Only add if not already high from occupation
            if (currentOcc < 50) {
                const increase = Math.min(20, remainingPoints);
                characterData.personalSkills[skill] = baseValue + increase;
                remainingPoints -= increase;
            }
        }
    });
    
    // Distribute remaining points randomly
    const remainingSkills = allSkills.filter(skill => 
        !prioritySkills.includes(skill) && 
        !characterData.personalSkills[skill]
    );
    
    while (remainingPoints >= 10 && remainingSkills.length > 0) {
        const randomSkill = remainingSkills[Math.floor(Math.random() * remainingSkills.length)];
        const baseValue = baseSkillValues[randomSkill] || 0;
        const increase = Math.min(15, remainingPoints);
        characterData.personalSkills[randomSkill] = baseValue + increase;
        remainingPoints -= increase;
        
        // Remove from available skills
        const index = remainingSkills.indexOf(randomSkill);
        remainingSkills.splice(index, 1);
    }
    
    updateSkillsDisplay();
    updatePromptPreview();
}

// Get all character skills (combined occupational and personal)
function getAllCharacterSkills() {
    const allPlayerSkills = {};
    
    // Update dynamic base values
    baseSkillValues["Esquivar"] = Math.floor(characterData.attributes.dex / 2);
    baseSkillValues["Idioma (Nativo)"] = characterData.attributes.edu;
    
    // Combine occupational and personal skills
    Object.keys(characterData.occupationalSkills).forEach(skill => {
        const value = characterData.occupationalSkills[skill];
        if (value > (baseSkillValues[skill] || 0)) {
            allPlayerSkills[skill] = value;
        }
    });
    
    Object.keys(characterData.personalSkills).forEach(skill => {
        const value = characterData.personalSkills[skill];
        if (value > (baseSkillValues[skill] || 0)) {
            if (allPlayerSkills[skill]) {
                allPlayerSkills[skill] = Math.max(allPlayerSkills[skill], value);
            } else {
                allPlayerSkills[skill] = value;
            }
        }
    });
    
    // Add notable base skills
    const notableBaseSkills = ["Esquivar", "Idioma (Nativo)", "Primeiros Socorros", "Encontrar", "Escutar"];
    notableBaseSkills.forEach(skill => {
        if (!allPlayerSkills[skill] && (baseSkillValues[skill] || 0) >= 20) {
            allPlayerSkills[skill] = baseSkillValues[skill];
        }
    });
    
    return allPlayerSkills;
}

// Calculate skill efficiency
function calculateSkillEfficiency() {
    const occupationalUsed = Object.keys(characterData.occupationalSkills).reduce((sum, skill) => {
        const value = characterData.occupationalSkills[skill];
        const base = baseSkillValues[skill] || 0;
        return sum + Math.max(0, value - base);
    }, 0);
    
    const personalUsed = Object.keys(characterData.personalSkills).reduce((sum, skill) => {
        const value = characterData.personalSkills[skill];
        const base = baseSkillValues[skill] || 0;
        return sum + Math.max(0, value - base);
    }, 0);
    
    const maxOccupational = characterData.attributes.edu * 4;
    const maxPersonal = characterData.attributes.int * 2;
    
    return {
        occupational: {
            used: occupationalUsed,
            available: maxOccupational,
            percentage: Math.round((occupationalUsed / maxOccupational) * 100)
        },
        personal: {
            used: personalUsed,
            available: maxPersonal,
            percentage: Math.round((personalUsed / maxPersonal) * 100)
        }
    };
}

// Show skill summary
function showSkillSummary() {
    const allSkills = getAllCharacterSkills();
    const efficiency = calculateSkillEfficiency();
    
    let summary = '📊 Resumo de Perícias:\n\n';
    
    // High skills (60+)
    const highSkills = Object.entries(allSkills).filter(([_, value]) => value >= 60);
    if (highSkills.length > 0) {
        summary += '🌟 Perícias Altas (60%+):\n';
        highSkills.forEach(([skill, value]) => {
            summary += `  ${skill}: ${value}%\n`;
        });
        summary += '\n';
    }
    
    // Medium skills (40-59)
    const mediumSkills = Object.entries(allSkills).filter(([_, value]) => value >= 40 && value < 60);
    if (mediumSkills.length > 0) {
        summary += '⭐ Perícias Médias (40-59%):\n';
        mediumSkills.forEach(([skill, value]) => {
            summary += `  ${skill}: ${value}%\n`;
        });
        summary += '\n';
    }
    
    // Efficiency
    summary += '📈 Eficiência:\n';
    summary += `Ocupacionais: ${efficiency.occupational.used}/${efficiency.occupational.available} (${efficiency.occupational.percentage}%)\n`;
    summary += `Pessoais: ${efficiency.personal.used}/${efficiency.personal.available} (${efficiency.personal.percentage}%)\n`;
    
    alert(summary);
}

// Reset skills
function resetSkills(type) {
    const message = type === 'occupational' ? 
        'Resetar todas as perícias ocupacionais?' : 
        'Resetar todas as perícias pessoais?';
    
    if (confirm(message)) {
        if (type === 'occupational') {
            characterData.occupationalSkills = {};
            // Reinitialize with base values
            if (characterData.occupation && occupations[characterData.occupation]) {
                const occ = occupations[characterData.occupation];
                occ.skills.forEach(skill => {
                    characterData.occupationalSkills[skill] = baseSkillValues[skill] || 0;
                });
            }
        } else {
            characterData.personalSkills = {};
        }
        
        updateSkillsDisplay();
        updatePromptPreview();
    }
}

// Export skills data
function exportSkillsData() {
    const allSkills = getAllCharacterSkills();
    const efficiency = calculateSkillEfficiency();
    
    const skillsData = {
        character: characterData.name || "Investigador",
        occupation: getOccupationDisplayName(),
        occupationalSkills: characterData.occupationalSkills,
        personalSkills: characterData.personalSkills,
        combinedSkills: allSkills,
        efficiency: efficiency,
        exportDate: new Date().toLocaleString('pt-BR')
    };
    
    const dataStr = JSON.stringify(skillsData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const filename = `skills_${(characterData.name || 'character').replace(/\s+/g, '_')}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', filename);
    linkElement.click();
}