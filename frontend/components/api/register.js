import axios from "axios";

const API_URL = "http://localhost:4000";

export async function loginUser(values) {
  return await axios.post(`${API_URL}/login`, values);
}

export async function registerUser(values) {
  return await axios.post(`${API_URL}/register`, values);
}

export async function getCourse(values) {
  return await axios.get(`${API_URL}/courses/id?category=${values}`);
}
