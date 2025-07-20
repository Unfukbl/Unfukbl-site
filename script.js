// 🔥 UNFUKBL - LEGENDARY MEME MAGIC JS 🔥
// Clean • Crisp • Sharp • Original

document.addEventListener('DOMContentLoaded', function() {
    initThemeMagic();
    initScrollReveal();
    initLegendaryInteractions();
    initCounters();
    
    console.log('🔥 UNFUKBL Universe Activated! Sizzle lights the way!');
});

// THEME MAGIC SYSTEM
function initThemeMagic() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('unfukbl-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Create epic theme transition
        createThemeExplosion();
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('unfukbl-theme', newTheme);
        }, 400);
    });
}

// EPIC THEME EXPLOSION
function createThemeExplosion() {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, #ff6600, #ff8c00, #ffa500);
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
    `;
    
    document.body.appendChild(explosion);
    
    explosion.animate([
        { opacity: 0, transform: 'scale(0)' },
        { opacity: 0.9, transform: 'scale(2)' },
        { opacity: 0, transform: 'scale(4)' }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => explosion.remove();
}

// SCROLL REVEAL MAGIC
function initScrollReveal() {
    const nav = document.getElementById('flame-nav');
    const sections = document.querySelectorAll('.portals-reveal, .burn-reveal, .community-reveal, .wisdom-reveal');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
    
    // Navigation appears on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 200) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
    });
}

// LEGENDARY INTERACTIONS
function initLegendaryInteractions() {
    const sizzleLogo = document.getElementById('sizzle-logo');
    
    if (sizzleLogo) {
        let clickCount = 0;
        sizzleLogo.addEventListener('click', function() {
            clickCount++;
            createSizzleExplosion(this);
            
            // Every 7 clicks shows wisdom
            if (clickCount % 7 === 0) {
                showSizzleWisdom();
            }
        });
    }
}

// SIZZLE EXPLOSION EFFECT
function createSizzleExplosion(element) {
    const particles = ['🔥', '✨', '💎', '⚡', '🌟'];
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.className = 'explosion-particle';
        
        particle.style.cssText = `
            position: fixed;
            font-size: 2rem;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animate particle explosion
        const angle = (i / 12) * Math.PI * 2;
        const distance = 120 + Math.random() * 80;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)', 
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.3)`, 
                opacity: 0 
            }
        ], {
            duration: 1200,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => particle.remove();
    }
}

// SIZZLE WISDOM POPUP
function showSizzleWisdom() {
    const wisdomQuotes = [
        "From ashes we rise, unbreakable and strong",
        "Every rug burned makes us legendary",
        "Diamond hands hold eternal flames",
        "Together we CAN'T be stopped",
        "Sizzle lights the way through darkness",
        "The UNFUKBL spirit burns eternal"
    ];
    
    const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
    
    const wisdomPopup = document.createElement('div');
    wisdomPopup.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6600, #ff8c00);
            color: white;
            padding: 40px;
            border-radius: 25px;
            font-family: 'Orbitron', monospace;
            text-align: center;
            z-index: 10000;
            border: 4px solid #ffd700;
            max-width: 450px;
            box-shadow: 0 25px 60px rgba(255, 102, 0, 0.6);
        ">
            <h3 style="font-size: 1.5rem; margin-bottom: 20px;">✨ Sizzle's Wisdom ✨</h3>
            <p style="font-size: 1.2rem; margin: 25px 0; font-style: italic; line-height: 1.6;">"${randomWisdom}"</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #ffd700;
                color: #1a1a1a;
                border: none;
                padding: 12px 25px;
                border-radius: 25px;
                font-weight: 900;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Accept Wisdom</button>
        </div>
    `;
    
    document.body.appendChild(wisdomPopup);
    
    // Auto-remove after 6 seconds
    setTimeout(() => {
        if (wisdomPopup.parentNode) {
            wisdomPopup.remove();
        }
    }, 6000);
}

// RUG DESTROYER FUNCTION
function destroyRug() {
    const rugTarget = document.getElementById('rug-target');
    const destructionMessage = document.getElementById('destruction-message');
    const rugsDestroyed = document.getElementById('rugs-destroyed');
    
    if (!rugTarget) return;
    
    // Add burning effect
    rugTarget.classList.add('burning');
    
    // Create destruction particles
    createDestructionParticles(rugTarget);
    
    // Update counter
    const currentCount = parseInt(rugsDestroyed.textContent.replace(/,/g, '')) || 1337;
    const newCount = currentCount + Math.floor(Math.random() * 3) + 1;
    rugsDestroyed.textContent = newCount.toLocaleString();
    
    // Show destruction message
    const messages = [
        "🔥 Another rug meets its fiery doom!",
        "💥 The flames of justice burn bright!",
        "⚡ UNFUKBL claims another victory!",
        "💎 Diamond hands prevail once again!",
        "✨ The sacrifice pleases Sizzle!",
        "🚀 Un-rugable power activated!",
        "⚖️ Justice has been served!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    if (destructionMessage) {
        destructionMessage.textContent = randomMessage;
        setTimeout(() => {
            destructionMessage.textContent = '';
        }, 3500);
    }
    
    // Change rug after destruction
    setTimeout(() => {
        rugTarget.classList.remove('burning');
        const rugTypes = ['🪣', '🗑️', '📄', '💸', '🧽', '🪴', '📦', '🎭'];
        rugTarget.textContent = rugTypes[Math.floor(Math.random() * rugTypes.length)];
    }, 600);
}

