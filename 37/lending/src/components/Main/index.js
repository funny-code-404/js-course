import { Component } from "react";

import four from "../../img/4.png";
import five from "../../img/4.png";
import six from "../../img/4.png";

import "./style.css";

class Main extends Component {
  render() {
    return (
      <main>
        <section className="story">
          <div className="story__header">
            <h3>OUR STORY</h3>
          </div>
          <article className="story__text">
            <p>
              Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has
              become the number one construction management firm
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </article>
          <article className="story__pictures">
            <div className="story__picture1 text">
              <p>WE</p>
              <p>PLAN</p>
            </div>
            <div className="story__picture2 text">
              <p>WE</p>
              <p>MANAGE</p>
            </div>
            <div className="story__picture3 text">
              <p>WE</p>
              <p>BUILD</p>
            </div>
          </article>
        </section>
        <section className="capabilities">
          <div className="”capabilities__header”">
            <h3>OUR CAPABILITIES</h3>
            {/* <!-- <img src="img/Line.png" alt="line" /> --> */}
          </div>
          <article className="capabilities__text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </article>
          <article className="capabilities__services">
            <input type="button" value="ALL SERVICES" />
          </article>
        </section>
        <section className="skills">
          <article className="skills__manage text">
            <img src={four} alt="" />
            <h4>PROJECT AND CONSTRUCTION MANAGEMENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </article>
          <article className="skills__audit text">
            <img src={five} alt="" />
            <h4>STRUCTURE AUDIT AND MAINTENANCE</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </article>
          <article className="skills__factory text">
            <img src={six} alt="" />
            <h4>FACTORY CONSTRUCTION AND MODELING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </article>
        </section>
      </main>
    );
  }
}

export default Main;
