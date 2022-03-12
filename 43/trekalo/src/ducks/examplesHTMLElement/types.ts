import { Dispatch } from "react";

export type ExamplesType = {
  id: string;
  name: string;
  [key: string]: string;
};
export type InitialExamplesState = {
  data: ExamplesType[];
  isLoading: boolean;
};
export type ActionType =
  | GetExamplesDataSucceedType
  | GetExamplesDataRequestedType;

export type GetExamplesDataSucceedType = {
  type: string;
  payload: ExamplesType[];
};
export type GetExamplesDataRequestedType = {
  type: string;
  payload?: any;
};
// export type GetExamplesDataRequestedType = {
//   type: string;
//   payload?: any;
// };
// export type GetExamplesDataRequestedType = {
//   type: string;
//   payload?: any;
// };
export enum ExamplesActions {
  GET_EXAMPLES_DATA_REQUSTED = "GET_EXAMPLES_DATA_REQUSTED",
  GET_EXAMPLES_DATA_SUCCEED = "GET_EXAMPLES_DATA_SUCCEED",
  DELETE_EXAMPLE_DATA = "DELETE_EXAMPLE_DATA",
  ADD_EXAMPLE_DATA = "ADD_EXAMPLE_DATA",
}

export type DispatchThunkActionType = (
  dispatch: Dispatch<ActionType>
) => Promise<void>;
