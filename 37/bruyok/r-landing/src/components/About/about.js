import { Component } from "react";

import "./about.css";
import plan from "../../images/plan.jpg";
import manage from "../../images/manage.jpg";
import build from "../../images/build.jpg";

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="title about__title">
            OUR STORY
            <hr className="line" />
          </div>
          <div className="about__content">
            <div className="about__text">
              <h3 className="title about__title-medium">
                Founded in 2011 by John Mathew Smith,
                <span> Konstruct</span> has become the number one construction
                management firm
              </h3>
              <p className="about__subtitle subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat.
              </p>
            </div>

            <div className="about__items">
              <div className="about__item-img">
                <img src={plan} alt="we plan" />
                <p class="about__img-text">
                  we <br />
                  plan
                </p>
              </div>
              <div className="about__item-img">
                <img src={manage} alt="we manage" />
                <p class="about__img-text">
                  we <br />
                  manage
                </p>
              </div>
              <div className="about__item-img">
                <img src={build} alt="we build" />
                <p className="about__img-text">
                  we <br />
                  build
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
