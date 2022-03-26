import { InitialExamplesState, ExamplesType } from "./types";
type State = {
  examples: InitialExamplesState;
};
export const getDataExamplesSelector = (state: State): ExamplesType[] =>
  state.examples.data;
export const getLoadingExamplesSelector = (state: State): boolean =>
  state.examples.isLoading;
