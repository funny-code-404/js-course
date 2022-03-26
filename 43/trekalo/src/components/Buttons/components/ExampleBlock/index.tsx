import { ExampleRules } from "./components/ExampleRules";
import { ExampleView } from "./components/ExampleView";
export const ExampleBlock = () => {
  return (
    <div className="example_block">
      <ExampleView />
      <ExampleRules />
    </div>
  );
};
