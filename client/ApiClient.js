import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3333', // Sesuaikan dengan URL backend AdonisJS kamu
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
