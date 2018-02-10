import React from 'react'
import './navigation.css'

class Navigation extends React.Component {

	handleCLick(id) {
		this.props.onClick(id)
	}

	render() {
		return (
		<nav>		
			<ul>
 	      <li><a href="#PSA" onClick={this.handleCLick.bind(this,'PSA')}>Integration and Automation<div className="mask"><img src={require("../../resources/images/psa.png")}/></div></a></li>
 	      <li><a href="#APP" onClick={this.handleCLick.bind(this,'APP')}>App Design and Production<div className="mask"><img src={require("../../resources/images/app.png")}/></div></a></li>
 	      <li><a href="#WEB" onClick={this.handleCLick.bind(this,'WEB')}>Online Presence and Web Design<div className="mask"><img src={require("../../resources/images/web.png")}/></div></a></li>
 	      <li><a href="#MGD" onClick={this.handleCLick.bind(this,'MGD')}>Marketing and Graphic Design<div className="mask"><img src={require("../../resources/images/mgd.png")}/></div></a></li>
 	      <li><a href="#DSC" onClick={this.handleCLick.bind(this,'DSC')}>Digital Strategy Consultations<div className="mask"><img src={require("../../resources/images/dsc.png")}/></div></a></li>
 	    </ul>
 	  </nav>
		)
	}
}

export default Navigation