import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.floatbottle.kro.kr',
  headers: {
    'Content-type': 'application/json',
  },
});
