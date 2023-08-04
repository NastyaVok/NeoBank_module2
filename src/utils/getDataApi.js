class GetDataApi {

    async getData(url, options) {
		try {
			const response = await fetch(url, options)

            const result = await response.json()

            return result
		} catch (error) {
			console.log(error.message)

			return false
		}
	}

    async getDataAllSettled(urls, options) {
        const res = []
        const data = await Promise.allSettled(urls.map(url => fetch(url, options)))
        for (let el of data) {
            if (el.status === 'fulfilled') {
                const data = await el.value
                const json = await data.json()
                res.push(json)
            }
        }
        return res
    }
}

export const getDataApi = new GetDataApi()

