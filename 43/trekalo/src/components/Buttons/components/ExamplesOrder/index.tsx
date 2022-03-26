import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExamples,
  deleteExample,
} from "../../../../ducks/examplesHTMLElement/actions";
import {
  getDataExamplesSelector,
  getLoadingExamplesSelector,
} from "../../../../ducks/examplesHTMLElement/selectors";
import { ExampleContext } from "../../context/ExampleContext";
import { RefreshBlock } from "./components/RefreshBlock";
import { LoadingBlock } from "./components/LoadingBlock";
import "./style.css";

export const OrderExamples = () => {
  const preloaderExamples = useSelector(getLoadingExamplesSelector);
  const dataExamples = useSelector(getDataExamplesSelector);
  const { setRules } = useContext(ExampleContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getExamples("https://blooming-everglades-11675.herokuapp.com/buttons")
    );
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div className="order_with_examples">
        {dataExamples.map((item) => (
          <div key={item.id}>
            <span
              onClick={() => {
                setRules({ ...item });
              }}
            >
              {item.id}
            </span>
            <button
              onClick={() => {
                dispatch(
                  deleteExample(
                    "https://blooming-everglades-11675.herokuapp.com/buttons",
                    item.id
                  )
                );
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <RefreshBlock />
        {preloaderExamples && <LoadingBlock />}
      </div>
    </div>
  );
};
