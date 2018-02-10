import React from 'react'
import './presentation.css'
import TypeText from '../TypeText/TypeText'
import Slide from '../Slide/Slide'

class Presentation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {slide: this.props.slides[0]}
		this.changeSlide = this.changeSlide.bind(this)
		this.interval = setInterval(this.changeSlide,10000)
		this.count = 0
	}

	changeSlide() {
		if(this.count < this.props.slides.length-1) {
			this.count++
			if (this.props.slides[this.count]) {
				this.setState({slide: this.props.slides[this.count]})
			}
		} else {
			clearInterval(this.interval)
		}
	}


	render() {

		let style = {}
		if(this.props.mobile) {
			style= {marginTop: '5rem'}
		} else if (!this.state.style) {
			this.setState({style: {backgroundPosition: 'center 80%'}})
		}

		return (
			<section className='presentation' id="PSA">
		    <h1 style = {style}>{this.props.heading}</h1>
		    <Slide slide={this.state.slide}/>
  		</section>
		)
	}
}

export default Presentation