import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Navigation from '../Navigation/Navigation'
import Presentation from '../Presentation/Presentation'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './app.css'
class App extends React.Component {

	constructor(props) {
		super(props) 
		this.probablyMobile = window.innerHeight > window.innerWidth ? true : false
	}
	render() {
		return (
			<div>
			<Header mobile={this.probablyMobile}/>
			<Banner mobile={this.probablyMobile}/>
			<Navigation mobile={this.probablyMobile}/>
		  <Presentation mobile={this.probablyMobile}/>
			<Contact mobile={this.probablyMobile}/>
			<Footer mobile={this.probablyMobile}/>
			</div>
		)
	}
}

export default App;