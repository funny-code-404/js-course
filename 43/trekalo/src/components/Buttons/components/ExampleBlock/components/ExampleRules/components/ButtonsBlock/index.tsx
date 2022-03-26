import { nanoid } from "nanoid";
import { useContext } from "react";
import { ExampleContext } from "../../../../../../context/ExampleContext";
import { useDispatch } from "react-redux";
import { postExample } from "../../../../../../../../ducks/examplesHTMLElement/actions";
type Props = {
  onClick: () => void;
};

export const ButtonsBlock = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const { rules, setRules } = useContext(ExampleContext);
  return (
    <div className="btns_block">
      <button className="add_btn" onClick={onClick}>
        Add rule
      </button>
      <button
        className="submit_btn"
        onClick={() => {
          dispatch(
            postExample(
              "https://blooming-everglades-11675.herokuapp.com/buttons",
              rules
            )
          );
          setRules({ id: "1", name: "secondary" });
        }}
      >
        Submit
      </button>
    </div>
  );
};
