import axios from "axios";

export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";

export const getMovies = api => dispatch => {
  dispatch({ type: FETCH_MOVIES_START });
  axios
    .get(api)
    .then(response => {
      console.log("Axios success:", response.data);
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log("Axios failed:", error);
      dispatch({ type: FETCH_MOVIES_FAIL, payload: error.message });
    });
};