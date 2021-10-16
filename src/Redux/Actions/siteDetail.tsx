import { siteDetail, siteLocation } from "../../api/user.service";
import { SET_SITE_DETAIL } from "../Constants/siteTypes";

const getSiteDetail = (siteId: string) => async (
    dispatch: (arg0: { type: string; payload: any; }) => void,
    getState: () => { (): any; new(): any; loading: { (): any; new(): any; count: any; }; }) => {
    try {
        await siteDetail(siteId).then((res: any) => {
            if (res?.status === 200) {
                dispatch({ type: SET_SITE_DETAIL, payload: res?.data.results });
            }
        }).catch((err) => console.log(err))
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(err.response.data);
    }
};
export {
    getSiteDetail,
}
