import {
  LOADING,
  LOGIN,
  ERROR,
  LOGOUT,
  LOADING_AVATAR,
  LOAD_AVATAR,
  CREATING_USER,
  ERROR_CREATING_USER,
  // GET_ROLES,
  GET_USERS,
  RESTORE_TOKEN,
} from "./types";
import store from "../store";
import { getFacilityInfo } from "./facility";
import { apiURL } from ".";
import { _fetchApi, _postApi } from "./api";
import { generateAvatar } from "../../helpers";

const endpoint = "auth";

export function createUser(data = [], success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: CREATING_USER });
    // let token = store.getState().auth.token;
    _postApi(
      `${apiURL}/${endpoint}/sign-up`,
      data,
      (result) => {
        // console.log(result);
        if (result.errors) {
          let err = Object.values(result.errors);
          error(err[0]);
          dispatch({ type: ERROR_CREATING_USER, payload: err[0] });
        } else {
          dispatch({ type: CREATING_USER });
          success();
        }
      },
      (err) => {
        // console.log(err);
        dispatch({ type: ERROR_CREATING_USER, payload: err });
      }
    );
  };
}

export function saveUserData(data) {
  localStorage.setItem("@@__token", data);
}

export function login({ email, password }, callback, error) {
  return (dispatch) => {
    dispatch(userLogin({ email, password }, callback, error));
  };
}

export function doctorLogin({ username, password }, callback, error) {
  return (dispatch) => {
    fetch(`${apiURL}/${endpoint}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.error) {
          error(data.error);
          dispatch({ type: ERROR, payload: data.error });
        } else {
          localStorage.setItem("user", data.user.username);
          saveUserData(data);
          dispatch({ type: LOGIN, payload: data });
          callback();
        }
      })
      .catch((err) => {
        error(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export function userLogin(
  { email, password },
  cb = (f) => f,
  error = (f) => f
) {
  // return (dispatch) => {
  fetch(`${apiURL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((raw) => raw.json())
    .then((data) => {
      if (data.error) {
        error(data.error);
        // console.log(data);
        // dispatch({ type: ERROR, payload: data.error });
      } else {
        localStorage.setItem("@@__token", data.token);
        // dispatch({ type: LOGIN, payload: data });
        cb();
      }
    })
    .catch((err) => {
      error(err);
      // dispatch({ type: ERROR, payload: err });
    });
  // };
}

export function authLoading() {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
}

export function checkAuthStatus(success, error) {
  localStorage.getItem("@@__token");
}

export function logout(callback = (f) => f) {
  return (dispatch) => {
    // console.log('dispatching logout');
    // authDB.get('user').then((data) => {
    //   data._deleted = true;
    //   authDB.put(data);
    // });
    dispatch({ type: LOGOUT });
    localStorage.removeItem("@@__token");
    callback();
  };
}

export function loadUser(err = (f) => f, cb = (f) => f) {
  let user = localStorage.getItem("@@__token");
  return (dispatch) => {
    user
      .get("@@__token")
      .then(({ user }) => {
        dispatch({ type: LOGIN, payload: user });
        dispatch(getFacilityInfo(cb));
      })
      .catch(() => err());
  };
}
export function initUser(history = null, callback = (f) => f) {
  return (dispatch) => {
    let token = localStorage.getItem("@@__token");
    // console.log(token)
    if (token) {
      /**
       * Token present
       * verifyToken */
      verifyToken(token)
        .then((data) => {
          console.log(data, "PPPEPEPEPEPE", token);
          if (data.success) {
            dispatch({ type: LOGIN, payload: data });
            dispatch({ type: RESTORE_TOKEN, payload: token });
            localStorage.setItem("@@__token", token);
            callback();
            console.log("success");
          } else {
            callback();
            localStorage.removeItem("@@__token");
            history("/");
            console.log("Token expired");
            dispatch({ type: LOGOUT });
          }
        })
        .catch((err) => {
          callback();
          localStorage.removeItem("@@__token");
          history("/");
          console.log("Token expired");
          dispatch({ type: LOGOUT });
        });
    } else {
      /**
       * No token found
       * navigate user to auth page
       */
      callback();
      // history("/");
    }
  };
}

async function verifyToken(token) {
  try {
    let response = await fetch(`${apiURL}/auth/verify-token`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("EERRRRROOORRR:", error);
  }
}

export function loadUserAvatar() {
  return (dispatch) => {
    // console.log('loading');
    dispatch({ type: LOADING_AVATAR });
    let user = store.getState().auth.user;
    if (user) {
      if (user.image) {
        let avatar = user.image;
        dispatch({ type: LOAD_AVATAR, avatar });
        dispatch({ type: LOADING_AVATAR });
      } else {
        let { firstname, lastname } = user;
        let avatar = generateAvatar(firstname, lastname);
        dispatch({ type: LOAD_AVATAR, avatar });
        dispatch({ type: LOADING_AVATAR });
      }
    }
  };
}

export function getUsers() {
  return (dispatch) => {
    _fetchApi(
      `${apiURL}/users`,
      ({ results }) => {
        dispatch({ type: GET_USERS, payload: results });
      },
      (err) => {
        console.log(err);
        //
      }
    );
  };
}
