import { useContext } from "react";
import styled from "styled-components";
import {
  ExampleContext,
  ExampleContextType,
  InitialContextArg,
} from "../../../../context/ExampleContext";

const Button = styled.button((props) => ({
  ...props.theme,
}));

export const ExampleView = () => {
  const { rules } = useContext<ExampleContextType | InitialContextArg>(
    ExampleContext
  );
  const { id, name, ...restRules } = rules;
  return (
    <div className="example_view">
      <Button theme={restRules}>Example</Button>
    </div>
  );
};
