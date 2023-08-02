import { ROOT_FEATURES } from '../../constants/root'
import man from './img/man.png'
import mark from './img/mark.png'

import './Features.css';

class Features {

    render() {
        let html = `
        <section class="features">
            <div class="container">
                <div class="features__inner">
                    <img class="features__img" src=${man} alt="man-img" />
                    <div class="features__column">
                        <h2 class="features__title">
                            We Provide Many Features You Can Use
                        </h2>
                        <p class="features__text">
                            You can explore the features that we 
                            provide with fun and have their own 
                            functions each feature
                        </p>
                        <ul class="features__list">
                            <li class="features__list-item">
                                <img class="features__list-img" src=${mark} alt="mark-img"/>
                                <span class="features__list-text">Powerfull online protection.</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${mark} alt="mark-img"/>
                                <span class="features__list-text">Cashback without borders.</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${mark} alt="mark-img"/>
                                <span class="features__list-text">Personal design</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${mark} alt="mark-img"/>
                                <span class="features__list-text">Work anywhere in the world</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `;
        ROOT_FEATURES.innerHTML = html;
    }
}
export default new Features();