import React from "react";
import './index.css';
import { breeds } from "./config";

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
                <ul className="nav-list" onClick={this.handleClick}>
                    {breeds.map((breed) => {
                        return <li className="nav-item"><button className="nav-btn" id={breed.id}>{breed.breed}</button></li>
                    })}
                </ul>
            </nav>
        );
    }

}

export default Navbar;