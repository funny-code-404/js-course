import { Component } from 'react';
import modeling from '../../assets/modeling.png';
import managment from '../../assets/managment.png';
import maintenance from '../../assets/maintenance.png'

import './styles.css';

class Servicies extends Component {
    render() {
        return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__cap-container">
                    <div className="services__cap-title">OUR CAPABILITIES
                        <hr className="services__cap-line"/>
                    </div> 
                    <div className="services__cap-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
                    <div className="services__cap-button"><button className="services__cap-button--disign">ALL SERVICES</button></div>
                </div>
                <div className="services__service-items">
                    <div className="services__service">
                        <div className="services__icon">
                            <img src={managment} alt="Pen and pencils" width="65" height="75"/>
                        </div>
                        <div className="services__charter">PROJECT AND CONSTRUCTION MANAGEMENT</div>
                        <div className="services__information-about-charter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
                    </div>
                    <div className="services__service">
                        <div className="services__icon">
                            <img src={maintenance} alt="House" width="65" height="75"/>
                        </div>
                        <div className="services__charter">STRUCTURE AUDIT AND MAINTENANCE</div>
                        <div className="services__information-about-charter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
                    </div>
                    <div className="services__service">
                        <div className="services__icon">
                            <img src={modeling} alt="House with colums" width="65" height="75"/>
                        </div>
                        <div className="services__charter">FACTORY CONSTRUCTION AND MODELING</div>
                        <div className="services__information-about-charter">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Servicies;