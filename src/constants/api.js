import { CURRENCY, NEWS } from "../../apiKeys"

export const API_KEY_CURRENCY = CURRENCY
export const API_HOST_CURRENCY = 'currency-exchange.p.rapidapi.com'

const EXCHANGE = 'exchange'

export const API_URL_CURRENCY = 'https://'+ API_HOST_CURRENCY + '/' + EXCHANGE

export const API_KEY_NEWS = NEWS
export const API_HOST_NEWS = 'newsapi.org'

const COUNTRY = 'us'
const SIZE = '40'
const CATEGORY = 'business'

export const API_URL_NEWS = 'http://' + API_HOST_NEWS + `/v2/top-headlines?country=${COUNTRY}&pageSize=${SIZE}&category=${CATEGORY}`
