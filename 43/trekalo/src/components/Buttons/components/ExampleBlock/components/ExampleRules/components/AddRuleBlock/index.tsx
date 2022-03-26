import React, { useContext, useRef, useState } from "react";
import { ExampleContext } from "../../../../../../context/ExampleContext";
import "./style.css";
type AddRuleBlockType = {
  setIsOpen: () => void;
};
export const AddRuleBlock = ({ setIsOpen }: AddRuleBlockType) => {
  const [values, setValues] = useState({ property: "", propertyValue: "" });
  const { setRules } = useContext(ExampleContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="addRule_block">
      <input name="property" value={values.property} onChange={handleChange} />:
      <input
        name="propertyValue"
        value={values.propertyValue}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          if (values.property && values.propertyValue) {
            setRules((prev) => ({
              ...prev,
              [values.property]: values.propertyValue,
            }));

            setIsOpen();
          }
        }}
      >
        Add rule
      </button>
      <button onClick={() => setIsOpen()}>close</button>
    </div>
  );
};
