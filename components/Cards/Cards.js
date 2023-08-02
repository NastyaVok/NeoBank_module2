import { ROOT_CARDS } from '../../constants/root'
import cards from './img/cards.png'

import './Cards.css';

class Cards {

    render() {
        let html = `
        <section class="cards">
            <div class="container">
                <div class="cards__inner">
                    <div class="cards__column">
                        <h2 class="cards__title">
                            Choose the design you like <br/>
                            and apply for card right <br/> 
                            now
                        </h2>
                        <button class="cards__btn">
                            Choose the card
                        </button>
                    </div>
                    <img class="cards__img" src=${cards} alt="Credit cards-img" />
                </div>
            </div>
        </section>
        `;
        ROOT_CARDS.innerHTML = html;
    }
}
export default new Cards();