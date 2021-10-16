import { getList } from "../../api/user.service";
import { SET_MOVIES, SET_PAGE } from "../Constants/moviesTypes";

const getMovies = () => async (
  dispatch: (arg0: { type: string; payload: any; }) => void,
  getState: () => { (): any; new(): any; loading: { (): any; new(): any; count: any; }; }) => {
  try {
    await getList(2).then((res: any) => {
      if (res?.status === 200) {
        dispatch({ type: SET_MOVIES, payload: res?.data.results });
      }
    }).catch((err) => console.log(err))
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err.response.data);
  }
};
export { getMovies, }
