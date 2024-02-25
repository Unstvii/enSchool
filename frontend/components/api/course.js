import axios from "axios";

const API_URL = "http://localhost:4000";

export async function getCourses(values) {
  return await axios.get(`${API_URL}/courses?category=${values}`);
}

export async function getCourse(values) {
  return await axios.get(`${API_URL}/courses/${values}`);
}
