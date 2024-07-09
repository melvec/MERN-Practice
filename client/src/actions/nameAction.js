import { listData } from "../axios/dataAxios";
import { setNames } from "./nameSlice";

//Get all names
export const getNamesAction = () => async (dispatch) => {
  //call axios
  const result = await listData();

  if (result.status === 200) {
    dispatch(setNames(result.data));
  }
};
