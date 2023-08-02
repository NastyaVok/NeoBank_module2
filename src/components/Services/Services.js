import { ROOT_SERVICES } from '../../constants/root'
import map from './img/map.png'

import './Services.css'

class Services {

    render() {
        let html = `
        <section class="services">
            <div class="container">
                <div class="services__inner">
                    <h2 class="services__title">
                        You can use our services anywhere in the world
                    </h2>
                    <p class="services__subtitle">
                        Withdraw and transfer money online through our application
                    </p>
                    <img class="services__img" src=${map} alt="map-img" />
                </div>
            </div>
        </section>    
        `;
        ROOT_SERVICES.innerHTML = html;
    }
}
export default new Services();