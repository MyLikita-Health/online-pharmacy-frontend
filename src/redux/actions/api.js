import { apiURL } from "../action";
import store from "../store";

/**
 * _fetchApi()
 * helper function that fetches data from the database using a
 * specified route and performs the callback function on the returned data
 * @params route (string) => the api route
 * @params callback (func) => the action to perform on that data
 *      that is being returned
 */

const token = localStorage.getItem("@@__token");

const headers = { "Content-Type": "application/json", Authorization: token };
const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  // const { facilityId } = store.getState().auth.user;
  let actualURL = `${apiURL}/${url}`;
  fetch(actualURL, headers)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

const _fetchApi2 = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  // const { facilityId } = store.getState().auth.user;
  let actualURL = `${apiURL}/${url}`;
  fetch(actualURL, headers)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

const _fetchApiAsync = async (url, data = {}) => {
  try {
    const req = await fetch(url);

    return await req.json();
  } catch (error) {
    return error;
  }
};

/**
 * _postApi()
 * An helper function that posts data to the database
 * @params route (string) => the api route to submit on
 * @params data (object) => item to be submitted
 * @params callback => optional callback function
 */
const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // const { facilityId, username } = store.getState().auth.user;
  // data.facilityId = facilityId;
  // data.userId = username;
  let actualURL = `${apiURL}/${url}`;
  fetch(actualURL, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};

const _postApiAsync = async (url, data = {}) => {
  try {
    const { facilityId, username } = store.getState().auth.user;
    data.facilityId = facilityId;
    data.userId = username;
    const req = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    return await req.json();
  } catch (error) {
    return error;
  }
};

/**
 * _deleteData()
 * An helper function that deletes data from the database
 * @params route (String) => the api route
 * @params data (object) => object containing the details of
 * the item to be deleted
 * @params callback (func) => optional callback
 */
const _deleteApi = (
  route,
  data = {},
  callback = (f) => f,
  err_cb = (f) => f
) => {
  const { facilityId, username } = store.getState().auth.user;
  data.facilityId = facilityId;
  data.userId = username;
  let actualURL = `${apiURL}/${route}`;
  fetch(actualURL, {
    method: "DELETE",
    headers,
    body: data ? JSON.stringify(data) : null,
  })
    .then(function (response) {
      // if the status of the response is greater than 400, then error is returned
      if (response.status >= 400) {
        if (err_cb) err_cb();
      }
      if (callback) callback();
    })
    .catch(function (err) {
      return err_cb(err);
    });
};

const _updateApi = (
  url = "",
  data = [],
  success = (f) => f,
  error = (f) => f
) => {
  const { facilityId, username } = store.getState().auth.user;
  data.userId = username;
  data.facilityId = facilityId;
  let actualURL = `${apiURL}/${url}`;
  fetch(`${actualURL}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (response.status >= 400) {
        error(response);
      } else success();
    })
    .catch((err) => error(err));
};

const _fetchApiGeneral = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  let actualURL = `${apiURL}/${url}`;
  fetch(actualURL)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

export {
  _fetchApi,
  _postApi,
  _deleteApi,
  _updateApi,
  _fetchApi2,
  _fetchApiGeneral,
  _fetchApiAsync,
  _postApiAsync,
};
