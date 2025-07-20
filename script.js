/**
 * UNFUKBL: Anti-Rug Burn Protocol - Interactive JavaScript
 * Mobile-first implementation with live burn tracker and smooth interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log(`
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
🔥                                                          🔥
🔥    ██    ██ ███    ██ ███████ ██    ██ ██   ██ ██████    🔥
🔥    ██    ██ ████   ██ ██      ██    ██ ██  ██  ██   ██   🔥
🔥    ██    ██ ██ ██  ██ █████   ██    ██ █████   ██████    🔥
🔥    ██    ██ ██  ██ ██ ██      ██    ██ ██  ██  ██   ██   🔥
🔥     ██████  ██   ████ ██       ██████  ██   ██ ██████    🔥
🔥                                                          🔥
🔥               ANTI-RUG BURN PROTOCOL                     🔥
🔥               We Burn Rugs — Not Trust                   🔥
🔥                                                          🔥
🔥  Live Burn Tracker: ACTIVE                             🔥
🔥  Phase Progress: Community Forge (35%)                  🔥
🔥  Hidden Features: Flame links activated                 🔥
🔥                                                          🔥
🔥  Built with fire and code 🔥 UNFUKBL 2025             🔥
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    `);

    // Initialize all interactive features
    initNavbarScroll();
    initLiveBurnTracker();
    initSmoothScroll();
    initHiddenFlameLinks();
    initLogoClick();
    initProgressBar();
    
    // Mobile-specific features
    if (window.innerWidth <= 768) {
        initMobileOptimizations();
    }
    
    console.log('🔥 UNFUKBL Protocol loaded successfully! Anti-rug protection active.');
});

/**
 * Navbar scroll effect
 * Adds scrolled class when user scrolls down
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Live Burn Tracker with incrementing numbers
 * Updates burn count, rugs prevented, and next vote countdown every second
 */
function initLiveBurnTracker() {
    const burnCountElement = document.getElementById('burnCount');
    const rugsPreventedElement = document.getElementById('rugsPrevented');
    const nextVoteElement = document.getElementById('nextVote');
    
    // Initial values
    let burnCount = 2847392;
    let rugsPrevented = 156;
    let nextVoteDays = 127;
    let seconds = 0;
    
    // Update function
    function updateBurnTracker() {
        seconds++;
        
        // Increment burn count every second (simulates real burns)
        burnCount += Math.floor(Math.random() * 3) + 1; // 1-3 tokens per second
        
        // Increment rugs prevented occasionally
        if (seconds % 60 === 0 && Math.random() > 0.7) {
            rugsPrevented += 1;
        }
        
        // Decrement vote countdown (very slowly for demo)
        if (seconds % 300 === 0) { // Every 5 minutes in demo = 1 day
            nextVoteDays = Math.max(0, nextVoteDays - 1);
        }
        
        // Update DOM elements with formatted numbers
        if (burnCountElement) {
            burnCountElement.textContent = formatNumber(burnCount);
        }
        
        if (rugsPreventedElement) {
            rugsPreventedElement.textContent = rugsPrevented.toString();
        }
        
        if (nextVoteElement) {
            nextVoteElement.textContent = nextVoteDays.toString();
        }
    }
    
    // Start the ticker - updates every second
    setInterval(updateBurnTracker, 1000);
    
    // Initial update
    updateBurnTracker();
}

/**
 * Format numbers with commas for better readability
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    // Handle smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbar = document.querySelector('.navbar');
                const offset = navbar ? navbar.offsetHeight + 20 : 80;
                
                const elementPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Hidden flame links with special effects
 */
function initHiddenFlameLinks() {
    const flameLinks = document.querySelectorAll('.hidden-flame-link');
    
    flameLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const secret = this.getAttribute('data-secret');
            
            if (secret === 'burn-mode') {
                activateBurnMode();
            } else if (secret === 'dark-phase') {
                activateDarkPhase();
            }
        });
        
        // Add random delay for flame animation
        link.style.animationDelay = `${index * 0.3}s`;
    });
}

/**
 * Special burn mode effect
 */
function activateBurnMode() {
    console.log('🔥 BURN MODE ACTIVATED! 🔥');
    
    // Add fire effects to the page
    const body = document.body;
    body.style.background = 'linear-gradient(45deg, #ff4500, #ff6b35, #ff4500)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'fireGradient 3s ease infinite';
    
    // Create temporary style for fire effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fireGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
    
    // Reset after 3 seconds
    setTimeout(() => {
        body.style.background = '#ffffff';
        body.style.animation = '';
        document.head.removeChild(style);
    }, 3000);
}

/**
 * Special dark phase effect
 */
