import { nanoid } from "nanoid";
import { useState } from "react";
import { RulesType } from "./ExampleContext";
import { ExampleContext } from "./ExampleContext";
type ExampleContextProviderType = {
  children: React.ReactChild | React.ReactNode;
};

export const ExampleContextProvider = ({
  children,
}: ExampleContextProviderType) => {
  const [rules, setRules] = useState<RulesType>({
    id: nanoid(),
    name: "secondary",
  });
  return (
    <ExampleContext.Provider value={{ rules, setRules }}>
      {children}
    </ExampleContext.Provider>
  );
};
