import { Dispatch } from "react";
import {
  ExamplesActions,
  ExamplesType,
  ActionType,
  DispatchThunkActionType,
} from "./types";
import { RulesType } from "../../components/Buttons/context/ExampleContext";

export const ACTION_GET_EXAMPLES_DATA_REQUESTED = (): ActionType => ({
  type: ExamplesActions.GET_EXAMPLES_DATA_REQUSTED,
});

export const ACTION_GET_EXAMPLES_DATA_SUCCEED = (
  data: ExamplesType[]
): ActionType => ({
  type: ExamplesActions.GET_EXAMPLES_DATA_SUCCEED,
  payload: data,
});
//
export const ACTION_DELETE_EXAMPLES_DATA = (id: string): ActionType => ({
  type: ExamplesActions.DELETE_EXAMPLE_DATA,
  payload: id,
});

export const ACTION_ADD_EXAMPLE_DATA = (example: ExamplesType): ActionType => ({
  type: ExamplesActions.ADD_EXAMPLE_DATA,
  payload: example,
});
//
export const getExamples =
  (url: string) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());

    const response = await fetch(url);
    const data = await response.json();
    dispatch(ACTION_GET_EXAMPLES_DATA_SUCCEED(data));
  };

export const postExample =
  (url: string, example: RulesType) =>
  async (dispatch: Dispatch<DispatchThunkActionType | ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });

    dispatch(getExamples(url));
  };

export const deleteExample =
  (url: string, id: string) =>
  async (dispatch: Dispatch<DispatchThunkActionType | ActionType>) => {
    dispatch(ACTION_GET_EXAMPLES_DATA_REQUESTED());
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id }),
    });

    dispatch(getExamples(url));
  };
