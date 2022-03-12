import { nanoid } from "nanoid";
import React, { createContext } from "react";
export type RulesType = {
  id: string;
  name: string;
  [key: string]: string;
};
export type InitialContextArg = {
  rules: { id: string; name: string; [key: string]: string };
  setRules: () => {};
};
export type ExampleContextType = {
  rules: RulesType;
  setRules: React.Dispatch<React.SetStateAction<RulesType>>;
};

export const ExampleContext = createContext<
  ExampleContextType | InitialContextArg
>({
  rules: { id: "1", name: "secondary" },
  setRules: () => {},
});
