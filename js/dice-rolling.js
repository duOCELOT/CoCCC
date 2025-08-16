// Dice rolling functions for attribute generation

// Basic dice rolling function
function rollDice(num, sides) {
    let total = 0;
    let rolls = [];
    for (let i = 0; i < num; i++) {
        const roll = Math.floor(Math.random() * sides) + 1;
        rolls.push(roll);
        total += roll;
    }
    return { total, rolls };
}

// Roll all attributes using standard method (3d6 × 5)
function rollAllAttributes() {
    const results = [];
    const attrs = ['str', 'con', 'siz', 'dex', 'app', 'int', 'pow', 'edu'];
    const names = ['Força', 'Constituição', 'Tamanho', 'Destreza', 'Aparência', 'Inteligência', 'Poder', 'Educação'];
    const newValues = [];
    
    attrs.forEach((attr, index) => {
        const roll = rollDice(3, 6);
        const value = roll.total * 5;
        
        characterData.attributes[attr] = value;
        newValues.push(value);
        document.getElementById(`${attr}-value`).textContent = value;
        
        results.push(`<strong>${names[index]}:</strong> ${roll.rolls.join('+')} = ${roll.total} × 5 = ${value}`);
    });
    
    // Store roll history
    characterData.rollHistory.push({
        method: 'standard',
        timestamp: new Date(),
        results: newValues
    });
    
    document.getElementById('diceResults').innerHTML = `
        <div class="dice-result">
            <h4>🎲 Resultados dos Dados:</h4>
            ${results.join('<br>')}
            <hr style="margin: 10px 0; opacity: 0.3;">
            <p><strong>Total:</strong> ${Object.values(characterData.attributes).reduce((a, b) => a + b, 0)} pontos</p>
        </div>
    `;
    
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    updatePromptPreview();
}

// Roll heroic attributes (5×3d6 + 3×2d6+6)
function rollHeroicAttributes() {
    characterData.heroicRolls = [];
    const results = [];
    
    // 5 rolls of 3d6
    for (let i = 0; i < 5; i++) {
        const roll = rollDice(3, 6);
        const value = roll.total * 5;
        characterData.heroicRolls.push(value);
        results.push(`3d6: ${roll.rolls.join('+')} = ${roll.total} × 5 = <strong>${value}</strong>`);
    }
    
    // 3 rolls of 2d6+6
    for (let i = 0; i < 3; i++) {
        const roll = rollDice(2, 6);
        const total = roll.total + 6;
        const value = total * 5;
        characterData.heroicRolls.push(value);
        results.push(`2d6+6: ${roll.rolls.join('+')}+6 = ${total} × 5 = <strong>${value}</strong>`);
    }
    
    // Sort values highest to lowest
    characterData.heroicRolls.sort((a, b) => b - a);
    
    // Store in roll history
    characterData.rollHistory.push({
        method: 'heroic',
        timestamp: new Date(),
        results: [...characterData.heroicRolls]
    });
    
    document.getElementById('heroicResults').innerHTML = `
        <div class="dice-result">
            <h4>🎲 Valores Rolados:</h4>
            ${results.join('<br>')}
            <hr style="margin: 10px 0; opacity: 0.3;">
            <p><strong>Valores disponíveis:</strong> ${characterData.heroicRolls.join(', ')}</p>
            <p style="color: #ff9800;">⚠️ Agora distribua estes valores manualmente nos atributos usando os botões + e -</p>
            <button class="btn" onclick="distributeHeroicValues()" style="margin-top: 10px;">🎯 Distribuir Automaticamente</button>
        </div>
    `;
    
    // Enable manual editing
    disableAttributeButtons(false);
    updatePromptPreview();
}

// Automatically distribute heroic values
function distributeHeroicValues() {
    if (characterData.heroicRolls.length !== 8) {
        alert('Erro: Não há valores heroicos disponíveis para distribuir.');
        return;
    }
    
    const attrs = ['str', 'con', 'siz', 'dex', 'app', 'int', 'pow', 'edu'];
    
    // Ask user for distribution preference
    const preference = prompt(`Como deseja distribuir os valores?
    
1 - Automático (valores altos para INT/POD)
2 - Balanceado 
3 - Combate (valores altos para físicos)
4 - Manual (manter como está)

Digite 1, 2, 3 ou 4:`);
    
    let distribution;
    switch(preference) {
        case '1': // Investigator focus
            distribution = assignValuesToAttributes(['int', 'pow', 'edu', 'dex', 'con', 'app', 'str', 'siz']);
            break;
        case '2': // Balanced
            distribution = assignValuesToAttributes(['int', 'dex', 'pow', 'con', 'edu', 'str', 'app', 'siz']);
            break;
        case '3': // Combat focus
            distribution = assignValuesToAttributes(['str', 'con', 'dex', 'siz', 'int', 'pow', 'app', 'edu']);
            break;
        case '4': // Manual
        default:
            return;
    }
    
    // Apply distribution
    attrs.forEach((attr, index) => {
        characterData.attributes[attr] = distribution[index];
        document.getElementById(`${attr}-value`).textContent = distribution[index];
    });
    
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    updatePromptPreview();
}

