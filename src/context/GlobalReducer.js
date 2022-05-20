export const SET_GLOBAL_VALUE = "setGlobalValue";
export const formValue = "formValue";
export const countryDetailsModal = "countryDetailsModal";

export const initialState = {
  formValue: {},
  countryDetailsModal: {
    active: false,
    code: null,
  },
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
