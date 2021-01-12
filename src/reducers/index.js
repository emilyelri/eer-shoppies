import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL
} from "../actions/";

const initialState = {
  data: [],
  nominations: [],
  isFetching: false,
  error: ""
};

const movieReducer = (state = initialState, action) => {
  // console.log("Reducer fired: ", action);
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;