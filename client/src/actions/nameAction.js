import { createData, listData } from "../axios/dataAxios";
import { setNames } from "./nameSlice";

//Get all names
export const getNamesAction = () => async (dispatch) => {
  //call axios
  const result = await listData();

  if (result.status === 200) {
    dispatch(setNames(result.data));
  }
};
// create names
export const createNamesAction = (name) => async (dispatch) => {
  //call axios
  const creardataresult = await createData(name);

  const getData = await listData();
  dispatch(setNames(getData.data));
};
