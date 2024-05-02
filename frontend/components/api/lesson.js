import axios from "axios";

const API_URL = "http://localhost:4000";

export async function getDay(values) {
  return await axios.get(`${API_URL}/lesson/?date=${values}`);
}

