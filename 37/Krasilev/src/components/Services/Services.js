import React from 'react'

import Services1 from '../../images/services-item1.png'
import Services2 from '../../images/services-item2.png'
import Services3 from '../../images/services-item3.png'
import './Services.css';

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <div className="services__top flex-jc-sb-center">
        <div className="services__top-box">
          <h2 className="services__top-title">OUR CAPABILITIES</h2>
          <div className="services__top-underline underline" />
        </div>
        <p className="services__top-text text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat.
        </p>
        <button className="btn-reset btn-primary services__top-btn" type="button">ALL SERVICES</button>
      </div>
      <div className="services__bottom flex-jc-sb-center">
        <div className="services__bottom-item">
          <img
            className="services__bottom-img"
            src={Services1}
            alt="services-item"
            decoding="async"
            loading="lazy"
            width="66"
            height="75"
          />
          <h3 className=" services__bottom-title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
          <p className="services__bottom-text text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh
            euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat.
          </p>
        </div>
        <div className="services__bottom-item">
          <img
            className="services__bottom-img"
            src={Services2}
            alt="services-item"
            decoding="async"
            loading="lazy"
            width="68"
            height="75"
          />
          <h3 className=" services__bottom-title">STRUCTURE AUDIT AND MAINTENANCE</h3>
          <p className="services__bottom-text text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh
            euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat.
          </p>
        </div>
        <div className="services__bottom-item">
          <img
            className="services__bottom-img"
            src={Services3}
            alt="services-item"
            decoding="async"
            loading="lazy"
            width="71"
            height="75"
          />
          <h3 className=" services__bottom-title">FACTORY CONSTRUCTION AND MODELING</h3>
          <p className="services__bottom-text text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh
            euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat.
          </p>
        </div>
      </div>
    </div>
  </section>
  )

export default Services;
