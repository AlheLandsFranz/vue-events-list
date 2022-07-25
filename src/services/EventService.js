import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/AlheLandsFranz/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents() {
    return apiClient.get("/events"); // se suma a la url
  },
  getEvent(id) {
    return apiClient.get("/events/" + id); // se suma a la url
  }
};
