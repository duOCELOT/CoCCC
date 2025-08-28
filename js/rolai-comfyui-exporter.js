/**
 * Rolai to ComfyUI Character Data Exporter
 * Integrates with your existing main.js structure
 * Add this to your generator.html as a separate script
 */

// Collect all character data from your existing structure
function collectAllCharacterData() {
    // Use your existing global character data
    const data = window.RolaiCharacterCreator?.enhancedCharacterData || window.enhancedCharacterData || {};
    
    return {
        // Basic information
        name: data.name || '',
        age: data.age || '',
        gender: data.physicalCharacteristics?.gender || 'person',
        
        // Occupation data
        occupation: {
            type: data.occupation || '',
            name: getOccupationDisplayName(),
            custom: data.customOccupation || {}
        },
        
        // Background
        background: data.background || '',
        
        // Physical characteristics from your enhanced system
        physical: data.physicalCharacteristics || {},
        
        // Attributes
        attributes: data.attributes || {},
        
        // Skills
        skills: {
            occupational: data.occupationalSkills || {},
            personal: data.personalSkills || {},
            combined: getAllCharacterSkills()
        },
        
        // Equipment (basic from occupation)
        equipment: generateEquipmentFromOccupation(data.occupation),
        
        // Metadata
        metadata: {
            generationMethod: data.generationMethod || 'points',
            rollHistory: data.rollHistory || [],
            timestamp: new Date().toISOString()
        }
    };
}

// Generate equipment based on occupation
function generateEquipmentFromOccupation(occupation) {
    if (!occupation || !window.occupations || !window.occupations[occupation]) {
        return 'equipamento básico de sobrevivência';
    }
    
    const equipmentMap = {
        'scavenger': 'detector de metal, saco de sucata, ferramenta múltipla',
        'mechanic': 'conjunto de chaves, peças de reposição, ferramentas diagnósticas',
        'medic': 'kit médico, seringas, estetoscópio',
        'trader': 'balança, livro de registros, bens de amostra',
        'guard': 'rifle, rádio, cinto de munição',
        'scout': 'binóculos, mapa, faca de sobrevivência',
        'cultist': 'adaga cerimonial, textos sagrados',
        'mutant_hunter': 'armas especializadas, equipamento de detecção',
        'scholar': 'livros, notas de pesquisa, lupa'
    };
    
    return equipmentMap[occupation] || 'equipamento básico de sobrevivência';
}

// Get occupation display name using your existing function
function getOccupationDisplayName() {
    if (typeof window.getOccupationDisplayName === 'function') {
        return window.getOccupationDisplayName();
    }
    
    // Fallback implementation
    const data = window.RolaiCharacterCreator?.enhancedCharacterData || window.enhancedCharacterData || {};
    if (data.occupation === 'custom') {
        return data.customOccupation?.name || 'Sobrevivente';
    }
    
    if (window.occupations && window.occupations[data.occupation]) {
        return window.occupations[data.occupation].name;
    }
    
    return 'Sobrevivente';
}

// Get all character skills using your existing function
function getAllCharacterSkills() {
    if (typeof window.getAllCharacterSkills === 'function') {
        return window.getAllCharacterSkills();
    }
    
    // Fallback implementation
    const data = window.RolaiCharacterCreator?.enhancedCharacterData || window.enhancedCharacterData || {};
    return {
        ...data.occupationalSkills,
        ...data.personalSkills
    };
}

// Format data for ComfyUI Portuguese Bridge Node
function formatForComfyUI(characterData) {
    return {
        // Source identification
        source: 'rolai_generator_2053',
        generator_version: '2.0',
        timestamp: new Date().toISOString(),
        
        // Character data in the format expected by the bridge
        ...characterData
    };
}

