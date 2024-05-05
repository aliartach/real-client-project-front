import axios from "axios";

const instance = axios.create({
  baseURL: 'https://real-client-project-back.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;