import { ROOT_FOOTER } from '../../constants/root'
import logo from './img/logo.png'

import './Footer.css'

class Footer {

    render() {
        let html = `
            <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__contacts">
                        <figure>
                            <img class="footer__contacts-img" src=${logo} alt='logo' />
                        </figure>
                        <address>
                            <div class="footer__contacts-list">
                                <h4 class="footer__contacts-mobile">
                                    <a href="tel:+74959842513">
                                        +7 (495) 984 25 13
                                    </a>  
                                </h4>
                                <p class="footer__contacts-mail">
                                    <a href="mailto:info@neoflex.ru">  
                                        info@neoflex.ru
                                    </a>  
                                </p>
                            </div>
                        </address>
                    </div>
                    <div class="footer__about">
                        <ul class="footer__about-list">
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#aboutbank">  
                                    About bank
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#askaquestion">  
                                    Ask a Question
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#qualityofservice">  
                                    Quality of service
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#requisites">  
                                    Requisites
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#presscenter">  
                                    Press center
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#bankcareer">  
                                    Bank career
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#investors">  
                                    Investors
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#analytics">  
                                    Analytics
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#business">  
                                    Business and processes
                                </a> 
                            </li>
                            <li class="footer__about-item">
                                <a class="footer__about-link" href="#compliance">  
                                    Compliance and business ethics
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <span class="footer-line"></span>
                    <p class="footer__description">
                        We use cookies to personalize our services and improve 
                        the user experience of our website. Cookies are small 
                        files containing information about previous visits to a website. 
                        If you do not want to use cookies, please change your browser settings
                    </p>
                </div>
            </div>
        </footer>
        `;
        ROOT_FOOTER.innerHTML = html;
    }
}
export default new Footer();