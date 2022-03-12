import { useContext, useState } from "react";
import { ExampleContext } from "../../../../context/ExampleContext";
import { ButtonsBlock } from "./components/ButtonsBlock";
import { RulesBlock } from "./components/RulesBlock";
import { AddRuleBlock } from "./components/AddRuleBlock";

export const ExampleRules = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="example_rules">
      <RulesBlock />
      {isOpen && (
        <AddRuleBlock
          setIsOpen={() => {
            setIsOpen((prev) => !prev);
          }}
        />
      )}
      <ButtonsBlock
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
    </div>
  );
};
