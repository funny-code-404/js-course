import React from 'react'

import './About.css'

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="about__title h2">OUR STORY</h2>
      <div className="about__underline underline" />
      <div className="about__box flex-js-sb">
        <div className="about__left">
          <p className="about__left-text">
            Founded in&nbsp;2011 by&nbsp;John Mathew Smith,
            <span className="about__left-accent">Konstruct</span>
            {' '}
            has become
            the number
            one construction management firm
          </p>
          <p className="about__left-lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh
            euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut&nbsp;laoreet dolore magna aliquam erat.
          </p>
        </div>
        <div className="about__box-right flex">
          <div className="about__box-img about__box-img1">
            <p className="about__box-text">
              WE
              <br />
              {' '}
              PLAN
            </p>
          </div>
          <div className="about__box-img about__box-img2">
            <p className="about__box-text">
              {' '}
              WE
              <br />
              MANAGE
            </p>
          </div>
          <div className="about__box-img about__box-img3">
            <p className="about__box-text">
              WE
              <br />
              BUILD
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )

export default About;
