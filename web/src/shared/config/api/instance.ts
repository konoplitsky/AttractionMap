import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:10002/api'
});
