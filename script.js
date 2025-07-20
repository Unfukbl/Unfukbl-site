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
// ========= RUG SENSOR SYSTEM =========
function initializeRugSensor() {
    // Start radar animation
    const radarBlips = document.querySelectorAll('.radar-blip');
    radarBlips.forEach((blip, index) => {
        blip.style.animation = `radarBlip 2s ease-in-out infinite`;
        blip.style.animationDelay = `${index * 0.7}s`;
    });
    
    console.log('📡 Dynamic rug sensor initialized!');
}

function performRugScan() {
    const sensorReading = document.getElementById('sensor-reading');
    const threatLevel = document.getElementById('threat-level');
    const scanBtn = document.querySelector('.scan-btn');
    
    if (!sensorReading || !threatLevel || !scanBtn) return;
    
    gameState.scanCount++;
    
    const scanMessages = [
        'Scanning Solana blockchain...',
        'Detecting liquidity pools...',
        'Analyzing smart contracts...',
        'Checking for rug signatures...',
        'Quantum entanglement scan...',
        'Sizzle protection verified...',
        'Multi-dimensional sweep...',
        'Trust verification complete...',
        'Diamond hand detection...',
        'Whale behavior analysis...',
        'Meme power calibration...',
        'UNFUKBL immunity confirmed...',
        'Legendary status verified...',
        'Flame barrier activated...',
        'All systems nominal...',
        'Rug-proof certification achieved!'
    ];
    
    // Disable button temporarily
    scanBtn.disabled = true;
    scanBtn.style.opacity = '0.6';
    
    // Show scanning animation
    let messageIndex = 0;
    const scanInterval = setInterval(() => {
        sensorReading.textContent = scanMessages[messageIndex % scanMessages.length];
        messageIndex++;
    }, 200);
    
    // Complete scan after 3 seconds
    setTimeout(() => {
        clearInterval(scanInterval);
        
        const finalMessage = scanMessages[Math.floor(Math.random() * scanMessages.length)];
        sensorReading.textContent = finalMessage;
        
        const threatLevels = [
            '🟢 ALL CLEAR - UNFUKBL ZONE',
            '🟢 SIZZLE PROTECTION ACTIVE',
            '🟢 RUG IMMUNITY: 100%',
            '🟢 DIAMOND HANDS DETECTED'
        ];
        
        threatLevel.textContent = threatLevels[Math.floor(Math.random() * threatLevels.length)];
        
        // Re-enable button
        scanBtn.disabled = false;
        scanBtn.style.opacity = '1';
        
        // Create scan particles
        createScanParticles();
        
    }, 3000);
}

function performQuantumScan() {
    const sensorStatus = document.getElementById('sensor-status');
    const sensorMessage = document.getElementById('sensor-message');
    const threatAssessment = document.getElementById('threat-level');
    
    if (!sensorStatus || !sensorMessage || !threatAssessment) return;
    
    const quantumMessages = [
        'Initializing quantum field generators...',
        'Scanning parallel dimensions for rugs...',
        'Detecting temporal rug anomalies...',
        'Quantum entanglement with Sizzle core...',
        'Multi-verse rug threat assessment...',
        'Probability wave collapse analysis...',
        'Quantum tunnel scan complete...',
        'Reality distortion field stable...'
    ];
    
    sensorStatus.textContent = '🔴 QUANTUM SCANNING';
    
    let msgIndex = 0;
    const quantumInterval = setInterval(() => {
        sensorMessage.textContent = quantumMessages[msgIndex % quantumMessages.length];
        msgIndex++;
    }, 400);
    
    setTimeout(() => {
        clearInterval(quantumInterval);
        sensorStatus.textContent = '🟢 QUANTUM SCAN COMPLETE';
        sensorMessage.textContent = 'Quantum dimensions verified - No rugs detected across all realities';
        threatAssessment.textContent = '⚡ QUANTUM SECURED';
        
        createQuantumParticles();
    }, 4000);
}

