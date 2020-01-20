import axios from 'axios';
let request = axios.create({
  baseURL: 'http://106.54.54.237:8000/api/hy',
  timeout: 5000
});
export  {
  request
};
