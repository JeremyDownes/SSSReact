import React from 'react' 

class TypeText extends React.Component {
	constructor(props) {
		super(props)
		this.state={mission: this.props.message.split(''), message:[]}
		this.buildSlide = this.buildSlide.bind(this)
		this.interval = setInterval(this.buildSlide,80)
	}

	buildSlide() {
			if(this.state.mission.length > 0){
			let mission = this.state.mission
			let message = this.state.message
			message.push(mission.shift())
			this.setState({mission: mission, message: message})
		}	else {
			clearInterval(this.interval)
		}
	}

	render() {
		return(
    		<h2>{this.state.message}</h2>
		)
	}

}

export default TypeText