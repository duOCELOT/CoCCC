/**
 * ROLAI - UTILITÁRIOS SIMPLIFICADOS
 * Funções básicas para o projeto
 */

// Objeto global para utilitários
window.RolaiUtils = {
    
    /**
     * Seleciona elemento com segurança
     */
    select: function(selector) {
        try {
            return document.querySelector(selector);
        } catch (e) {
            console.warn('Erro ao selecionar:', selector);
            return null;
        }
    },
    
    /**
     * Seleciona múltiplos elementos
     */
    selectAll: function(selector) {
        try {
            return Array.from(document.querySelectorAll(selector));
        } catch (e) {
            console.warn('Erro ao selecionar:', selector);
            return [];
        }
    },
    
    /**
     * Salva dados no localStorage
     */
    save: function(key, data) {
        try {
            localStorage.setItem('rolai_' + key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.warn('Erro ao salvar:', key);
            return false;
        }
    },
    
    /**
     * Carrega dados do localStorage
     */
    load: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem('rolai_' + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Erro ao carregar:', key);
            return defaultValue;
        }
    },
    
    /**
     * Formata número
     */
    formatNumber: function(number, decimals = 0) {
        if (typeof number !== 'number') return '-';
        return number.toLocaleString('pt-BR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },
    
    /**
     * Debounce para funções
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Anima elemento
     */
    animate: function(element, properties, duration = 300) {
        if (!element) return Promise.resolve();
        
        return new Promise((resolve) => {
            element.style.transition = `all ${duration}ms ease`;
            
            Object.entries(properties).forEach(([prop, value]) => {
                element.style[prop] = value;
            });
            
            setTimeout(() => {
                element.style.transition = '';
                resolve();
            }, duration);
        });
    },
    
    /**
     * Verifica se está na página principal
     */
    isMainPage: function() {
        return window.location.pathname.endsWith('index.html') || 
               window.location.pathname === '/' ||
               window.location.pathname.endsWith('/');
    },
    
    /**
     * Obtém nome da página atual
     */
    getCurrentPage: function() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '');
    }
};

// Funções globais convenientes
window.$ = function(selector) {
    return RolaiUtils.select(selector);
};

window.$$ = function(selector) {
    return RolaiUtils.selectAll(selector);
};

// Log de inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('🛠️ Rolai Utils carregadas');
    console.log('📄 Página atual:', RolaiUtils.getCurrentPage());
});

// Smooth scroll para links internos
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

console.log('✅ Rolai Utils inicializadas');