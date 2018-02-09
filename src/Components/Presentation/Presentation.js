import React from 'react'
import './presentation.css'
import TypeText from '../TypeText/TypeText'

class Presentation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.slide = {mission: 'We couple industry specific automation tools with integrations tailored to your workflow',}
	}



	buildContent() {
		var message= [
		'Our automation integration service begins with brief strategy survey followed by an in-depth consultation with one of our Solutions Engineers.',
		'Over the course of several observation sessions and interviews with you and your critical staff we will develop a strategy for implementing our technologies and those of our trusted industry leading partners that will streamline and automate your workflow.',
		'Our solutions are ROI oriented and vendor neutral. We are not salespeople and will not push to implement technologies that are not proven to bring value.' 
		]
		return message
	}


	render() {
		let style = {}
		if(this.props.mobile) {
			style= {marginTop: '5rem'}
		} else if (!this.state.style) {
			this.setState({style: {backgroundPosition: 'center 80%'}})
		}
		setTimeout(()=> {
			let style = {backgroundImage: 'url('+require('../../resources/images/consultation.jpg')+')', backgroundPosition: 'center'}
			if(!this.props.mpbile) {style.backgroundPosition = 'center 120%'}
			this.setState({animationClass: 'slideleft'})
			this.setState({style: style})
		},13000)


		return (
			<section style = {this.state.style} className='presentation' id="PSA">
		    <h1 style = {style}>Automation Services</h1>
		    <TypeText message={this.slide.mission}/>
    		{this.buildContent().map(line=> <p> {line} </p>)}
    		<p><a href="#contact"><button>Start here</button></a></p>
  		</section>
		)
	}
}

export default Presentation