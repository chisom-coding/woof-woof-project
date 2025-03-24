import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://dog.ceo/api',
});

export default Api;
