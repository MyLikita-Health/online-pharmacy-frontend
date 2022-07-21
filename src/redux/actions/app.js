import { TOGGLE_MOBILE_VIEW, GET_SAVING_EXP } from "./types";
import { _fetchApi } from "./api";
import { apiURL } from "../action";

export const toggleMobileView = (screen) => ({
  type: TOGGLE_MOBILE_VIEW,
  payload: screen,
});

export function getExpenseSaving(type) {
  return (dispatch) => {
    _fetchApi(
      `${apiURL}/get_save_exp_data/new?type=${type}`,
      (data) => {
        if (data.results) {
          dispatch({
            type: GET_SAVING_EXP,
            payload: data.results,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
}