// DESTRUCTION PARTICLES
function createDestructionParticles(target) {
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #ff6600;
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            z-index: 9999;
            pointer-events: none;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 80 + Math.random() * 60;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)', 
                opacity: 1,
                background: '#ff6600'
            },
            { 
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.2)`, 
                opacity: 0,
                background: '#ffa500'
            }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => particle.remove();
    }
}

// PORTAL ENTRY SYSTEM
function enterPortal(portalType) {
    const portals = {
        'burn': 'burnunfukbl.com',
        'wear': 'wearunfukbl.com',
        'get': 'getunfukbl.com',
        'adventure': 'iwentunfukbl.com'
    };
    
    const url = portals[portalType];
    if (!url) return;
    
    // Create portal activation effect
    createPortalTransition();
    
    setTimeout(() => {
        showPortalActivation(url, portalType);
    }, 1000);
}

// PORTAL TRANSITION EFFECT
function createPortalTransition() {
    const transition = document.createElement('div');
    transition.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, #ff6600 0%, #1a1a1a 80%);
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
    `;
    
    document.body.appendChild(transition);
    
    transition.animate([
        { 
            opacity: 0, 
            transform: 'scale(0) rotate(0deg)' 
        },
        { 
            opacity: 0.95, 
            transform: 'scale(1.5) rotate(180deg)' 
        },
        { 
            opacity: 0, 
            transform: 'scale(3) rotate(360deg)' 
        }
    ], {
        duration: 1200,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }).onfinish = () => transition.remove();
}

// PORTAL ACTIVATION POPUP
function showPortalActivation(url, portalType) {
    const portalNames = {
        'burn': 'Burn Portal',
        'wear': 'Wear Portal',
        'get': 'Get Portal',
        'adventure': 'Adventures of Sizzle'
    };
    
    const portalName = portalNames[portalType] || 'Unknown Portal';
    
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff6600, #ff8c00);
            color: white;
            padding: 40px;
            border-radius: 25px;
            font-family: 'Orbitron', monospace;
            text-align: center;
            z-index: 10000;
            border: 4px solid #ffd700;
            max-width: 450px;
            box-shadow: 0 25px 60px rgba(255, 102, 0, 0.6);
        ">
            <h3 style="font-size: 1.8rem; margin-bottom: 20px;">🌀 ${portalName} Activated! 🌀</h3>
            <p style="margin: 20px 0; font-size: 1.1rem;">Connecting to the legendary realm:</p>
            <p style="font-size: 1.3rem; font-weight: 900; margin: 20px 0; color: #ffd700; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">${url}</p>
            <p style="font-style: italic; font-size: 1rem; margin-bottom: 25px; opacity: 0.9;">Adventure awaits in the UNFUKBLverse!</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #ffd700;
                color: #1a1a1a;
                border: none;
                padding: 12px 25px;
                border-radius: 25px;
                font-weight: 900;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Close Portal</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

// LIVE COUNTERS
function initCounters() {
    // Update counters periodically for that dynamic feel
    setInterval(() => {
        updateRugCount();
        updateMemorialCount();
    }, 25000);
}

function updateRugCount() {
    const rugCounter = document.getElementById('rugs-destroyed');
    if (rugCounter) {
        const currentCount = parseInt(rugCounter.textContent.replace(/,/g, '')) || 1337;
        const increment = Math.floor(Math.random() * 3) + 1;
        rugCounter.textContent = (currentCount + increment).toLocaleString();
    }
}

function updateMemorialCount() {
    const memorialCounter = document.getElementById('memorial-count');
    if (memorialCounter) {
        const currentCount = parseInt(memorialCounter.textContent) || 1337;
        const increment = Math.floor(Math.random() * 2) + 1;
        memorialCounter.textContent = currentCount + increment;
    }
}

// SMOOTH SCROLL FOR NAVIGATION
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

// PERFORMANCE OPTIMIZATION
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// EASTER EGG - KONAMI CODE
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((key, index) => key === konamiSequence[index])) {
        activateUltimateUNFUKBL();
        konamiCode = [];
    }
});

function activateUltimateUNFUKBL() {
    const ultimate = document.createElement('div');
    ultimate.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ffd700, #ff6600, #ff8c00);
            color: white;
            padding: 50px;
            border-radius: 30px;
            font-family: 'Orbitron', monospace;
            text-align: center;
            z-index: 10000;
            border: 5px solid #ffd700;
            max-width: 600px;
            box-shadow: 0 30px 80px rgba(255, 102, 0, 0.8);
            animation: ultimateGlow 2s ease-in-out infinite;
        ">
            <h2 style="font-size: 2.5rem; margin-bottom: 25px;">🏆 ULTIMATE UNFUKBL ACTIVATED! 🏆</h2>
            <p style="font-size: 1.3rem; margin: 25px 0;">You have unlocked the legendary Konami power!</p>
            <p style="font-size: 1.1rem; margin: 20px 0; font-style: italic;">The UNFUKBLverse bows to your dedication!</p>
            <p style="font-size: 2rem; margin: 20px 0;">🔥 SIZZLE APPROVES 🔥</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: #ffd700;
                color: #1a1a1a;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-weight: 900;
                cursor: pointer;
                font-size: 1.1rem;
                margin-top: 20px;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">LEGENDARY!</button>
        </div>
    `;
    
    // Add ultimate glow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ultimateGlow {
            0%, 100% { box-shadow: 0 30px 80px rgba(255, 102, 0, 0.8); }
            50% { box-shadow: 0 40px 100px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 102, 0, 0.9); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(ultimate);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (ultimate.parentNode) {
            ultimate.remove();
            style.remove();
        }
    }, 8000);
}