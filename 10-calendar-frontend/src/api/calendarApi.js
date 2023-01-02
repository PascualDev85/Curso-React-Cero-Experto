import axios from "axios";
import { getEnVariables } from "../helpers";

const { VITE_API_URL } = getEnVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// TODO: Add interceptors
// A la hora de hacer un request, se añade el token al header
calendarApi.interceptors.request.use((config) => {
  // cualquier petición que se haga(calednarApi), se añade el token al header
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarApi;
