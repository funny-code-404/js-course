import { useContext } from "react";
import { ExampleContext } from "../../../../context/ExampleContext";
import { nanoid } from "nanoid";
export const RefreshBlock = () => {
  const { setRules } = useContext(ExampleContext);
  return (
    <div
      onClick={() => {
        setRules({ id: nanoid(), name: "secondary" });
      }}
    >
      REFRESH ME
    </div>
  );
};
