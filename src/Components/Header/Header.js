import React from 'react'
import './header.css'

class Header extends React.Component {
	render() {
		return (
    <header>
      <div className="logo-container">
	      <img src={require("../../resources/images/SunshineStateSoftwareLogoBase.png")}/>
  	    <div className="sun-effect"></div>
    	  <img src={require("../../resources/images/SunshineStateSoftwareLogoTop.png")} className="overlay"/>
  	  </div>
  	  <div class="title-container">
  	    <h1>Sunshine State Software</h1>
  	  </div>
  	</header>
		)
	}
}

export default Header