// Show ComfyUI export modal
function showComfyUIExportModal(comfyUIData) {
    const jsonString = JSON.stringify(comfyUIData, null, 2);
    
    // Create modal HTML
    const modalHTML = `
        <div id="comfyui-export-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        ">
            <div style="
                background: #1a1a1a;
                color: #e0e0e0;
                padding: 20px;
                border-radius: 10px;
                max-width: 90%;
                max-height: 90%;
                overflow: auto;
                position: relative;
                border: 2px solid #4fc3a1;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="color: #4fc3a1; margin: 0;">🎭 Exportar para ComfyUI</h2>
                    <button onclick="closeComfyUIModal()" style="
                        background: #f44336;
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: bold;
                    ">×</button>
                </div>
                
                <div style="margin-bottom: 20px; padding: 15px; background: rgba(79, 195, 161, 0.1); border-radius: 5px;">
                    <h3 style="color: #4fc3a1; margin-top: 0;">📋 Instruções:</h3>
                    <ol style="line-height: 1.6;">
                        <li>Copie o JSON abaixo</li>
                        <li>No ComfyUI, adicione o node <strong>"🇧🇷 Portuguese Character Bridge"</strong></li>
                        <li>Cole o JSON no campo <strong>"portuguese_character_data"</strong></li>
                        <li>Conecte a saída <strong>"english_character_json"</strong> ao Character Constructor</li>
                        <li>Configure as opções de tradução conforme necessário</li>
                    </ol>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <button onclick="copyComfyUIJSON()" style="
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-right: 10px;
                        font-weight: bold;
                    ">📋 Copiar JSON</button>
                    
                    <button onclick="downloadComfyUIJSON()" style="
                        background: #2196F3;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: bold;
                    ">💾 Download JSON</button>
                </div>
                
                <div>
                    <label style="font-weight: bold; color: #4fc3a1;">JSON para ComfyUI:</label>
                    <textarea id="comfyui-json-output" style="
                        width: 100%;
                        height: 300px;
                        font-family: 'Courier New', monospace;
                        font-size: 12px;
                        border: 1px solid #666;
                        padding: 10px;
                        border-radius: 5px;
                        background: #2a2a2a;
                        color: #e0e0e0;
                        margin-top: 10px;
                    " readonly>${jsonString}</textarea>
                </div>
                
                <div style="margin-top: 15px; padding: 10px; background: rgba(33, 150, 243, 0.1); border-radius: 5px; font-size: 14px;">
                    <strong style="color: #2196F3;">💡 Dica:</strong> O node Portuguese Bridge traduzirá automaticamente:
                    <br>• Gênero, ocupação, características físicas
                    <br>• Cores de cabelo/olhos, tons de pele
                    <br>• Tipos corporais e expressões
                    <br>• Equipamentos baseados na ocupação
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Close ComfyUI export modal
function closeComfyUIModal() {
    const modal = document.getElementById('comfyui-export-modal');
    if (modal) {
        modal.remove();
    }
}

// Copy JSON to clipboard
function copyComfyUIJSON() {
    const textarea = document.getElementById('comfyui-json-output');
    if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = '✅ Copiado!';
            button.style.background = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#4CAF50';
            }, 2000);
        } catch (err) {
            alert('Erro ao copiar. Use Ctrl+C manualmente.');
        }
    }
}

// Download JSON as file
function downloadComfyUIJSON() {
    const textarea = document.getElementById('comfyui-json-output');
    if (textarea) {
        const data = textarea.value;
        const characterName = window.RolaiCharacterCreator?.enhancedCharacterData?.name || 
                             window.enhancedCharacterData?.name || 'character';
        const filename = `${characterName.replace(/\s+/g, '_').toLowerCase()}_comfyui.json`;
        
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Main export function
function exportToComfyUI() {
    try {
        // Make sure character data is current
        if (typeof updateCharacterData === 'function') {
            updateCharacterData();
        }
        
        const characterData = collectAllCharacterData();
        const comfyUIData = formatForComfyUI(characterData);
        
        // Show the export modal
        showComfyUIExportModal(comfyUIData);
        
    } catch (error) {
        console.error('Error exporting to ComfyUI:', error);
        alert('Erro ao exportar dados. Verifique o console para detalhes.');
    }
}

// Add export button to your existing interface
function addComfyUIExportButton() {
    // Try multiple locations to find the best place for the button
    const targetSelectors = [
        '.action-buttons',
        '#sheet .character-sheet',
        '.tab-content.active',
        '.container .header'
    ];
    
    let targetContainer = null;
    for (const selector of targetSelectors) {
        targetContainer = document.querySelector(selector);
        if (targetContainer) break;
    }
    
    if (targetContainer) {
        const exportButton = document.createElement('button');
        exportButton.className = 'btn';
        exportButton.innerHTML = '🎭 Exportar para ComfyUI';
        exportButton.onclick = exportToComfyUI;
        exportButton.style.cssText = `
            margin-left: 10px;
            background: linear-gradient(135deg, #4fc3a1, #3a9d80);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        `;
        
        exportButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(79, 195, 161, 0.4)';
        });
        
        exportButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        targetContainer.appendChild(exportButton);
        console.log('✅ ComfyUI export button added successfully');
    } else {
        console.warn('⚠️ Could not find suitable container for ComfyUI export button');
    }
}

// Add button when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait for your existing scripts to load first
    setTimeout(addComfyUIExportButton, 1500);
});

