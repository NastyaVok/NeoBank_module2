import Header from '../Header'
import Cards from '../Cards'
import Features from '../Features'
import Exchange from '../Exchange'
import Services from '../Services'
import News from '../News'
import Support from '../Support'
import Footer from '../Footer'

class App {
	async render() {
		Header.render()
        Cards.render()
        Features.render()
        await Exchange.render()
        Services.render()
        await News.render()
        Support.render()
        Footer.render()
	}
}

export default new App()