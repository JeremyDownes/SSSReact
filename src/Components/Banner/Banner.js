import React from 'react'
import './banner.css'

class Banner extends React.Component {
	render() {
		return (
			<section className="intro">
	      <h3>Strategic Software Solutions</h3>
	      <h5>From Startup to Enterprise Organization</h5>
        <div className="jumbotron">
          <div>      
            <p>Software can seem scary. <br/> We're here to help.
            <a href="#contact"><button>Start here</button></a></p>
          </div>
       </div>
    </section>
		)
	}
}

export default Banner