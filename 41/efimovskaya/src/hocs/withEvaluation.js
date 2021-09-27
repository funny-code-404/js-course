import { Component } from "react";

const withEvaluation = (RenderedComponent) =>
  class extends Component {
    render() {
      return (
        <RenderedComponent {...this.props}>
          <form>
            <div>
              <h3>Удаление аккаунта</h3>
              <textarea placeholder="Оставьте ваш отзыв"></textarea>
            </div>
            <div class="radio">
              <label>
                {" "}
                <input name="one" type="radio" value="1" /> 1
              </label>
              <label>
                <input name="two" type="radio" value="2" />2
              </label>
              <label>
                <input name="three" type="radio" value="3" />3
              </label>
              <label>
                <input name="three" type="radio" value="4" />4
              </label>
              <label>
                <input name="three" type="radio" value="5" />5
              </label>
            </div>
            <button>Отправить</button>
          </form>
        </RenderedComponent>
      );
    }
  };

export default withEvaluation;
