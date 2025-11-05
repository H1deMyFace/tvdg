class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: linear-gradient(to bottom, #0F172A, #020617);
                    border-top: 1px solid rgba(139, 92, 246, 0.2);
                    padding: 3rem 0 1.5rem;
                    margin-top: auto;
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    color: #F8FAFC;
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, #8B5CF6, #EC4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .footer-section p {
                    color: #94A3B8;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: #94A3B8;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .footer-links a:hover {
                    color: #8B5CF6;
                    transform: translateX(5px);
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: rgba(139, 92, 246, 0.1);
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 50%;
                    color: #8B5CF6;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: #8B5CF6;
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
                }
                
                .footer-bottom {
                    padding-top: 2rem;
                    border-top: 1px solid rgba(148, 163, 184, 0.1);
                    text-align: center;
                    color: #64748B;
                }
                
                .footer-bottom p {
                    margin: 0;
                    font-size: 0.875rem;
                }
                
                .whatsapp-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #25D366;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 2rem;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }
                
                .whatsapp-badge:hover {
                    background: #128C7E;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .social-links {
                        justify-content: center;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-content" style="text-align: center; max-width: 600px; margin: 0 auto;">
                        <div class="footer-section">
                            <h3>Sobre</h3>
                            <p>
                                A melhor plataforma de streaming do Brasil, oferecendo milhares de filmes, séries e canais de TV ao vivo com a melhor qualidade e preço acessível.
                            </p>
                            <div style="margin-top: 2rem; display: flex; justify-content: center;">
                                <a href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre a TV DA GALERA" target="_blank" class="whatsapp-badge" style="display: inline-flex; align-items: center; gap: 0.75rem; font-size: 1.1rem; padding: 1rem 2rem; justify-content: center;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Fale Conosco no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div><br>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2025 TV DA GALERA. Todos os direitos reservados. Feito com ❤️ para você</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);