function activateDarkPhase() {
    console.log('🌑 DARK PHASE PREVIEW ACTIVATED! 🌑');
    
    // Dark mode effect
    const body = document.body;
    body.style.background = 'linear-gradient(135deg, #000000, #333333)';
    body.style.color = 'white';
    
    // Make all sections dark temporarily
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.background = 'rgba(0, 0, 0, 0.8)';
        section.style.color = 'white';
    });
    
    // Reset after 5 seconds
    setTimeout(() => {
        body.style.background = '#ffffff';
        body.style.color = '#000000';
        sections.forEach(section => {
            section.style.background = '';
            section.style.color = '';
        });
    }, 5000);
}

/**
 * Logo click counter with special effects
 */
function initLogoClick() {
    const logo = document.querySelector('.sizzle-logo');
    let clickCount = 0;
    
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            
            // Add click effect
            this.style.transform = 'scale(1.2) rotate(15deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Special effect after 5 clicks
            if (clickCount === 5) {
                triggerEasterEgg();
                clickCount = 0; // Reset counter
            }
        });
    }
}

/**
 * Easter egg for logo clicks
 */
function triggerEasterEgg() {
    console.log('🎉 EASTER EGG ACTIVATED! Welcome to the UNFUKBLVERSE! 🎉');
    
    // Create floating flame emojis
    for (let i = 0; i < 10; i++) {
        createFloatingFlame();
    }
    
    // Play sound effect (if available)
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCSqPzfPAfC4HKX7M7+KMSA0YZK3v45ZKEAlLpOLnznAcBSV+1+/BfCYJJoPC5+Kqdjx2');
    audio.volume = 0.1;
    audio.play().catch(() => {
        // Ignore if audio fails to play
    });
}

/**
 * Create floating flame animation
 */
function createFloatingFlame() {
    const flame = document.createElement('div');
    flame.textContent = '🔥';
    flame.style.position = 'fixed';
    flame.style.fontSize = '2rem';
    flame.style.zIndex = '9999';
    flame.style.pointerEvents = 'none';
    flame.style.left = Math.random() * window.innerWidth + 'px';
    flame.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(flame);
    
    // Animate flame upward
    const animation = flame.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: 3000,
        easing: 'ease-out'
    });
    
    // Remove flame after animation
    animation.addEventListener('finish', () => {
        document.body.removeChild(flame);
    });
}

/**
 * Progress bar animation
 */
function initProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    
    if (progressFill) {
        // Animate progress bar on page load
        setTimeout(() => {
            progressFill.style.width = '35%';
        }, 1000);
        
        // Update progress based on scroll position (demo effect)
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            const adjustedProgress = Math.min(35 + (scrollPercent * 0.1), 60); // Cap at 60%
            progressFill.style.width = adjustedProgress + '%';
        });
    }
}

/**
 * Mobile-specific optimizations
 */
function initMobileOptimizations() {
    // Reduce animations on mobile for better performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Touch-friendly hover effects
    document.querySelectorAll('.btn, .social-link, .nav-btn').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Mobile menu functionality can be added here
            console.log('Mobile menu clicked');
        });
    }
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    document.querySelectorAll('.step-card, .leaderboard-row, .progress-step').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Keyboard shortcuts for power users
 */
document.addEventListener('keydown', function(e) {
    // Konami Code: ↑↑↓↓←→←→BA
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    if (!window.konamiIndex) window.konamiIndex = 0;
    
    if (e.code === konamiCode[window.konamiIndex]) {
        window.konamiIndex++;
        if (window.konamiIndex === konamiCode.length) {
            triggerKonamiCode();
            window.konamiIndex = 0;
        }
    } else {
        window.konamiIndex = 0;
    }
});

/**
 * Konami Code easter egg
 */
function triggerKonamiCode() {
    console.log('🎮 KONAMI CODE ACTIVATED! UNFUKBL ULTIMATE MODE! 🎮');
    
    // Ultimate mode effects
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Create multiple floating flames
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createFloatingFlame(), i * 100);
    }
    
    // Reset after 10 seconds
    setTimeout(() => {
        document.body.style.animation = '';
        document.head.removeChild(style);
    }, 10000);
}

/**
 * Performance monitoring
 */
if (window.performance) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`🚀 UNFUKBL loaded in ${loadTime}ms - Optimized for mobile-first experience!`);
        }, 0);
    });
}

/**
 * Error handling and fallbacks
 */
window.addEventListener('error', function(e) {
    console.warn('🔥 UNFUKBL Error caught and handled:', e.message);
    // Graceful degradation - continue without breaking
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatNumber,
        initLiveBurnTracker,
        triggerEasterEgg
    };
}
