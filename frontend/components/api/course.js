import axios from "axios";

const API_URL = "http://localhost:4000";

export async function getCourses(values) {
  return await axios.get(`${API_URL}/courses?category=${values}`);
}
export async function getCourse(values) {
  return await axios.get(`${API_URL}/courses/${values}`);
}

export async function postFeedback(values) {
  return await axios.post(`${API_URL}/courses/feedback`, values);
}
export async function getFeedbacks(values) {
  return await axios.post(`${API_URL}/courses/feedbacks?courseID=${values}`);
}
