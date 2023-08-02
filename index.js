import App from './components/App'
import Exchange from './components/Exchange'

(async () => {
	await App.render()
	await setInterval(Exchange.render, 900000)
})()
