import React from "react";
import './index.css';

class Navbar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    handleClick = (e) => {
        const breed = e.target.getAttribute("id");
        this.props.getDogImg(breed);
    }

    render () {
        return(
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><button className="nav-btn" id="akita" onClick={this.handleClick}>Akita</button></li>
                    <li className="nav-item"><button className="nav-btn" id="chow" onClick={this.handleClick}>Chow</button></li>
                    <li className="nav-item"><button className="nav-btn" id="boxer" onClick={this.handleClick}>Boxer</button></li>
                    <li className="nav-item"><button className="nav-btn" id="husky" onClick={this.handleClick}>Husky</button></li>
                    <li className="nav-item"><button className="nav-btn" id="mix" onClick={this.handleClick}>Mix</button></li>
                </ul>
            </nav>
        );
    }

}

export default Navbar;