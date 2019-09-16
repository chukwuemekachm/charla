import axios from 'axios';

const {
  API_URL = 'http://localhost:3000/api/v1',
} = process.env;

export default axios.create({
  baseURL: API_URL,
  timeout: 3000,
});
