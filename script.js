// UNFUKBL - Interactive JavaScript for the Legendary Meme Coin Experience

console.log('🔥 UNFUKBL Protocol loaded successfully! Anti-rug protection active.');

// Performance timing
const startTime = performance.now();

// Mobile Navigation
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

// Interactive Rug Burning System
let rugsBurned = 1337;

function burnRug() {
    const rug = document.getElementById('interactive-rug');
    const rugsBurnedElement = document.getElementById('rugs-burned');
    
    if (!rug || !rugsBurnedElement) return;
    
    // Add burning animation
    rug.classList.add('burning');
    
    // Create flame particles
    createFlameParticles();
    
    // Update counter
    rugsBurned++;
    rugsBurnedElement.textContent = rugsBurned.toLocaleString();
    
    // Reset rug after animation
    setTimeout(() => {
        rug.classList.remove('burning');
        rug.textContent = getRandomRug();
    }, 500);
    
    // Update Sizzle power
    const sizzlePower = document.getElementById('sizzle-power');
    if (sizzlePower) {
        const currentPower = parseInt(sizzlePower.textContent.replace(/,/g, ''));
        sizzlePower.textContent = (currentPower + Math.floor(Math.random() * 100) + 1).toLocaleString();
    }
}

// Random rug generator
function getRandomRug() {
    const rugs = ['🪴', '🧽', '🪣', '🗑️', '📄', '💸', '🎭', '🃏'];
    return rugs[Math.floor(Math.random() * rugs.length)];
}

// Flame Particles System
function createFlameParticles() {
    const particlesContainer = document.getElementById('flame-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.backgroundColor = getRandomFlameColor();
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }
}

// Random flame color generator
function getRandomFlameColor() {
    const colors = ['#ff6600', '#ff8800', '#ffaa00', '#ff4400', '#ffd700'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Legendary Button Progression System
let legendaryLevel = 1;
let legendaryProgress = 0;
const maxLevel = 5;

const legendaryStages = [
    { text: "Begin Journey", level: "Level 1" },
    { text: "Rug Apprentice", level: "Level 2" },
    { text: "Flame Guardian", level: "Level 3" },
    { text: "Diamond Warrior", level: "Level 4" },
    { text: "Sizzle Legend", level: "Level 5" },
    { text: "Ascended Being", level: "MAX" }
];

function advanceLegendaryStatus() {
    const button = document.getElementById('legendary-button');
    const progressFill = document.getElementById('progress-fill');
    const statusElement = document.getElementById('legendary-status');
    
    if (!button || !progressFill) return;
    
    if (legendaryLevel < maxLevel) {
        legendaryProgress += 20;
        
        if (legendaryProgress >= 100) {
            legendaryLevel++;
            legendaryProgress = 0;
            
            // Update button text and stage
            const stage = legendaryStages[legendaryLevel - 1];
            const btnText = button.querySelector('.btn-text');
            const btnStage = button.querySelector('.btn-stage');
            
            if (btnText) btnText.textContent = stage.text;
            if (btnStage) btnStage.textContent = `Stage ${legendaryLevel}/5`;
            if (statusElement) statusElement.textContent = stage.text;
            
            // Create celebration effect
            createCelebrationEffect();
            
            // Update button class
            button.className = `legendary-btn stage-${legendaryLevel}`;
            
            // Special effect for max level
            if (legendaryLevel === maxLevel) {
                button.style.background = 'linear-gradient(45deg, #ffd700, #ff6600, #ff3333)';
                button.style.animation = 'legendaryPulse 2s infinite';
                progressFill.style.background = 'linear-gradient(90deg, #ffd700, #ff3333)';
            }
        }
        
        // Update progress bar
        progressFill.style.width = legendaryProgress + '%';
    } else if (legendaryLevel === maxLevel && legendaryProgress < 100) {
        // Final ascension
        legendaryProgress = 100;
        legendaryLevel++;
        
        const finalStage = legendaryStages[legendaryStages.length - 1];
        const btnText = button.querySelector('.btn-text');
        const btnStage = button.querySelector('.btn-stage');
        
        if (btnText) btnText.textContent = finalStage.text;
        if (btnStage) btnStage.textContent = finalStage.level;
        if (statusElement) statusElement.textContent = finalStage.text;
        
        progressFill.style.width = '100%';
        button.style.background = 'linear-gradient(45deg, #ffd700, #ffffff, #ffd700)';
        button.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
        
        createAscensionEffect();
    }
}

// Alternative function name for compatibility
function progressLegendary() {
    advanceLegendaryStatus();
}

// Celebration effect for level ups
function createCelebrationEffect() {
    const colors = ['#ffd700', '#ff6600', '#ff3333', '#00ff00'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        document.body.appendChild(particle);
        
        const angle = (i / 50) * 2 * Math.PI;
        const distance = 150 + Math.random() * 100;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        };
    }
}

// Final ascension effect
function createAscensionEffect() {
    // Screen flash
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100vw';
    flash.style.height = '100vh';
    flash.style.background = 'radial-gradient(circle, rgba(255,215,0,0.5), transparent)';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '10000';
    
    document.body.appendChild(flash);
    
    flash.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-in-out'
    }).onfinish = () => {
        document.body.removeChild(flash);
    };
    
    // Golden particles
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '20px';
            particle.style.background = 'linear-gradient(to bottom, #ffd700, transparent)';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '-20px';
            
            document.body.appendChild(particle);
            
            particle.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'linear'
            }).onfinish = () => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            };
        }, i * 50);
    }
}