// ========= THEME TOGGLE SYSTEM =========
function initializeThemeToggle() {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('unfukbl-theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    console.log(`🌓 Theme toggle initialized - Current theme: ${savedTheme.toUpperCase()}`);
}

// ========= INTERACTIVE BURNING SYSTEM =========
function initializeInteractiveBurning() {
    console.log('🔥 Interactive burning rugs initialized!');
}

function burnRug() {
    const rug = document.getElementById('interactive-rug');
    const rugsBurnedElement = document.getElementById('rugs-burned');
    
    if (!rug || !rugsBurnedElement) return;
    
    // Create massive flame explosion
    createFlameExplosion();
    
    // Update counter
    gameState.rugsBurned += Math.floor(Math.random() * 10) + 1;
    rugsBurnedElement.textContent = gameState.rugsBurned.toLocaleString();
    
    // Animate rug burning
    rug.style.transform = 'scale(0) rotate(360deg)';
    rug.style.opacity = '0';
    
    // Reset rug after animation
    setTimeout(() => {
        rug.style.transform = 'scale(1) rotate(0deg)';
        rug.style.opacity = '1';
        rug.textContent = getRandomRug();
    }, 800);
    
    // Update Sizzle power
    const sizzlePower = document.getElementById('sizzle-power');
    if (sizzlePower) {
        gameState.sizzlePower += Math.floor(Math.random() * 500) + 100;
        sizzlePower.textContent = gameState.sizzlePower.toLocaleString();
    }
    
    // Update trust saved
    const trustSaved = document.getElementById('trust-saved');
    if (trustSaved) {
        gameState.trustSaved += Math.floor(Math.random() * 100000) + 10000;
        trustSaved.textContent = '$' + (gameState.trustSaved / 1000000).toFixed(1) + 'M';
    }
}

// ========= PORTAL ACTIVATION SYSTEMS =========
function ignitePortal(element) {
    createFlamePortalEffect(element);
    element.style.animation = 'flameFlicker 0.5s ease-in-out 3';
}

function launchPortal(element) {
    createRocketPortalEffect(element);
    element.style.animation = 'rocketLaunch 1s ease-out';
}

function stellarPortal(element) {
    createStarPortalEffect(element);
    element.style.animation = 'stellarTwinkle 1s ease-in-out 2';
}

function fashionPortal(element) {
    createFashionPortalEffect(element);
    element.style.animation = 'fashionSpin 0.8s ease-in-out';
}

// ========= HIDDEN MAGIC BUTTON FUNCTIONS =========
function unlockSecretFlame() {
    showFloatingMessage('🔥 SECRET FLAME UNLOCKED! 🔥');
    createMegaFlameEffect();
}

function unlockDiamondVault() {
    showFloatingMessage('💎 DIAMOND VAULT OPENED! 💎');
    createDiamondRainEffect();
}

function summonWhaleSpirit() {
    showFloatingMessage('🐋 WHALE SPIRIT SUMMONED! 🐋');
    createWhaleEffect();
}

function launchToMoon() {
    showFloatingMessage('🚀 MOON MISSION INITIATED! 🚀');
    createMoonLaunchEffect();
}

// ========= SIZZLE ORACLE WISDOM SYSTEM =========
function getSizzleWisdom() {
    const wisdomDisplay = document.getElementById('sizzle-wisdom');
    if (!wisdomDisplay) return;
    
    gameState.wisdomCount++;
    
    const wisdoms = [
        "The flame that burns brightest burns eternal. Trust in the UNFUKBL way.",
        "When rugs threaten, Sizzle protects. When fear approaches, diamond hands prevail.",
        "In the UNFUKBLverse, every holder is a guardian of trust.",
        "The sunglasses see all, the flame burns true, the protocol endures forever.",
        "Not all heroes wear capes. Some wear sunglasses and breathe fire.",
        "A rug pulled is a lesson learned. A rug burned is justice served.",
        "The path to legendary status is paved with diamond hands and flame hearts.",
        "When the market bleeds, UNFUKBL feeds. When others fall, we rise.",
        "Sizzle's wisdom: HODLing is not just about price—it's about principle.",
        "In the chaos of crypto, be the eye of the storm. Be UNFUKBL.",
        "The greatest rug pull protection is not smart contracts—it's smart community.",
        "Every flame tells a story. Every burn writes history.",
        "Trust is the rarest cryptocurrency. UNFUKBL is its blockchain.",
        "The sunglasses aren't just for style—they help me see through all the BS.",
        "When you're UNFUKBL, the only direction is up. And sometimes sideways. But never down."
    ];
    
    const wisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    wisdomDisplay.textContent = `"${wisdom}"`;
    
    // Add mystical effects
    createMysticalParticles();
    
    // Change crystal glow
    const crystal = document.querySelector('.oracle-crystal');
    if (crystal) {
        crystal.style.animation = 'crystalGlow 0.5s ease-in-out 3';
    }
}
// ========= PARTICLE EFFECT SYSTEMS =========
function createFlameExplosion() {
    createParticles(30, ['#ff4500', '#ff6600', '#ff8c00', '#ffd700'], 'flameRise');
}

function createCelebrationParticles() {
    createParticles(20, ['#ffd700', '#ff6600', '#ff4500'], 'splashEffect');
}

function createMassiveParticleExplosion() {
    createParticles(100, ['#ffd700', '#ffffff', '#ff6600', '#ff4500'], 'splashEffect');
}

function createScanParticles() {
    createParticles(15, ['#00ffff', '#00ff00', '#0080ff'], 'mysticalFloat');
}

function createQuantumParticles() {
    createParticles(25, ['#8a2be2', '#9932cc', '#4b0082'], 'mysticalFloat');
}

function createMysticalParticles() {
    createParticles(20, ['#8a2be2', '#dda0dd', '#9370db'], 'mysticalFloat');
}

function createFlamePortalEffect(element) {
    const rect = element.getBoundingClientRect();
    createParticlesAtPosition(15, ['#ff4500', '#ff6600'], 'flameRise', rect.left + rect.width/2, rect.top + rect.height/2);
}

function createRocketPortalEffect(element) {
    const rect = element.getBoundingClientRect();
    createParticlesAtPosition(10, ['#00ffff', '#ffffff'], 'rocketLaunch', rect.left + rect.width/2, rect.top + rect.height/2);
}

function createStarPortalEffect(element) {
    const rect = element.getBoundingClientRect();
    createParticlesAtPosition(20, ['#ffd700', '#ffffff'], 'stellarTwinkle', rect.left + rect.width/2, rect.top + rect.height/2);
}

function createFashionPortalEffect(element) {
    const rect = element.getBoundingClientRect();
    createParticlesAtPosition(12, ['#ff69b4', '#dda0dd'], 'fashionSpin', rect.left + rect.width/2, rect.top + rect.height/2);
}

function createMegaFlameEffect() {
    createParticles(50, ['#ff0000', '#ff4500', '#ff6600', '#ffd700'], 'flameRise');
}

function createDiamondRainEffect() {
    createParticles(40, ['#b9f2ff', '#e0ffff', '#f0f8ff'], 'diamondFall');
}

function createWhaleEffect() {
    createParticles(25, ['#4169e1', '#1e90ff', '#87ceeb'], 'whaleAscend');
}

function createMoonLaunchEffect() {
    createParticles(35, ['#ffd700', '#ffffff', '#ffff00'], 'rocketLaunch');
}

// ========= CORE PARTICLE ENGINE =========
function createParticles(count, colors, animation) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 8 + 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10000';
        particle.style.animation = `${animation} ${Math.random() * 3 + 2}s linear`;
        particle.style.animationFillMode = 'forwards';
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 5000);
    }
}

