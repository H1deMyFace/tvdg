class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(15, 23, 42, 0.95);
                    backdrop-filter: blur(10px);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
                }
                .nav-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 80px;
                }
                
                @media (max-width: 768px) {
                    .nav-container {
                        height: 70px;
                        padding: 0.75rem 1rem;
                    }
                }
                
                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
.logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    transition: transform 0.3s ease;
                }
                
                .logo:hover {
                    transform: scale(1.05);
                }
                .logo img {
                    /* Keep the logo almost as tall as the navbar with a small top/bottom gap */
                    max-height: 166px;
                    height: auto;
                    width: auto;
                    display: block;
                }
.nav-link {
                    color: #F8FAFC;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                    padding: 0.5rem 0;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #8B5CF6, #EC4899);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #8B5CF6;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-cta {
                    background: linear-gradient(135deg, #8B5CF6, #EC4899);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 2rem;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .nav-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #F8FAFC;
                    cursor: pointer;
                    padding: 0.5rem;
                }
                
                @media (max-width: 768px) {
                    .nav-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: rgba(15, 23, 42, 0.98);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1rem;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease;
                        border-bottom: 1px solid rgba(139, 92, 246, 0.2);
                    }
                    
                    .nav-menu.active {
                        transform: translateX(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    /* Ensure items fill width and the CTA is centered and aligned */
                    .nav-menu li {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }

                    .nav-cta {
                        /* Keep previous desktop padding but on mobile keep the same look
                           while centered via the parent li's flex centering */
                        width: auto;
                        justify-content: center;
                        align-items: center;
                        padding: 0.75rem 1.5rem;
                        line-height: 1;
                    }

                    /* Make SVGs align properly inside buttons */
                    .nav-cta svg {
                        display: inline-block;
                        vertical-align: middle;
                    }

                    /* Increase logo size on mobile by +15% (from previous 64px to 84px)
                       This targets only mobile via the media query so desktop remains unchanged */
                    .logo img {
                        max-height: 84px;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo">
                        <img src="images/logo_tv.png" alt="TV DA GALERA">
                    </a>
<ul class="nav-menu" id="navMenu">
                        <li><a href="#features" class="nav-link">Recursos</a></li>
                        <li><a href="#plans" class="nav-link">Planos</a></li>
                        <li><a href="#content" class="nav-link">Conteúdo</a></li>
                        <li>
                            <a href="https://wa.me/5522992814560?text=Olá! Quero saber mais sobre a TV DA GALERA" target="_blank" class="nav-cta">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                Contato
                            </a>
                        </li>
                    </ul>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
        const navMenu = this.shadowRoot.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = this.shadowRoot.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);