require("./main.css");
var $gXNCa$swiper = require("swiper");
var $gXNCa$swipermodules = require("swiper/modules");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $baa78404f95eec72$export$368f8a980a80334b = document.getElementById("header");
const $baa78404f95eec72$export$a2f4bb8380e8ab7d = document.getElementById("cards");
const $baa78404f95eec72$export$78fb40ffda838171 = document.getElementById("features");
const $baa78404f95eec72$export$db571829cf2536c7 = document.getElementById("exchange");
const $baa78404f95eec72$export$df4eedc282ee9227 = document.getElementById("services");
const $baa78404f95eec72$export$2a1d83a2d034105f = document.getElementById("news");
const $baa78404f95eec72$export$97712dd99256e054 = document.getElementById("support");
const $baa78404f95eec72$export$3f57a981b06d3410 = document.getElementById("footer");



class $5302a7324856c525$var$Header {
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
        (0, $baa78404f95eec72$export$368f8a980a80334b).innerHTML = html;
    }
}
var $5302a7324856c525$export$2e2bcd8739ae039 = new $5302a7324856c525$var$Header();





var $f5667e8ffd4a97d7$exports = {};
$f5667e8ffd4a97d7$exports = new URL("cards.5322a80a.png", "file:" + __filename).toString();



class $ce3a21b35920074b$var$Cards {
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
                    <img class="cards__img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($f5667e8ffd4a97d7$exports)))} alt="Credit cards-img" />
                </div>
            </div>
        </section>
        `;
        (0, $baa78404f95eec72$export$a2f4bb8380e8ab7d).innerHTML = html;
    }
}
var $ce3a21b35920074b$export$2e2bcd8739ae039 = new $ce3a21b35920074b$var$Cards();





var $7307f60042a83686$exports = {};
$7307f60042a83686$exports = new URL("man.a84e187d.png", "file:" + __filename).toString();


var $9486aa2f22b9f6cb$exports = {};
$9486aa2f22b9f6cb$exports = new URL("mark.1cf4cf0a.png", "file:" + __filename).toString();



class $153b2631835f4a47$var$Features {
    render() {
        let html = `
        <section class="features">
            <div class="container">
                <div class="features__inner">
                    <img class="features__img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($7307f60042a83686$exports)))} alt="man-img" />
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
                                <img class="features__list-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($9486aa2f22b9f6cb$exports)))} alt="mark-img"/>
                                <span class="features__list-text">Powerfull online protection.</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($9486aa2f22b9f6cb$exports)))} alt="mark-img"/>
                                <span class="features__list-text">Cashback without borders.</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($9486aa2f22b9f6cb$exports)))} alt="mark-img"/>
                                <span class="features__list-text">Personal design</span>
                            </li>
                            <li class="features__list-item">
                                <img class="features__list-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($9486aa2f22b9f6cb$exports)))} alt="mark-img"/>
                                <span class="features__list-text">Work anywhere in the world</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `;
        (0, $baa78404f95eec72$export$78fb40ffda838171).innerHTML = html;
    }
}
var $153b2631835f4a47$export$2e2bcd8739ae039 = new $153b2631835f4a47$var$Features();





var $ab28152eb2bc4d07$exports = {};
$ab28152eb2bc4d07$exports = new URL("building.c488d62b.png", "file:" + __filename).toString();


class $a4ec71e71e706d44$var$GetDataApi {
    async getData(url, options) {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error.message);
            return reject;
        }
    }
    async getDataAllSettled(urls, options) {
        return Promise.allSettled(urls.map((url)=>this.getData(url, options))).then((resp)=>resp.map((el)=>el.status === "fulfilled" ? el.value : el.status));
    }
}
const $a4ec71e71e706d44$export$f5d62e80007de0eb = new $a4ec71e71e706d44$var$GetDataApi();


const $b454f8bcade3534c$export$ebe860a2db7990ad = "558d167f94mshb1e9836246f2a98p1a5ad9jsn6de8308cea88";
const $b454f8bcade3534c$export$64421c63b91ed0d8 = "acb62ce1bbca44248f9ffbb8faf7db31";


const $bf21538c2cf4660a$export$4521fd2bf5e1ec6e = (0, $b454f8bcade3534c$export$ebe860a2db7990ad);
const $bf21538c2cf4660a$export$df2e571c66720bb2 = "currency-exchange.p.rapidapi.com";
const $bf21538c2cf4660a$var$EXCHANGE = "exchange";
const $bf21538c2cf4660a$export$59b3c237b117a526 = "https://" + $bf21538c2cf4660a$export$df2e571c66720bb2 + "/" + $bf21538c2cf4660a$var$EXCHANGE;
const $bf21538c2cf4660a$export$cde55e68552cbfe6 = (0, $b454f8bcade3534c$export$64421c63b91ed0d8);
const $bf21538c2cf4660a$export$754273d1c4e5f6c5 = "newsapi.org";
const $bf21538c2cf4660a$var$COUNTRY = "us";
const $bf21538c2cf4660a$var$SIZE = "40";
const $bf21538c2cf4660a$var$CATEGORY = "business";
const $bf21538c2cf4660a$export$1d93c60a3ab87d29 = "https://" + $bf21538c2cf4660a$export$754273d1c4e5f6c5 + `/v2/top-headlines?country=${$bf21538c2cf4660a$var$COUNTRY}&pageSize=${$bf21538c2cf4660a$var$SIZE}&category=${$bf21538c2cf4660a$var$CATEGORY}`;



class $5f8aaeed50f67819$var$Exchange {
    async render() {
        const currencies = [
            "USD",
            "EUR",
            "SGD",
            "MYR",
            "AUD",
            "JPY",
            "CNH",
            "HKD",
            "CAD",
            "INR",
            "DKK",
            "GBP",
            "NZD",
            "MXN",
            "IDR",
            "TWD",
            "THB",
            "VND"
        ];
        const countCurrency = 6;
        const urls = [];
        const currencyValues = [];
        const options = {
            headers: {
                "X-RapidAPI-Key": (0, $bf21538c2cf4660a$export$4521fd2bf5e1ec6e),
                "X-RapidAPI-Host": (0, $bf21538c2cf4660a$export$df2e571c66720bb2)
            }
        };
        for(let i = 0; i < countCurrency; i++)urls.push((0, $bf21538c2cf4660a$export$59b3c237b117a526) + `?from=${currencies[i]}&to=RUB&q=1.0`);
        const data = await (0, $a4ec71e71e706d44$export$f5d62e80007de0eb).getDataAllSettled(urls, options);
        for(let i = countCurrency - 1; i > -1; i--){
            const condition = data[i] !== "rejected" && Number(data[i]);
            if (condition) currencyValues.push({
                [currencies[i]]: data[i].toFixed(2)
            });
        }
        const lengthUrls = currencyValues.length;
        let htmlContent = "";
        let htmlContainer = "";
        for(let i = 0; i < lengthUrls; i++){
            const currencyValue = currencyValues.pop();
            const key = Object.keys(currencyValue);
            const val = Object.values(currencyValue);
            if (i === 0) htmlContent += `
                                <ul class="exchange__column-list">
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                `;
            else if (i === lengthUrls - 1) htmlContent += `
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                </ul>
                                `;
            else if (i % 3 === 0) htmlContent += `
                                </ul>
                                <ul class="exchange__column-list">
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                `;
            else htmlContent += `
                                <li class="exchange__column-item">
                                    <h4 class="exchange__column-title">${key}:</h4>
                                    <p class="exchange__column-text">${val}</p>
                                </li>
                                `;
        }
        htmlContainer = `
        <section class="exchange">
            <div class="container">
                <div class="exchange__inner">
                    <div class="exchange__head">
                        <h2 class="exchange__head-title">
                            Exchange rate in internet bank
                        </h2>
                        <p class="exchange__head-subtitle">
                            Update every 15 minutes, MSC 09.08.2022
                        </p>
                    </div>
                    <div class="exchange__column">
                        <h3 class="exchange__column-header">
                            Currency
                        </h3>
                        <div class="exchange__column-content">
                            <div class="exchange__column-table">
                                ${htmlContent}
                            </div>
                            <img class="exchange__column-img" src=${0, (/*@__PURE__*/$parcel$interopDefault($ab28152eb2bc4d07$exports))} alt="building-img"/>
                        </div>
                    </div>
                    <p class="exchange__text">
                        All courses
                    </p>
                </div>
            </div>
        </section>
        `;
        (0, $baa78404f95eec72$export$db571829cf2536c7).innerHTML = htmlContainer;
    }
}
var $5f8aaeed50f67819$export$2e2bcd8739ae039 = new $5f8aaeed50f67819$var$Exchange();





var $81b21b3b546a614c$exports = {};
$81b21b3b546a614c$exports = new URL("map.347eb3ff.png", "file:" + __filename).toString();



class $bede7a5134a2ae7c$var$Services {
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
                    <img class="services__img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($81b21b3b546a614c$exports)))} alt="map-img" />
                </div>
            </div>
        </section>    
        `;
        (0, $baa78404f95eec72$export$df4eedc282ee9227).innerHTML = html;
    }
}
var $bede7a5134a2ae7c$export$2e2bcd8739ae039 = new $bede7a5134a2ae7c$var$Services();






