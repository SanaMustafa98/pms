import axios from "axios";

let baseURL = 'https://www.demo.pms.crossdevlogix.com';
let token = localStorage.getItem("token");
const setAuthorizationToken = () => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const instance = axios.create({
  baseURL:baseURL,
});
instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] =`Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default setAuthorizationToken;
export { instance };
