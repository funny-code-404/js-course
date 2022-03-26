import { useContext } from "react";
import { ExampleContext } from "../../../../../../context/ExampleContext";

export const RulesBlock = () => {
  const { rules, setRules } = useContext(ExampleContext);
  const rulesArr = Object.entries(rules);
  return (
    <div className="rules">
      {rulesArr.map(([property, propertyValue], index) => {
        if (property !== "id" && property !== "name") {
          return (
            <div key={index}>
              {property}
              <input
                value={propertyValue}
                onChange={(e) => {
                  setRules((prev) => ({
                    ...prev,
                    [property]: e.target.value,
                  }));
                }}
              />
              <button
                onClick={() => {
                  delete rules[property];
                  setRules({ ...rules });
                }}
              >
                delete
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};
