

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/;',
});

export const loginUser = (email, password) => {
  return api.post('usuario/auth', { email, password });
};

export const postData = (denuncias) => {
  return api.post('denuncias', denuncias);
};

export const getData = () => {
  return api.get('denuncias');
};




export default api;