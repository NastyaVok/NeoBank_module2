import { ROOT_HEADER } from "../../constants/root"
import './Header.css';

class Header {

    render() {
        let html = `
            <header class="header">
                <div class="container">
                    <div class="header__inner">
                        <a class="logo" href="#">
                            <h2 className="logo__title">
                                NeoBank
                            </h2>
                        </a>
                        <input id="menu-toggle" type="checkbox" />
                        <label class='menu-button-container' for="menu-toggle">
                            <div class='menu-button'></div>
                        </label>
                        <nav class="menu">
                            <ul class="menu__list">
                                <li class="menu__item">
                                    <a class="menu__link" href="#creditcard">
                                        Credit card
                                    </a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#product">
                                        Product
                                    </a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#account">
                                        Account
                                    </a>
                                </li>
                                <li class="menu__item">
                                    <a class="menu__link" href="#resources">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button class="menu__btn">
                            Online Bank
                        </button>
                    </div>
                </div>
            </header>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

export default new Header();