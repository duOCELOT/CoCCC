/**
 * ROLAI - NAVEGAÇÃO SIMPLIFICADA
 * Sistema básico de navegação para o projeto
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Rolai Navigation carregado');
    
    // Configura navegação dos cards
    setupNavigation();
    
    // Configura indicador de scroll
    setupScrollIndicator();
    
    // Configura efeitos visuais
    setupVisualEffects();
});

/**
 * Configura navegação principal
 */
function setupNavigation() {
    const navCards = document.querySelectorAll('[data-target]');
    
    navCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.dataset.target;
            
            // Adiciona efeito de clique
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.2s ease';
            
            // Navega após animação
            setTimeout(() => {
                window.location.href = target;
            }, 200);
        });
        
        // Efeitos hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
}

/**
 * Configura indicador de scroll
 */
function setupScrollIndicator() {
    // Cria elemento do indicador
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: #8B4513;
        transition: width 0.3s ease;
        z-index: 1000;
        width: 0%;
    `;
    document.body.appendChild(scrollIndicator);
    
    // Atualiza indicador no scroll
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = Math.min(scrolled, 100) + '%';
    });
}

/**
 * Configura efeitos visuais
 */
function setupVisualEffects() {
    // Animação suave para elementos que entram na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa seções principais
    const sections = document.querySelectorAll('.world-card, .step, .nav-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Animação dos símbolos de radiação
    const radiationSymbols = document.querySelectorAll('.radiation-symbol');
    radiationSymbols.forEach(symbol => {
        symbol.style.animation = 'pulse 2s infinite';
    });
}

/**
 * Função para links dos quick steps
 */
function navigateToPage(page) {
    window.location.href = page;
}

// CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    .nav-card {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .step-link {
        transition: all 0.3s ease;
    }
    
    .step-link:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(139, 69, 19, 0.3);
    }
`;
document.head.appendChild(style);

console.log('✅ Sistema de navegação Rolai ativo');