import { SET_SITE } from "../Constants/siteTypes";

const initialState = {
    siteData: [],
};

const siteReducer = (state = initialState, action: { type: string; payload: any; }) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SITE:
            return { ...state, siteData: payload?.length > 0 ? payload : [] };
        default:
            return state;
    }
};

export default siteReducer;