import { useReducer } from "react";
import { SET_GLOBAL_VALUE } from "./GlobalReducer";

export default function useGlobalReducer(GlobalReducer, initialState) {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setGlobalValue = (keyValue, value) => {
    dispatch({
      type: SET_GLOBAL_VALUE,
      payload: {
        keyValue,
        value,
      },
    });
  };
  return {
    ...state,
    setGlobalValue,
  };
}
