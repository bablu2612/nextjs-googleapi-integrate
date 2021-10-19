import { combineReducers } from "redux";
import siteDetailReducer from "./siteDetail";
import siteReducer from "./siteReducer";
import siteLocationReducer from "./sitLocationReducer";

export default combineReducers({
  siteData: siteReducer,
  siteLocationData: siteLocationReducer,
  siteDetailData: siteDetailReducer
});
