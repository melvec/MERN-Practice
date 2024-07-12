import axios from "axios";

const USER_API_URL = "http://localhost:8000/api/user";

// Create  a USer | Signup
export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};

// Login User
export const loginUser = (userObj) => {
  const response = axios
    .post(`${USER_API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });

  return response;
};
