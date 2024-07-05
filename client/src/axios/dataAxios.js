import axios from "axios";

const API_URL = "http://localhost:8000/api/data";

export const createData = (name) => {
  const response = axios
    .post(API_URL, name)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};

export const listData = () => {
  const response = axios
    .get(API_URL)
    .then((res) => res.data)
    .catch((error) => error);
  return response;
};
