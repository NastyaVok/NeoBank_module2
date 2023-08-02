import { ROOT_SUPPORT } from '../../constants/root'
import email from './img/email.svg'
import telegram from './img/telegram.png'

import './Support.css'

class Support {

    render() {
        let html = `
        <section class="support">
            <div class="container">
                <div class="support__inner">
                    <h2 class="support__title">
                        Support
                    </h2>
                    <p class="support__subtitle">
                        Subscribe Newsletter & get
                    </p>
                    <p class="support__text">
                        Bank News
                    </p>
                    <div class="support__form">
                        <img class="support__input-img" src=${email} alt="telegram-img"/>
                        <input class="support__input" placeholder="Your email" type="email" /> 
                        <button class="support__btn" type="submit">
                            <div class="support__btn-container">
                                <img class="support__btn-img" src=${telegram} alt="telegram-img"/>
                                <span class="support__btn-text">Subscribe</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>   
        `;
        ROOT_SUPPORT.innerHTML = html;
    }
}
export default new Support();