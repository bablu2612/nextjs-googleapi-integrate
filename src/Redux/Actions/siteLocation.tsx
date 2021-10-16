import { siteLocation } from "../../api/user.service";
import { SET_SITE_LOCATION } from "../Constants/siteTypes";

const getLocation = (latitude: number, langitude: number) => async (
    dispatch: (arg0: { type: string; payload: any; }) => void,
    getState: () => { (): any; new(): any; loading: { (): any; new(): any; count: any; }; }) => {
    try {
        await siteLocation(latitude, langitude).then((res: any) => {
            if (res?.status === 200) {
                dispatch({ type: SET_SITE_LOCATION, payload: res?.data.results });
            }
        }).catch((err) => console.log(err))
    } catch (err:any) {
        const errors = err;
        console.log(err);
    }
};
export {
    getLocation,
}
