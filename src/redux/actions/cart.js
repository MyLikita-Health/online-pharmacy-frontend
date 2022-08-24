import { GETCART } from "./actionTypes";

export const getCart = (val) => {
  return (dispatch) => {
    dispatch({
      type: GETCART,
      payload: val,
    });
  };
};