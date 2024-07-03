import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://karimov-js25-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;