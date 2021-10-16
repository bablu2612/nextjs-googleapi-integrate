import { SET_SITE_LOCATION } from "../Constants/siteTypes";

const initialState = {
    siteLocationData: [],
};

const siteLocationReducer = (state = initialState, action: { type: string; payload: any; }) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SITE_LOCATION:
            return { ...state, siteLocationData: payload?.length > 0 ? payload : [] };
        default:
            return state;
    }
};

export default siteLocationReducer;