class $ba5445c9f1c4fc6c$var$ValidateImg {
    isImgURLValid(path) {
        return new Promise((resolve, reject)=>{
            const img = document.createElement("img");
            img.src = path;
            img.onload = resolve;
            img.onerror = reject;
        }).then(()=>true).catch(()=>false);
    }
}
const $ba5445c9f1c4fc6c$export$ba8d8bf7ac270676 = new $ba5445c9f1c4fc6c$var$ValidateImg();






class $db21bf3583abbf0f$var$News {
    async render() {
        const options = {
            headers: {
                "X-Api-Key": (0, $bf21538c2cf4660a$export$cde55e68552cbfe6)
            }
        };
        const data = await (0, $a4ec71e71e706d44$export$f5d62e80007de0eb).getData((0, $bf21538c2cf4660a$export$1d93c60a3ab87d29), options);
        if (data === "rejected") return;
        let htmlContent = "";
        let htmlContainer = "";
        data.articles.forEach(({ urlToImage: urlToImage, title: title, description: description, url: url })=>{
            const imgValid = urlToImage !== null ? (0, $ba5445c9f1c4fc6c$export$ba8d8bf7ac270676).isImgURLValid(urlToImage) : false;
            if (imgValid && description) htmlContent += `
                    <div class="swiper-slide">
                        <div class="img-container">
                            <img class="slider-img" src=${urlToImage} />
                        </div>
                        <h4 class="slider-title">
                            <a class="slider-link" href=${url} target="_blank">
                                ${title}
                            </a>
                        </h4>
                        <p class="slider-text">
                            ${description}
                        </p>
                    </div>
                `;
            htmlContainer = `
                <section class="news">
                    <div class="container">
                        <div class="news__inner">
                            <div class="news__head">
                                <h2 class="news__head-title">
                                    Current news from the world of finance
                                </h2>
                                <p class="news__head-subtitle">
                                    We update the news feed every 15 minutes. 
                                    You can learn more by clicking on the news 
                                    you are interested in.
                                </p>
                            </div>
                            <div class="slider-container">
                                <div class="swiper-container swiper-no-swiping">
                                    <div class="swiper-wrapper">
                                        ${htmlContent}
                                    </div>
                                </div>
                                <div class="slider-buttons">
                                    <button class="swiper-button-prev"></button>
                                    <button class="swiper-button-next"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            (0, $baa78404f95eec72$export$2a1d83a2d034105f).innerHTML = htmlContainer;
        });
        const swiper = new (0, ($parcel$interopDefault($gXNCa$swiper)))(".swiper-container", {
            modules: [
                (0, $gXNCa$swipermodules.Navigation)
            ],
            slidesPerView: 1.2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                500: {
                    slidesPerView: 1.3,
                    spaceBetween: 40
                },
                600: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: 2.3,
                    spaceBetween: 40
                },
                900: {
                    slidesPerView: 3.4,
                    spaceBetween: 40
                },
                1300: {
                    slidesPerView: 3.4,
                    spaceBetween: 80
                }
            }
        });
    }
}
var $db21bf3583abbf0f$export$2e2bcd8739ae039 = new $db21bf3583abbf0f$var$News();





var $a4a0855d8abf4534$exports = {};
$a4a0855d8abf4534$exports = new URL("email.a8823b93.svg", "file:" + __filename).toString();


var $7b0da4a1cbf32198$exports = {};
$7b0da4a1cbf32198$exports = new URL("telegram.8fe9c1a5.png", "file:" + __filename).toString();



class $7cea6cfce27928da$var$Support {
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
                        <img class="support__input-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($a4a0855d8abf4534$exports)))} alt="telegram-img"/>
                        <input class="support__input" placeholder="Your email" type="email" /> 
                        <button class="support__btn" type="submit">
                            <div class="support__btn-container">
                                <img class="support__btn-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($7b0da4a1cbf32198$exports)))} alt="telegram-img"/>
                                <span class="support__btn-text">Subscribe</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>   
        `;
        (0, $baa78404f95eec72$export$97712dd99256e054).innerHTML = html;
    }
}
var $7cea6cfce27928da$export$2e2bcd8739ae039 = new $7cea6cfce27928da$var$Support();





var $6dbd50a5ecccb82a$exports = {};
$6dbd50a5ecccb82a$exports = new URL("logo.f1d9318f.png", "file:" + __filename).toString();



class $ed1a88a3bbe94690$var$Footer {
    render() {
        let html = `
            <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__contacts">
                        <figure>
                            <img class="footer__contacts-img" src=${(0, (/*@__PURE__*/$parcel$interopDefault($6dbd50a5ecccb82a$exports)))} alt='logo' />
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
        (0, $baa78404f95eec72$export$3f57a981b06d3410).innerHTML = html;
    }
}
var $ed1a88a3bbe94690$export$2e2bcd8739ae039 = new $ed1a88a3bbe94690$var$Footer();




class $961f4cf07fbeaf66$var$App {
    async render() {
        (0, $5302a7324856c525$export$2e2bcd8739ae039).render();
        (0, $ce3a21b35920074b$export$2e2bcd8739ae039).render();
        (0, $153b2631835f4a47$export$2e2bcd8739ae039).render();
        await (0, $5f8aaeed50f67819$export$2e2bcd8739ae039).render();
        (0, $bede7a5134a2ae7c$export$2e2bcd8739ae039).render();
        await (0, $db21bf3583abbf0f$export$2e2bcd8739ae039).render();
        (0, $7cea6cfce27928da$export$2e2bcd8739ae039).render();
        (0, $ed1a88a3bbe94690$export$2e2bcd8739ae039).render();
    }
}
var $961f4cf07fbeaf66$export$2e2bcd8739ae039 = new $961f4cf07fbeaf66$var$App();





(async ()=>{
    await (0, $961f4cf07fbeaf66$export$2e2bcd8739ae039).render();
    await setInterval((0, $5f8aaeed50f67819$export$2e2bcd8739ae039).render, 900000);
})();


//# sourceMappingURL=main.js.map
