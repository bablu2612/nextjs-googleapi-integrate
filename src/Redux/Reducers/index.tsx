import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer"
import siteDetailReducer from "./siteDetail";
import siteReducer from "./siteReducer";
import siteLocationReducer from "./sitLocationReducer";

export default combineReducers({
  moviesData: moviesReducer,
  siteData: siteReducer,
  siteLocationData: siteLocationReducer,
  siteDetailData: siteDetailReducer
});
