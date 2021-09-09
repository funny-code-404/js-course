import { Component } from 'react';
import './work.css';

class Work extends Component {
    
    render () {
       return (
          <section className="work" id="work">
            <div className="work__background-img">
              <div className="work__container container">
                <h2 className="work__title">Want to build something amazing?</h2>
                  <button className="work__button button">GET IN TOUCH</button>
              </div>
            </div>
          </section>
        );
    }
}

export default Work;