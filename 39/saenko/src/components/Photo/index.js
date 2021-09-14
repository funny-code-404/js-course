import React from "react";

class Photo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <img src={this.props.image} alt="Some random dog" />
        );
    }
}

export default Photo;