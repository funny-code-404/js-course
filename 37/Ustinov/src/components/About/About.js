import { Component } from 'react';
import './about.css';

class About extends Component {
    
    render () {
       return (
            <section className="about" id="about">
              <div className="about__container container">
                <div className="about__header">
                  <h3 className="about__title titile">OUR STORY</h3>
                  <hr className="about__underline underline-blue" />
                </div>

                <div className="about__body">
                  <div className="about__box-left">
                    <h3 className="about__text">Founded in 2011 by John Mathew <br />
                    Smith, <span className="about__text-blue">Konstruct</span> has become the number one construction management firm</h3>


                    <p className="about__subtext subtext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat.</p>
                  </div>

                  <div className="about__box-right">
                    <div className="item-about__column1">
                      <p className="item-about__text">WE PLAN</p>
                    </div>

                    <div className="item-about__column2">
                      <p className="item-about__text">WE MANAGE</p>
                    </div>

                    <div className="item-about__column3">
                      <p className="item-about__text">WE BUILD</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}

export default About;