import axios from "axios";

// This pulls the URL from the local .env file of whoever is running the code
const apiUrl = process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default API;
