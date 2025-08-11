import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend.ptdahliaglobalindo.id', // Sesuaikan dengan URL backend AdonisJS kamu
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
