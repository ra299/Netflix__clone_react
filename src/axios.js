import axios from "axios";

// Base URL to make movie request.....

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
