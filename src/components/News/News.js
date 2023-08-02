import { ROOT_NEWS } from '../../constants/root'
import { getDataApi } from '../../utils/getDataApi'
import { validateImg } from '../../utils/validateImg'
import { API_KEY_NEWS, API_URL_NEWS } from '../../constants/api'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import './News.css'


class News {

    async render() {

        const options = {
            headers: {
                'X-Api-Key': API_KEY_NEWS
            }
        }

        const data = await getDataApi.getData(API_URL_NEWS, options)
        
        if (data === 'rejected') return

        let htmlContent = ''
        let htmlContainer = ''

        data.articles.forEach(({ urlToImage, title, description, url }) => {
            const imgValid = urlToImage !== null ? validateImg.isImgURLValid(urlToImage) : false

            if(imgValid && description) {
                htmlContent += `
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
                `
            } 

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
            ` 
        ROOT_NEWS.innerHTML = htmlContainer; 
		})
        const swiper = new Swiper('.swiper-container', {
            modules: [Navigation],
            slidesPerView: 1.2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                500: {
                    slidesPerView: 1.3,
                    spaceBetween: 40,
                },
                600: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                },
                900: {
                    slidesPerView: 3.4,
                    spaceBetween: 40,
                },
                1300: {
                    slidesPerView: 3.4,
                    spaceBetween: 80,
                }
            }
        })
    }
}
export default new News()