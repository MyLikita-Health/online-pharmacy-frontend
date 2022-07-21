import { TOGGLE_MOBILE_VIEW, GET_SAVING_EXP, CARTLIST } from "../actions/types";

const initialState = {
  isMobile: false,
  saving_exp: [],
  cartList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_VIEW:
      return {
        ...state,
        isMobile: action.payload,
      };
    case GET_SAVING_EXP:
      return {
        ...state,
        saving_exp: action.payload,
      };
    case CARTLIST:
      return {
        ...state,
        cartList: action.payload,
      };
    default:
      return state;
  }
};
