import axios from "axios";
import { API_KEY } from "./movieAPIKey";

export default axios.create({
  baseURL: `http://www.omdbapi.com/`,
  headers: {
    "Content-type": "application/json",
  }
});
