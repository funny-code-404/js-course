import { Component } from 'react';

import './service.css';

import Serviceimg1 from '../../images/05.png'
import Serviceimg2 from '../../images/06.png'
import Serviceimg3 from '../../images/07.png'

class Service extends Component {
    
    render () {
       return (
          <section className="service" id="service">
            <div className="service__container container">
              <div className="service__header">
                <div className="servise__titile-section">
                  <h3 className="service__title titile">OUR CAPABILITIES</h3>
                  <hr className="service__underline underline-blue" />
                </div>
                <p className="service__subtitle subtext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat.
                </p>
                <button className="service__button button">ALL SERVICES</button>
              </div>
              
              <div className="service__row">
                <div className="service__column">
                  <div className="item-service">
                    <div className="item-service_icon">
                      <img
                      src={Serviceimg1}
                      alt="services-img"
                      decoding="async"
                      loading="lazy"
                      />
                    </div>
                    <div className="item-service_title">
                      PROJECT AND CONSTRUCTION MANAGEMENT
                    </div>
                    <div className="item-service_text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat.
                    </div>
                  </div>
                </div>
                <div className="service__column">
                  <div className="item-service">
                    <div className="item-service_icon">
                      <img
                      src={Serviceimg2}
                      alt="services-img"
                      decoding="async"
                      loading="lazy"
                      />
                    </div>
                    <div className="item-service_title">STRUCTURE AUDIT AND MAINTENANCE</div>
                      <div className="item-service_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                    </div>
                </div>
                </div>
                <div className="service__column">
                  <div className="item-service">
                    <div className="item-service_icon">
                      <img
                      src={Serviceimg3}
                      alt="services-img"
                      decoding="async"
                      loading="lazy"
                      />
                    </div>
                    <div className="item-service_title">FACTORY CONSTRUCTION AND MODELING</div>
                    <div className="item-service_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismodtincidunt ut laoreet dolore magna aliquam erat.
                    </div>
                </div>
              </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Service;