import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.labtime.ufg.br",
});

export default api;