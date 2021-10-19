import { siteSearch } from "../../api/user.service";
import { SET_SITE } from "../Constants/siteTypes";

const getSearch = (name: string) => async (
    dispatch: (arg0: { type: string; payload: any; }) => void,
    getState: () => { (): any; new(): any; loading: { (): any; new(): any; count: any; }; }) => {
    try {
        await siteSearch(name).then((res: any) => {
            console.log(res)
            if (res?.status === 200) {
                dispatch({ type: SET_SITE, payload: res?.data });
            }
        }).catch((err) => console.log(err))
    } catch (err:any) {
        const errors = err;
        console.log(err);
    }
};
export {
    getSearch,
}