function createParticlesAtPosition(count, colors, animation, x, y) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 6 + 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = (x - 50 + Math.random() * 100) + 'px';
        particle.style.top = (y - 50 + Math.random() * 100) + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10000';
        particle.style.animation = `${animation} ${Math.random() * 2 + 1.5}s linear`;
        particle.style.animationFillMode = 'forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }
}

// ========= UTILITY FUNCTIONS =========
function getRandomRug() {
    const rugs = ['🪴', '🧽', '🪣', '🗑️', '📄', '💸', '🎭', '🃏', '🧻', '📋'];
    return rugs[Math.floor(Math.random() * rugs.length)];
}

function showFloatingMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.position = 'fixed';
    messageElement.style.top = '50%';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translate(-50%, -50%)';
    messageElement.style.background = 'rgba(0, 0, 0, 0.9)';
    messageElement.style.color = '#ffd700';
    messageElement.style.padding = '20px 40px';
    messageElement.style.borderRadius = '15px';
    messageElement.style.fontSize = '24px';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.zIndex = '10001';
    messageElement.style.pointerEvents = 'none';
    messageElement.style.animation = 'messagePopup 3s ease-out';
    messageElement.style.animationFillMode = 'forwards';
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
        }
    }, 3000);
}

// ========= SMOOTH SCROLLING =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========= SCROLL ANIMATIONS =========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});