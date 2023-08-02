class GetDataApi {

    async getData(url, options) {
		try {
			const response = await fetch(url, options);

            const result = await response.json()

            return result
		} catch (error) {
			console.log(error.message)

			return reject
		}
	}

    async getDataAllSettled(urls, options) {

       return Promise.allSettled(urls.map(url => this.getData(url, options)))
        .then(resp => resp.map(el => el.status === 'fulfilled' ? el.value : el.status))
    }
}

export const getDataApi = new GetDataApi()

