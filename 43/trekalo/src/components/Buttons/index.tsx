import { OrderExamples } from "./components/ExamplesOrder";
import { ExampleBlock } from "./components/ExampleBlock";
import { ExampleContextProvider } from "./context/ExampleContextProvider";
export const Buttons = () => {
  return (
    <ExampleContextProvider>
      <OrderExamples />
      <ExampleBlock />
    </ExampleContextProvider>
  );
};
