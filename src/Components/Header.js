import React, { Component } from 'react';


class Header extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
     ;
    }

    

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            {/* <h1 className="responsive-headline">{name}</h1> */}
            <a href="https://fontmeme.com/fonts/great-victorian-font/"><img src="https://fontmeme.com/permalink/200222/a9b98e344582d83b190a856f9848fbba.png" alt="great-victorian-font" border="0"></img></a>
            
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
            <br />
            {/* <ul className="logos">
              <li><img src={("images/programLogos/iconfinder_React.js_logo_1174949.png")} alt="reactLogo"/></li>
              <li><img src={("images/programLogos/iconfinder_233_Node_Js_logo_4375017.png")} alt="nodeLogo"/></li>
              <li><img src={("images/programLogos/iconfinder_HTML_Logo_65687.png")} alt="HTMLLogo"/></li>
              <li><img src={("images/programLogos/iconfinder_css-3_4961937.png")} alt="HTMLLogo"/></li>
              
            </ul> */}
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

// this is the header
