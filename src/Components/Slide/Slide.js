import React from 'react'
import TypeText from '../TypeText/TypeText'

class Slide extends React.Component {

	assembleSlide () {
		if(this.props.slide.h2) {
			return <TypeText message={this.props.slide.h2} />
		}
		if(this.props.slide.p){
			return<p>{this.props.slide.p}</p>
		}
	}

	render() {
		let slide = this.assembleSlide()
		console.log(slide)
		return(
			<div className='presentation' style={{backgroundImage: 'url('+this.props.slide.imgSrc+')'}}>
			{slide}
			</div>
		)
	}
}

export default Slide