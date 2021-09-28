import { Component } from "react";

const withLogin = (RenderedComponent) =>
  class extends Component {
    render() {
      return (
        <RenderedComponent {...this.props}>
          <form>
            <h3>Вход</h3>
            <input type="checkbox" />
            <label>Оставлять меня в системе</label>
          </form>
        </RenderedComponent>
      );
    }
  };

export default withLogin;
