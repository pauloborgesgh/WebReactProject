

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-api-prd.up.railway.app/;',
});

export const loginUser = (email, password) => {
  return api.post('user/login', { email, password });
};

export const postData = (denuncias) => {
  return api.post('denuncias', denuncias);
};

export const getData = () => {
  return api.get('denuncias');
};




export default api;