// Dynamic Meme Status System
const vibes = [
    "Absolutely Unruggable", "Maximum Overdrive", "Peak Performance", 
    "Legendary Status", "God Mode Active", "Unstoppable Force",
    "Diamond Hand Energy", "Moonbound Trajectory", "Infinite Power"
];

const fireEmojis = ["🔥", "💥", "⚡", "✨", "🌟"];
const diamondEmojis = ["💎", "💍", "👑", "🏆", "⭐"];

function updateMemeStatus() {
    const vibeElement = document.getElementById('current-vibe');
    const fireElement = document.getElementById('fire-level');
    const diamondElement = document.getElementById('diamond-hands');
    
    if (vibeElement) {
        const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
        vibeElement.textContent = randomVibe;
    }
    
    if (fireElement) {
        const fireCount = Math.floor(Math.random() * 5) + 3;
        const fireEmoji = fireEmojis[Math.floor(Math.random() * fireEmojis.length)];
        fireElement.textContent = fireEmoji.repeat(fireCount);
    }
    
    if (diamondElement) {
        const diamondCount = Math.floor(Math.random() * 5) + 3;
        const diamondEmoji = diamondEmojis[Math.floor(Math.random() * diamondEmojis.length)];
        diamondElement.textContent = diamondEmoji.repeat(diamondCount);
    }
}

// Dynamic Rug Sensor
const sensorMessages = [
    "All systems nominal. No rugs detected in vicinity.",
    "Scanning blockchain for suspicious activity...",
    "Minor rug attempt detected and neutralized by Sizzle.",
    "Diamond hand energy at maximum levels.",
    "Trust levels: MAXIMUM. Rug probability: ZERO.",
    "Sizzle's flame burns brighter than ever.",
    "Anti-rug protocols fully operational.",
    "Community shield at 100% effectiveness.",
    "No paper hands detected in the area.",
    "Legendary status confirmed across all metrics.",
    "Rug pull immunity: ACTIVE and PERMANENT.",
    "Sizzle approves this transmission.",
    "All holders protected under the flame's watch.",
    "Trust preserved. Mission accomplished.",
    "The UNFUKBLverse remains secure.",
    "Scanning complete. You are safe to HODL."
];

function performRugScan() {
    updateRugSensor();
    // Add visual feedback
    const scanBtn = document.querySelector('.scan-btn');
    if (scanBtn) {
        scanBtn.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
        scanBtn.textContent = '🔄 SCANNING...';
        
        setTimeout(() => {
            scanBtn.style.background = '';
            scanBtn.innerHTML = '<i class="fas fa-radar-dish"></i> Deep Scan';
        }, 2000);
    }
}

