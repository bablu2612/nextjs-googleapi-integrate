import { SET_MOVIES } from "../Constants/moviesTypes";

const initialState = {
  movies: [],
  page: 0
};

const moviesReducer = (state = initialState, action: { type: string; payload: any; }) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload?.length > 0 ? payload : [] };
    default:
      return state;
  }
};

export default moviesReducer;