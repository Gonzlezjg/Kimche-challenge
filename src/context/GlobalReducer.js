export const SET_GLOBAL_VALUE = "setGlobalValue";
export const formValue = "formValue";

export const initialState = {
  formValue: {

  }
};

export default function GlobalReducer(state, actions) {
  const { type, payload } = actions;

  switch (type) {
    case SET_GLOBAL_VALUE:
      return {
        ...state,
        [payload.keyValue]: payload.value,
      };
    default:
      return state;
  }
}