// Alternative function for direct integration
function getComfyUICharacterJSON() {
    const characterData = collectAllCharacterData();
    const comfyUIData = formatForComfyUI(characterData);
    return JSON.stringify(comfyUIData, null, 2);
}

// Integration with your existing export functionality
function updateCharacterDataForComfyUI() {
    // This can be called whenever character data changes
    // to keep ComfyUI export data fresh
    window.latestComfyUIData = collectAllCharacterData();
}

// Make functions globally available
window.exportToComfyUI = exportToComfyUI;
window.getComfyUICharacterJSON = getComfyUICharacterJSON;
window.updateCharacterDataForComfyUI = updateCharacterDataForComfyUI;

console.log('🎭 ComfyUI Integration loaded successfully!');

// Show export modal with ComfyUI data
function showComfyUIExportModal(comfyUIData) {
    const jsonString = JSON.stringify(comfyUIData, null, 2);
    
    // Create modal HTML
    const modalHTML = `
        <div id="comfyui-export-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        ">
            <div style="
                background: white;
                padding: 20px;
                border-radius: 10px;
                max-width: 80%;
                max-height: 80%;
                overflow: auto;
                position: relative;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2>🎭 Exportar para ComfyUI</h2>
                    <button onclick="closeComfyUIModal()" style="
                        background: #ff4444;
                        color: white;
                        border: none;
                        padding: 5px 10px;
                        border-radius: 5px;
                        cursor: pointer;
                    ">✕</button>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <h3>Instruções:</h3>
                    <ol>
                        <li>Copie o JSON abaixo</li>
                        <li>No ComfyUI, adicione o node "🇧🇷 Portuguese Character Bridge"</li>
                        <li>Cole o JSON no campo "portuguese_character_data"</li>
                        <li>Conecte a saída "english_character_json" ao seu Character Constructor</li>
                    </ol>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <button onclick="copyComfyUIJSON()" style="
                        background: #4CAF50;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-right: 10px;
                    ">📋 Copiar JSON</button>
                    
                    <button onclick="downloadComfyUIJSON()" style="
                        background: #2196F3;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    ">💾 Download JSON</button>
                </div>
                
                <div>
                    <label style="font-weight: bold;">JSON para ComfyUI:</label>
                    <textarea id="comfyui-json-output" style="
                        width: 100%;
                        height: 300px;
                        font-family: monospace;
                        font-size: 12px;
                        border: 1px solid #ccc;
                        padding: 10px;
                        border-radius: 5px;
                    " readonly>${jsonString}</textarea>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Close ComfyUI export modal
function closeComfyUIModal() {
    const modal = document.getElementById('comfyui-export-modal');
    if (modal) {
        modal.remove();
    }
}

// Copy JSON to clipboard
function copyComfyUIJSON() {
    const textarea = document.getElementById('comfyui-json-output');
    if (textarea) {
        textarea.select();
        document.execCommand('copy');
        
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Copiado!';
        button.style.background = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#4CAF50';
        }, 2000);
    }
}

// Download JSON as file
function downloadComfyUIJSON() {
    const textarea = document.getElementById('comfyui-json-output');
    if (textarea) {
        const data = textarea.value;
        const characterName = document.getElementById('characterName')?.value || 'character';
        const filename = `${characterName.replace(/\s+/g, '_').toLowerCase()}_comfyui.json`;
        
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Add export button to your existing interface
function addComfyUIExportButton() {
    // Find a good place to add the button (modify selector as needed)
    const targetContainer = document.querySelector('.action-buttons') || 
                           document.querySelector('.sheet-section') ||
                           document.querySelector('.container');
    
    if (targetContainer) {
        const exportButton = document.createElement('button');
        exportButton.className = 'btn';
        exportButton.innerHTML = '🎭 Exportar para ComfyUI';
        exportButton.onclick = exportToComfyUI;
        exportButton.style.marginLeft = '10px';
        
        targetContainer.appendChild(exportButton);
    }
}

// Auto-add export button when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure all your existing scripts have loaded
    setTimeout(addComfyUIExportButton, 1000);
});

// Alternative function for direct integration with your existing export functions
function getComfyUICharacterJSON() {
    const characterData = collectAllCharacterData();
    const comfyUIData = formatForComfyUI(characterData);
    return JSON.stringify(comfyUIData, null, 2);
}

// Integration with your existing character sheet functions
function updateCharacterDataForComfyUI() {
    // This can be called whenever character data changes
    // to keep ComfyUI export data fresh
    window.latestComfyUIData = collectAllCharacterData();
}