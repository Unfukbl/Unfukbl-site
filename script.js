/* UNFUKBL: Anti-Rug Burn Protocol - Mobile-First Stylesheet */

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #ffffff;
    color: #000000;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Mobile-First Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 69, 0, 0.1);
    transition: all 0.3s ease;
    height: 80px;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.nav-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.nav-logo:hover {
    transform: scale(1.1);
}

.nav-text {
    font-weight: 900;
    font-size: 1.5rem;
    color: #000;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
    background: transparent;
    color: #333;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.nav-btn:hover {
    background: linear-gradient(135deg, #ff4500, #ff6b35);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 69, 0, 0.3);
}

.nav-btn i {
    font-size: 0.9rem;
}

/* Hidden Flame Links with Hover Glow */
.hidden-flame-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #ff4500;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s ease;
    opacity: 0.3;
}

.hidden-flame-link:hover {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 0 20px rgba(255, 69, 0, 0.6);
    animation: flameGlow 1s ease-in-out infinite alternate;
}

@keyframes flameGlow {
    0% { box-shadow: 0 0 20px rgba(255, 69, 0, 0.6); }
    100% { box-shadow: 0 0 30px rgba(255, 69, 0, 0.9); }
}

/* Hero Section with Animated Sizzle Logo */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 140px 20px 80px;
    background: linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%);
    position: relative;
}

.logo-container {
    margin-bottom: 3rem;
}

/* Animated Sizzle Logo with CSS Keyframes */
.sizzle-logo {
    width: 200px;
    height: 200px;
    object-fit: contain;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    transition: all 0.4s ease;
    animation: sizzleFloat 4s ease-in-out infinite, sizzleGlow 3s ease-in-out infinite alternate;
    cursor: pointer;
    filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.6));
}

@keyframes sizzleFloat {
    0%, 100% { 
        transform: translateY(0px) scale(1);
    }
    50% { 
        transform: translateY(-15px) scale(1.05);
    }
}

@keyframes sizzleGlow {
    0% { 
        filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.6)) brightness(1);
    }
    100% { 
        filter: drop-shadow(0 0 40px rgba(255, 69, 0, 0.9)) brightness(1.1);
    }
}

.sizzle-logo:hover {
    transform: scale(1.15) rotate(10deg);
    animation-play-state: paused;
    filter: drop-shadow(0 0 60px rgba(255, 69, 0, 1)) brightness(1.2);
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: #000000;
    letter-spacing: -0.02em;
    line-height: 1.1;
}

.hero-tagline {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ff4500;
    margin-bottom: 2.5rem;
    text-shadow: 2px 2px 4px rgba(255, 69, 0, 0.1);
}

.hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Button Styles with Hover Glow Effects */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: linear-gradient(135deg, #ff4500, #ff6b35);
    color: white;
    box-shadow: 0 8px 25px rgba(255, 69, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 69, 0, 0.5);
    animation: btnGlow 1.5s ease-in-out infinite alternate;
}

@keyframes btnGlow {
    0% { box-shadow: 0 15px 40px rgba(255, 69, 0, 0.5); }
    100% { box-shadow: 0 20px 50px rgba(255, 69, 0, 0.7); }
}

.btn-secondary {
    background: #000;
    color: white;
    border: 2px solid #ff4500;
}

.btn-secondary:hover {
    background: #ff4500;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 69, 0, 0.4);
}

.btn-outline {
    background: transparent;
    color: #ff4500;
    border: 2px solid #ff4500;
}

.btn-outline:hover {
    background: #ff4500;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 69, 0, 0.4);
}

/* Live Burn Tracker Ticker */
.burn-ticker {
    width: 100%;
    background: #000;
    color: white;
    padding: 1rem 0;
    overflow: hidden;
    position: relative;
    border-top: 3px solid #ff4500;
    border-bottom: 3px solid #ff4500;
}

.ticker-container {
    position: relative;
    height: 100%;
}

.ticker-content {
    display: flex;
    gap: 3rem;
    white-space: nowrap;
    animation: tickerScroll 25s linear infinite;
}

@keyframes tickerScroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}

.ticker-item {
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.ticker-item strong {
    color: #ff4500;
    font-weight: 800;
}

.ticker-item span {
    color: #ffaa00;
    font-weight: 700;
}

/* Phase Progress Bar */
.phase-progress {
    padding: 3rem 0;
    background: #fafafa;
    border-bottom: 1px solid #eee;
}

.phase-progress h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: #000;
}

.progress-bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.progress-line {
    position: absolute;
    top: 50%;
    left: 2rem;
    right: 2rem;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    z-index: 1;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff4500, #ff6b35);
    border-radius: 2px;
    transition: width 2s ease;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    right: -8px;
    top: -6px;
    width: 16px;
    height: 16px;
    background: #ff4500;
    border-radius: 50%;
    animation: progressPulse 2s ease-in-out infinite;
}

@keyframes progressPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 2;
    background: white;
    padding: 1rem;
    border-radius: 15px;
    min-width: 120px;
    transition: all 0.3s ease;
}

.progress-step.active {
    background: linear-gradient(135deg, #fff5f0, #ffffff);
    border: 2px solid #ff4500;
    box-shadow: 0 5px 20px rgba(255, 69, 0, 0.2);
}

.progress-step.completed {
    background: linear-gradient(135deg, #e8f5e8, #ffffff);
    border: 2px solid #4CAF50;
}

.step-icon {
    font-size: 2rem;
    transition: transform 0.3s ease;
}

.progress-step.active .step-icon {
    animation: stepPulse 2s ease-in-out infinite;
}

@keyframes stepPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.progress-step span {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    color: #333;
}

/* How It Works Section */
.how-it-works {
    padding: 5rem 0;
    background: #ffffff;
}

.section-title {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
    color: #000;
}

.section-subtitle {
    font-size: 1.3rem;
    color: #666;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
}

.steps-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.step-card {
    background: #fafafa;
    padding: 2.5rem;
    border-radius: 20px;
    text-align: center;
    position: relative;
    transition: all 0.3s ease;
    border: 2