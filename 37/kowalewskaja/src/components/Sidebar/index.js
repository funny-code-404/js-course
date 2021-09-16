import { Component } from "react";

class Sidebar extends Component {
  render() {
    const {isValid} = this.props;
    return (
      isValid && <aside>
       ASIDE
      </aside>
    );
  }
} 
export default Sidebar;


