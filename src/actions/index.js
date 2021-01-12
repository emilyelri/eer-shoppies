import axios from "axios";

export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const CHECK_NOM_PRESENCE = "CHECK_NOM_PRESENCE";
export const ADDING_NOM = "ADDING NOM";
export const REMOVING_NOM = "REMOVING_NOM";

export const getMovies = api => dispatch => {
  dispatch({ type: FETCH_MOVIES_START });
  axios
    .get(api)
    .then(response => {
      // console.log("Axios success:", response.data);
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      // console.log("Axios failed:", error);
      dispatch({ type: FETCH_MOVIES_FAIL, payload: error.message });
    });
};

export const updateNoms = (nom, noms) => dispatch => {
  dispatch({ type: CHECK_NOM_PRESENCE });
  if (noms.includes(nom)) {
    dispatch({ type: REMOVING_NOM, payload: nom })
  } else {
    dispatch({ type: ADDING_NOM, payload: nom })
  }
}