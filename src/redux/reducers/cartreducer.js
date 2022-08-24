import { GETCART } from "../actions/actionTypes";

const initialState = {
  getCart: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GETCART:
      return {
        ...state,
        getCart: action.payload,
      };

    default:
      return state;
  }
}