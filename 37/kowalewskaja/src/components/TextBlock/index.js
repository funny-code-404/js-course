import { Component } from "react";

class TextBlock extends Component {
  render() {
    console.log(this.props.children)
    return (
      
        <div>TEXT
         </div>
      
    );
  }
}
export default TextBlock;