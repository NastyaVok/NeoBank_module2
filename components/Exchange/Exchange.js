import { ROOT_EXCHANGE } from '../../constants/root'
import building from './img/building.png'
import { getDataApi } from '../../utils/getDataApi'
import { API_KEY_CURRENCY, API_HOST_CURRENCY, API_URL_CURRENCY } from '../../constants/api'

import './Exchange.css'

class Exchange {

    async render() {
        const currencies = ['USD', 'EUR', 'SGD', 'MYR', 'AUD', 'JPY', 'CNH', 'HKD', 'CAD', 'INR', 'DKK', 'GBP', 'NZD', 'MXN', 'IDR', 'TWD', 'THB', 'VND']
        const countCurrency = 6

        const urls = [] 
        const currencyValues = []

        const options = {
            headers: {
                'X-RapidAPI-Key': API_KEY_CURRENCY,
                'X-RapidAPI-Host': API_HOST_CURRENCY
            }
        }

        for (let i = 0; i < countCurrency; i++) {
            urls.push(API_URL_CURRENCY + `?from=${currencies[i]}&to=RUB&q=1.0`)
        }

        const data = await getDataApi.getDataAllSettled(urls, options)

        for (let i = countCurrency-1; i > -1; i--) {
            const condition = data[i] !== 'rejected' && Number(data[i])

            if(condition) { 
                currencyValues.push({[currencies[i]]: data[i].toFixed(2)})
            }
        } 

        const lengthUrls = currencyValues.length

        let htmlContent = ''
        let htmlContainer = ''

        for (let i = 0; i < lengthUrls; i++) {
            const currencyValue = currencyValues.pop()
            const key = Object.keys(currencyValue)
            const val = Object.values(currencyValue)

            if (i === 0) {
                htmlContent += `
                                <ul class="exchange__column-list">
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                `
            }
            else if (i === lengthUrls-1) {
                htmlContent += `
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                </ul>
                                `
            }
            else if (i % 3 === 0) {
                htmlContent += `
                                </ul>
                                <ul class="exchange__column-list">
                                    <li class="exchange__column-item">
                                        <h4 class="exchange__column-title">${key}:</h4>
                                        <p class="exchange__column-text">${val}</p>
                                    </li>
                                `
            } else {
                htmlContent += `
                                <li class="exchange__column-item">
                                    <h4 class="exchange__column-title">${key}:</h4>
                                    <p class="exchange__column-text">${val}</p>
                                </li>
                                `
            }
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
                            <img class="exchange__column-img" src=${building} alt="building-img"/>
                        </div>
                    </div>
                    <p class="exchange__text">
                        All courses
                    </p>
                </div>
            </div>
        </section>
        `

        ROOT_EXCHANGE.innerHTML = htmlContainer

    }
}

export default new Exchange()