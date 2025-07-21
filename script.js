/*
 * UNFUKBL - LEGENDARY EXPERIMENTAL ART PORTAL
 * Professional JavaScript for manual deployment
 * Handles scroll-in animations and interactive features
 */

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 UNFUKBL Legendary Portal initializing...');
    
    // Initialize all systems
    initScrollRevealAnimations();
    initInteractiveElements();
    
    console.log('✨ All UNFUKBL legendary systems online! Welcome to the artistic revolution.');
});

// ===== SCROLL REVEAL ANIMATION SYSTEM =====
function initScrollRevealAnimations() {
    console.log('🎬 Initializing legendary scroll reveal animations...');
    
    const portals = document.querySelectorAll('.portal');
    
    // Create intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                console.log('🎨 Portal revealed:', entry.target.dataset.portal);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each portal with staggered delays
    portals.forEach((portal, index) => {
        // Add staggered animation delay for cascading effect
        portal.style.transitionDelay = `${index * 0.1}s`;
        
        // Start observing
        setTimeout(() => {
            observer.observe(portal);
            console.log(`👀 Watching ${portal.dataset.portal} portal for scroll reveal`);
        }, index * 100);
    });
    
    console.log('🌟 Legendary scroll reveal system activated!');
}

// ===== INTERACTIVE ELEMENTS =====
function initInteractiveElements() {
    console.log('🎮 Initializing interactive portal elements...');
    
    // Enhanced portal hover effects
    const portals = document.querySelectorAll('.portal');
    
    portals.forEach(portal => {
        // Add hover sound effect (optional - can be enabled with audio files)
        portal.addEventListener('mouseenter', function() {
            // Optional: Add hover sound effect
            // playHoverSound();
            
            // Enhanced visual feedback
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        portal.addEventListener('mouseleave', function() {
            // Reset transform if not visible yet
            if (!this.classList.contains('visible')) {
                this.style.transform = 'translateY(30px)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
        
        // Click interaction for future functionality
        portal.addEventListener('click', function() {
            const portalType = this.dataset.portal;
            console.log(`🔥 ${portalType.toUpperCase()} portal activated!`);
            
            // Future: Navigate to specific portal page
            // Example: window.location.href = `/${portalType}unfukbl`;
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Burn counter interaction
    const burnCounter = document.querySelector('.burn-counter');
    if (burnCounter) {
        burnCounter.addEventListener('click', function() {
            console.log('🔥 Burn counter clicked - Future: Show burn statistics');
            // Future: Show detailed burn statistics modal
        });
    }
    
    // Sizzle logo special interaction
    const sizzleLogo = document.querySelector('.sizzle-logo');
    if (sizzleLogo) {
        sizzleLogo.addEventListener('click', function() {
            console.log('💃 Sizzle dance activated!');
            // Enhanced dance animation on click
            this.style.animationDuration = '0.5s';
            setTimeout(() => {
                this.style.animationDuration = '3s';
            }, 2000);
        });
    }
    
    console.log('🎯 Interactive elements initialized!');
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounced scroll handler for performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(function() {
        // Future: Add scroll-based effects here
    }, 10);
});

// Preload critical images for better performance
function preloadImages() {
    const imageUrls = [
        'images/sizzle-official.png',
        'images/get.jpg',
        'images/burn.jpg', 
        'images/iwent.jpg',
        'images/wear.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading when DOM is ready
document.addEventListener('DOMContentLoaded', preloadImages);

// ===== UTILITY FUNCTIONS =====

// Smooth scroll utility for future navigation
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Future: Audio feedback system
function playHoverSound() {
    // Implementation for hover sound effects
    // const audio = new Audio('sounds/hover.mp3');
    // audio.volume = 0.3;
    // audio.play().catch(e => console.log('Audio play failed:', e));
}

// ===== RESPONSIVE UTILITIES =====

// Detect mobile devices for optimized interactions
function isMobile() {
    return window.innerWidth <= 768;
}

// Adjust animations based on device performance
function optimizeForDevice() {
    if (isMobile()) {
        // Reduce animation complexity on mobile
        document.body.classList.add('mobile-optimized');
    }
}

// Initialize device optimizations
document.addEventListener('DOMContentLoaded', optimizeForDevice);

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(optimizeForDevice, 250);
});

// ===== FUTURE EXTENSIBILITY =====

// Export functions for potential future modules
window.UNFUKBL = {
    scrollTo: smoothScrollTo,
    isMobile: isMobile,
    version: '1.0.0'
};

console.log('🚀 UNFUKBL Portal Core System Ready for Legendary Adventures!');