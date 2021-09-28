import { Component } from "react";

const withRegistration = (RenderedComponent) =>
  class extends Component {
    render() {
      return (
        <RenderedComponent {...this.props}>
          <form>
            <h3>Регистрация</h3>
            <input placeholder="Фамилия" />
            <input placeholder="Год рождения" />
            <input placeholder="Номер телефона" />
            <button>Зарегистрироваться</button>
            <br />
          </form>
        </RenderedComponent>
      );
    }
  };

export default withRegistration;
