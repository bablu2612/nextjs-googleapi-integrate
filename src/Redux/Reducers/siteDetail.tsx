import { SET_SITE_DETAIL } from "../Constants/siteTypes";

const initialState = {
    siteDetailData: [],
};

const siteDetailReducer = (state = initialState, action: { type: string; payload: any; }) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SITE_DETAIL:
            return { ...state, siteDetailData: payload };
        default:
            return state;
    }
};

export default siteDetailReducer;