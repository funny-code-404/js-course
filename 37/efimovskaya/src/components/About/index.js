import { Component } from 'react';

import './styles.css'

class About extends Component {
  render() {
      return (
      <section className="information-about" id="about">
      <div className="container">
          <div className="information-about__title">
              <h3 className="information-about__title--title-style">OUR STORY</h3>
              <hr className="information-about__line"/>
          </div>
          <div className="infomation-about__container">
              <div className="information-about__history">
                  <p className="information-about__history-title">Founded in 2011 by John Mathew Smith, <span className="information-about--konstruct-item-color">Konstruct</span> has become the number one construction management firm</p>
                  <p className="information-about__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
              </div>
              <div className="information-about__container-for-images">
                  <div className="information-about__images" >
                      <div className="information-about__image--style-for-image-for-plan">
                          <h3 className="information-about__tagline">WE <br/> PLAN</h3>
                      </div>
                  </div>
                  <div className="information-about__images " >
                      <div className="information-about__image--style-for-image-for-manage">
                          <h3 className="information-about__tagline">WE<br/> MANAGE</h3>
                      </div> 
                  </div>
                  <div className="information-about__images" >
                      <div className="information-about__image--style-for-image-for-build">
                          <h3 className="information-about__tagline">WE<br/> BUILD</h3>
                      </div>
                  </div>     
              </div>
          </div>
      </div>
  </section>
  )
}
}

export default About;
