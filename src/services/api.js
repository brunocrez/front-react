import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodejs-omnistack.herokuapp.com'
});

export default api;