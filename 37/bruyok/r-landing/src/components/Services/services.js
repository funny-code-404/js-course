import { Component } from "react";

import Bitmap1 from "../../images/Bitmap-1.png";
import Bitmap2 from "../../images/Bitmap-2.png";
import Bitmap3 from "../../images/Bitmap-3.png";

import "./services.css";

class Services extends Component {
  render() {
    return (
      <section id="services" className="servises">
        <div className="container">
          <div className="servises__title-block">
            <div className="title servises__title">
              OUR CAPABILITIES
              <hr className="line" />
            </div>
            <p className="servises__subtitle subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
            <button className="button sirvise__button">ALL SERVICES</button>
          </div>

          <div className="servises__items-block">
            <div className="servises__item">
              <img className="servises__img" src={Bitmap1} alt="bitmap-1" />
              <div className="servises__text">
                <h3 className="title servises__title-medium">
                  PROJECT AND CONSTRUCTION MANAGEMENT
                </h3>
                <p className="servises__item-subtitle subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat.
                </p>
              </div>
            </div>
            <div className="servises__item">
              <img className="servises__img" src={Bitmap2} alt="bitmap-2" />
              <div className="servises__text">
                <h3 className="title servises__title-medium">
                  STRUCTURE AUDIT AND MAINTENANCE
                </h3>
                <p className="servises__item-subtitle subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat.
                </p>
              </div>
            </div>
            <div className="servises__item">
              <img className="servises__img" src={Bitmap3} alt="bitmap-3" />
              <div className="servises__text">
                <h3 className="title servises__title-medium">
                  FACTORY CONSTRUCTION AND MODELING
                </h3>
                <p className="servises__item-subtitle subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
