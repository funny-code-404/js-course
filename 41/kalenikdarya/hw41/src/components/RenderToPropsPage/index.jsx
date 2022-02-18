import styles from "./styles.css";

function RenderToPropsPage(props) {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form>
          {props.render()}
          <h3>Registration</h3>
          <input type="text" name="LastName" placeholder="Last name"></input>
          <input
            type="text"
            name="BirthdayYear"
            placeholder="Birthday Year"
          ></input>
          <input
            type="text"
            name="PhoneNumber"
            placeholder="Phone Number"
          ></input>
          <button>Sign up</button>
        </form>
      </div>
      <div className="form">
        <form>
          {props.render()}
          <h3>Log in</h3>
          <label>Keep me logged in</label>
          <input type="checkbox" />
          <button>Log in</button>
        </form>
      </div>
      <div className="form">
        <form>
          {props.render()}
          <h3>Delete account</h3>
          <input type="textarea" placeholder="Leave feedback" />
          <label>Rate the app</label>
          <label>0</label>
          <input type="radio" name="rate" value="0" />
          <label>1</label>
          <input type="radio" name="rate" value="1" />
          <label>2</label>
          <input type="radio" name="rate" value="2" />
          <label>3</label>
          <input type="radio" name="rate" value="3" />
          <label>4</label>
          <input type="radio" name="rate" value="4" />
          <label>5</label>
          <input type="radio" name="rate" value="5" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
export default RenderToPropsPage;
