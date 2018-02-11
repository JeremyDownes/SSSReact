import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Navigation from '../Navigation/Navigation'
import Presentation from '../Presentation/Presentation'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Slides from '../../resources/Slides/Slides'
import './app.css'
class App extends React.Component {

	constructor(props) {
		super(props) 
		this.probablyMobile = window.innerHeight > window.innerWidth ? true : false
		this.state= {section: Slides.aboutUs}
		this.changeSection = this.changeSection.bind(this)
	}

	changeSection(id) {
		this.setState({section: Slides[id]})
	}

	render() {
		return (
			<div>
			<Header mobile={this.probablyMobile}/>
			<Banner mobile={this.probablyMobile}/>
			<Navigation mobile={this.probablyMobile} onClick={this.changeSection}/>
		  <Presentation mobile={this.probablyMobile} heading={this.state.section.h1} slides={this.state.section.slides}/>
			<Contact mobile={this.probablyMobile}/>
			<Footer mobile={this.probablyMobile}/>
			</div>
		)
	}
}

export default App;