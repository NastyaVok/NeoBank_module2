export const API_KEY_CURRENCY = '558d167f94mshb1e9836246f2a98p1a5ad9jsn6de8308cea88'
export const API_HOST_CURRENCY = 'currency-exchange.p.rapidapi.com'

const EXCHANGE = 'exchange'

export const API_URL_CURRENCY = 'https://'+ API_HOST_CURRENCY + '/' + EXCHANGE

export const API_KEY_NEWS = 'acb62ce1bbca44248f9ffbb8faf7db31'
export const API_HOST_NEWS = 'newsapi.org'

const COUNTRY = 'us'
const SIZE = '40'
const CATEGORY = 'business'

export const API_URL_NEWS = 'https://' + API_HOST_NEWS + `/v2/top-headlines?country=${COUNTRY}&pageSize=${SIZE}&category=${CATEGORY}`
