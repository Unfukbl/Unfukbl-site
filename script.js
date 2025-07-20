// UNFUKBL - Interactive JavaScript for the Legendary Meme Coin Experience

console.log('🔥 UNFUKBL Protocol loaded successfully! Anti-rug protection active.');

// Performance tracking
const startTime = performance.now();

// Global state management
let gameState = {
    rugsBurned: 1337,
    trustSaved: 42000000,
    sizzlePower: 9001,
    legendaryStage: 1,
    currentVibe: 0,
    scanCount: 0,
    wisdomCount: 0
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Performance log
    const loadTime = performance.now() - startTime;
    console.log(`🚀 UNFUKBL loaded in ${loadTime}ms - Optimized for mobile-first experience!`);
    
    // ASCII Art Banner
    console.log(`
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
🔥                                                          🔥
🔥    ██    ██ ███    ██ ███████ ██    ██ ██   ██ ██████    🔥
🔥    ██    ██ ████   ██ ██      ██    ██ ██  ██  ██   ██   🔥
🔥    ██    ██ ██ ██  ██ █████   ██    ██ █████   ██████    🔥
🔥    ██    ██ ██  ██ ██ ██      ██    ██ ██  ██  ██   ██   🔥
🔥     ██████  ██   ████ ██       ██████  ██   ██ ██████    🔥
🔥                                                          🔥
🔥          INTERACTIVE LORE PORTAL ACTIVATED               🔥
🔥               We Burn Rugs — Not Trust                   🔥
🔥                                                          🔥
🔥  🐋 Whale Sacrifice Meter: ONLINE                        🔥
🔥  📡 Rug Sensor: SCANNING SOLANA...                      🔥
🔥  🔥 Live Burn Tracker: ACTIVE                           🔥
🔥  ✨ Hidden Portals: DISCOVERED                          🔥
🔥  🎵 Flame Whisper Audio: READY                          🔥
🔥                                                          🔥
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    `);
    
    initializeAllSystems();
});

// ========= SYSTEM INITIALIZATION =========
function initializeAllSystems() {
    initializeMemeStatusBar();
    initializeLegendaryButton();
    initializeRugSensor();
    initializeThemeToggle();
    initializeMobileNavigation();
    initializeInteractiveBurning();
    
    console.log('🔥 UNFUKBL Lore Portal activated! Welcome to the revolution.');
}

// ========= MOBILE NAVIGATION SYSTEM =========
function initializeMobileNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });
    }
    
    console.log('📱 Improved mobile navigation initialized!');
}

// ========= MEME STATUS BAR SYSTEM =========
function initializeMemeStatusBar() {
    const vibes = [
        'Absolutely Unruggable', 'Diamond Hands Forever', 'Moon Mission Active',
        'Sizzle Mode Engaged', 'Legendary Status', 'Flame Power Maximum',
        'Trust Level: INFINITE', 'Rug Immunity: 100%', 'Whale Approved'
    ];
    
    setInterval(() => {
        const vibeElement = document.getElementById('current-vibe');
        if (vibeElement) {
            gameState.currentVibe = (gameState.currentVibe + 1) % vibes.length;
            vibeElement.textContent = vibes[gameState.currentVibe];
        }
    }, 3000);
    
    console.log('🎮 Meme status bar initialized - Maximum chaos mode!');
}

// ========= LEGENDARY BUTTON PROGRESSION SYSTEM =========
function initializeLegendaryButton() {
    console.log('🔥 Legendary button system activated!');
}

function advanceLegendaryStatus() {
    const button = document.getElementById('legendary-button');
    const progressFill = document.getElementById('progress-fill');
    const legendaryStatus = document.getElementById('legendary-status');
    
    if (!button || !progressFill || !legendaryStatus) return;
    
    gameState.legendaryStage = Math.min(gameState.legendaryStage + 1, 5);
    
    const stages = [
        { text: 'Begin Your Journey', status: 'Novice Flame Keeper', class: 'stage-1', progress: 0 },
        { text: 'Embrace the Flame', status: 'Apprentice Burner', class: 'stage-2', progress: 20 },
        { text: 'Master the Burn', status: 'Rug Destroyer', class: 'stage-3', progress: 40 },
        { text: 'Legendary Power', status: 'Diamond Hand Warrior', class: 'stage-4', progress: 60 },
        { text: 'Transcend Reality', status: 'Ultimate Fire Lord', class: 'stage-5', progress: 80 },
        { text: 'ASCENDED BEING', status: '🔥 SIZZLE INCARNATE 🔥', class: 'stage-5', progress: 100 }
    ];
    
    const stage = stages[gameState.legendaryStage];
    
    // Update button
    button.className = `legendary-btn ${stage.class}`;
    button.querySelector('.btn-text').textContent = stage.text;
    button.querySelector('.btn-stage').textContent = `Stage ${gameState.legendaryStage}/5`;
    
    // Update progress bar
    progressFill.style.width = stage.progress + '%';
    
    // Update status
    legendaryStatus.textContent = stage.status;
    
    // Create celebration particles
    if (gameState.legendaryStage === 6) {
        createMassiveParticleExplosion();
        showFloatingMessage('🎉 LEGENDARY STATUS ACHIEVED! 🎉');
    } else {
        createCelebrationParticles();
    }
}