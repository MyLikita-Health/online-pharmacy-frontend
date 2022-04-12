
// import { apiURL } from "./index";
import { apiURL } from "../action";
import { GET_FACILITY_INFO, GETTING_FACILITY_INFO } from "./actionTypes";
import { _fetchApi } from "./api";

export function getFacilityInfo(cb = (f) => f) {
  return (dispatch) => {
    dispatch({ type: GETTING_FACILITY_INFO });
    _fetchApi(
      `${apiURL}/facility/info`,
      ({ results }) => {
        if (results) {
          if (Object.keys(results).length) {
            dispatch({ type: GET_FACILITY_INFO, payload: results });
          }
        }
        dispatch({ type: GETTING_FACILITY_INFO });
        cb(results);
      },
      ({ err }) => {
        console.log(err);
        dispatch({ type: GETTING_FACILITY_INFO });
      }
    );
  };
}