function performQuantumScan() {
    updateRugSensor();
    // Enhanced quantum scan effect
    const quantumBtn = document.querySelector('.deep-scan-btn');
    if (quantumBtn) {
        quantumBtn.style.background = 'linear-gradient(45deg, #ff00ff, #8a2be2)';
        quantumBtn.textContent = '⚡ QUANTUM SCANNING...';
        
        setTimeout(() => {
            quantumBtn.style.background = '';
            quantumBtn.innerHTML = '<i class="fas fa-satellite-dish"></i> QUANTUM SCAN';
        }, 3000);
    }
}

function updateRugSensor() {
    const sensorMessage = document.getElementById('sensor-message');
    const sensorReading = document.getElementById('sensor-reading');
    
    if (sensorMessage || sensorReading) {
        const randomMessage = sensorMessages[Math.floor(Math.random() * sensorMessages.length)];
        const targetElement = sensorMessage || sensorReading;
        
        // Typing effect
        targetElement.textContent = "";
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < randomMessage.length) {
                targetElement.textContent += randomMessage.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Hidden Magic Button Functions
function unlockSecretFlame() {
    createMagicEffect('🔥', '#ff6600');
    showMagicMessage("Sizzle's Secret Flame Unleashed! 🔥");
}

function unlockDiamondVault() {
    createMagicEffect('💎', '#00ffff');
    showMagicMessage("Diamond Vault Opened! Your hands are now unbreakable! 💎");
}

function summonWhaleSpirit() {
    createMagicEffect('🐋', '#0066ff');
    showMagicMessage("Ancient Whale Spirit Summoned! Massive gains incoming! 🐋");
}

function launchToMoon() {
    createMagicEffect('🚀', '#ffff00');
    showMagicMessage("Rocket fuel activated! Next stop: The Moon! 🚀");
}

function createMagicEffect(emoji, color) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.textContent = emoji;
        particle.style.position = 'fixed';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        document.body.appendChild(particle);
        
        const angle = (i / 30) * 2 * Math.PI;
        const distance = 100 + Math.random() * 200;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(2)`,
                opacity: 0
            }
        ], {
            duration: 2000,
            easing: 'ease-out'
        }).onfinish = () => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        };
    }
}

function showMagicMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.background = 'rgba(0, 0, 0, 0.8)';
    messageDiv.style.color = '#ffd700';
    messageDiv.style.padding = '20px 40px';
    messageDiv.style.borderRadius = '15px';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.zIndex = '10000';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.border = '2px solid #ffd700';
    
    document.body.appendChild(messageDiv);
    
    messageDiv.animate([
        { opacity: 0, transform: 'translateX(-50%) scale(0)' },
        { opacity: 1, transform: 'translateX(-50%) scale(1)' },
        { opacity: 1, transform: 'translateX(-50%) scale(1)' },
        { opacity: 0, transform: 'translateX(-50%) scale(0)' }
    ], {
        duration: 3000,
        easing: 'ease-in-out'
    }).onfinish = () => {
        document.body.removeChild(messageDiv);
    };
}

// Sizzle's Wisdom Oracle
const sizzleWisdom = [
    "Trust is the ultimate currency, and I am its guardian.",
    "Every rug pulled brings us closer to unbreakable bonds.",
    "Diamond hands are forged in the flames of conviction.",
    "The path to the moon is paved with burned rugs.",
    "Fear not the volatility, for I watch over your portfolio.",
    "In the UNFUKBLverse, loyalty is rewarded with abundance.",
    "Paper hands crumble, but diamond hands shine eternal.",
    "The greatest investments are in communities that care.",
    "Burn the rugs, not the bridges to prosperity.",
    "Where there's Sizzle, there's no room for betrayal."
];

function getSizzleWisdom() {
    const wisdomDisplay = document.getElementById('sizzle-wisdom');
    if (!wisdomDisplay) return;
    
    const randomWisdom = sizzleWisdom[Math.floor(Math.random() * sizzleWisdom.length)];
    
    // Crystal glow effect
    const crystal = document.querySelector('.oracle-crystal');
    if (crystal) {
        crystal.style.animation = 'crystalGlow 0.5s ease-in-out';
        setTimeout(() => {
            crystal.style.animation = '';
        }, 500);
    }
    
    // Typing effect for wisdom
    wisdomDisplay.textContent = "";
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < randomWisdom.length) {
            wisdomDisplay.textContent += randomWisdom.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 30);
    
    // Create mystical particles
    createMysticParticles();
}

function createMysticParticles() {
    const colors = ['#8a2be2', '#9932cc', '#ba55d3'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        // Start from oracle crystal position
        const crystal = document.querySelector('.oracle-crystal');
        if (crystal) {
            const rect = crystal.getBoundingClientRect();
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
        } else {
            particle.style.left = '50%';
            particle.style.top = '50%';
        }
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * 2 * Math.PI;
        const distance = 80 + Math.random() * 60;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        };
    }
}

// Portal Effects
function ignitePortal(portal) {
    createPortalEffect(portal, '🔥', '#ff6600');
}

function launchPortal(portal) {
    createPortalEffect(portal, '🚀', '#0066ff');
}

function stellarPortal(portal) {
    createPortalEffect(portal, '⭐', '#ffd700');
}

function fashionPortal(portal) {
    createPortalEffect(portal, '👕', '#ff69b4');
}

function createPortalEffect(portal, emoji, color) {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.textContent = emoji;
        particle.style.position = 'absolute';
        particle.style.fontSize = '16px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '10';
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        portal.appendChild(particle);
        
        const angle = (i / 15) * 2 * Math.PI;
        const distance = 50 + Math.random() * 30;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            if (portal.contains(particle)) {
                portal.removeChild(particle);
            }
        };
    }
}

// Smooth scrolling for navigation links
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

// Scroll animations using Intersection Observer
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const endTime = performance.now();
    console.log(`🚀 UNFUKBL loaded in ${Math.round(endTime - startTime)}ms - Optimized for mobile-first experience!`);
    
    // Epic ASCII art and status display
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
🔥  💎 Diamond Hand Detector: CALIBRATED                   🔥
🔥  🚀 Moon Mission Protocol: INITIALIZED                  🔥
🔥                                                          🔥
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    `);
    
    // Initialize all systems
    console.log('🎮 Meme status bar initialized - Maximum chaos mode!');
    console.log('🔥 Legendary button system activated!');
    console.log('📡 Dynamic rug sensor initialized!');
    console.log('🌓 Theme toggle initialized - Current theme: LIGHT');
    console.log('📱 Improved mobile navigation initialized!');
    console.log('🔥 Interactive burning rugs initialized!');
    
    // Add animation classes to elements
    document.querySelectorAll('.stat-card, .leader-card, .universe-card, .feature-card, .store-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Start dynamic updates
    setInterval(updateMemeStatus, 5000);
    setInterval(updateRugSensor, 8000);
    
    // Initial updates
    updateMemeStatus();
    updateRugSensor();
    
    console.log('🔥 UNFUKBL Lore Portal activated! Welcome to the revolution.');
});

// Make functions globally available
window.burnRug = burnRug;
window.advanceLegendaryStatus = advanceLegendaryStatus;
window.progressLegendary = progressLegendary;
window.performRugScan = performRugScan;
window.performQuantumScan = performQuantumScan;
window.unlockSecretFlame = unlockSecretFlame;
window.unlockDiamondVault = unlockDiamondVault;
window.summonWhaleSpirit = summonWhaleSpirit;
window.launchToMoon = launchToMoon;
window.getSizzleWisdom = getSizzleWisdom;
window.ignitePortal = ignitePortal;
window.launchPortal = launchPortal;
window.stellarPortal = stellarPortal;
window.fashionPortal = fashionPortal;