// Helper function to assign values to attributes based on priority
function assignValuesToAttributes(priorityOrder) {
    const sortedValues = [...characterData.heroicRolls].sort((a, b) => b - a);
    const distribution = [50, 50, 50, 50, 50, 50, 50, 50]; // default values
    
    priorityOrder.forEach((attr, index) => {
        const attrIndex = ['str', 'con', 'siz', 'dex', 'app', 'int', 'pow', 'edu'].indexOf(attr);
        if (attrIndex !== -1 && index < sortedValues.length) {
            distribution[attrIndex] = sortedValues[index];
        }
    });
    
    return distribution;
}

// Roll single attribute
function rollSingleAttribute(attr) {
    const roll = rollDice(3, 6);
    const value = roll.total * 5;
    
    characterData.attributes[attr] = value;
    document.getElementById(`${attr}-value`).textContent = value;
    
    // Show roll result
    const attrNames = {
        str: 'Força', con: 'Constituição', siz: 'Tamanho', dex: 'Destreza',
        app: 'Aparência', int: 'Inteligência', pow: 'Poder', edu: 'Educação'
    };
    
    alert(`${attrNames[attr]}: ${roll.rolls.join('+')} = ${roll.total} × 5 = ${value}`);
    
    updatePointsDisplay();
    updateDerivedStats();
    updateHalfValues();
    updatePromptPreview();
}

// Quick roll for all attributes with confirmation
function quickRollAttributes() {
    if (confirm('🎲 Isso irá gerar novos valores aleatórios para TODOS os atributos.\n\nDeseja continuar?')) {
        rollAllAttributes();
    }
}

// Re-roll specific attribute
function rerollAttribute(attr) {
    if (characterData.generationMethod !== 'roll' && characterData.generationMethod !== 'roll2') {
        alert('Re-rolagem só é permitida nos métodos de dados.');
        return;
    }
    
    if (confirm('🎲 Deseja rolar novamente este atributo?')) {
        rollSingleAttribute(attr);
    }
}

// Statistics for rolled values
function calculateRollStatistics() {
    if (characterData.rollHistory.length === 0) {
        return null;
    }
    
    const allRolls = characterData.rollHistory.flatMap(entry => entry.results);
    const sum = allRolls.reduce((a, b) => a + b, 0);
    const average = sum / allRolls.length;
    const min = Math.min(...allRolls);
    const max = Math.max(...allRolls);
    
    return {
        totalRolls: allRolls.length,
        average: Math.round(average),
        min,
        max,
        sum
    };
}

// Show roll history
function showRollHistory() {
    if (characterData.rollHistory.length === 0) {
        alert('Nenhum histórico de rolagens encontrado.');
        return;
    }
    
    const stats = calculateRollStatistics();
    let historyText = '📊 Histórico de Rolagens:\n\n';
    
    characterData.rollHistory.forEach((entry, index) => {
        historyText += `${index + 1}. ${entry.method.toUpperCase()} - ${entry.timestamp.toLocaleTimeString()}\n`;
        historyText += `   Valores: ${entry.results.join(', ')}\n`;
        historyText += `   Total: ${entry.results.reduce((a, b) => a + b, 0)}\n\n`;
    });
    
    if (stats) {
        historyText += `📈 Estatísticas:\n`;
        historyText += `Total de rolagens: ${stats.totalRolls}\n`;
        historyText += `Média: ${stats.average}\n`;
        historyText += `Menor valor: ${stats.min}\n`;
        historyText += `Maior valor: ${stats.max}\n`;
    }
    
    alert(historyText);
}

// Clear roll history
function clearRollHistory() {
    if (confirm('Deseja limpar todo o histórico de rolagens?')) {
        characterData.rollHistory = [];
        characterData.heroicRolls = [];
        alert('Histórico limpo.');
    }
}