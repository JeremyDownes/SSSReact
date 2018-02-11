import React from 'react'
import './presentation.css'
import TypeText from '../TypeText/TypeText'
import Slide from '../Slide/Slide'

class Presentation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.count = 0
		this.changeSlide = this.changeSlide.bind(this)
		this.getSlide = this.getSlide.bind(this)
		this.timeout = setTimeout(this.changeSlide, this.props.slides[0].h2.length*150);

	}

	changeSlide() {		
		if(this.count < this.props.slides.length) {
			this.count++
			if (this.props.slides[this.count]) {
				this.timeout= setTimeout(this.changeSlide, this.props.slides[this.count].p? this.props.slides[this.count].p.length*70: this.props.slides[this.count].h2.length*120)
				this.setState({})
			}
		} else {
			this.count = -1
		}
	}

	getSlide() {
		if(this.props.slides[this.count]) {
			return this.props.slides[this.count]
		} else return this.props.slides[0]
	}

	componentWillReceiveProps(nextProps) {
		if(this.count>0) {
			clearTimeout(this.timeout)
			this.count = -1
			this.props = nextProps
			this.changeSlide()
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
			<section className='presentation' id="presentation">
		    <h1 style = {style}>{this.props.heading}</h1>
		    <Slide slide={this.getSlide()}/>
  		</section>
		)
	}
}

export default Presentation