import axios from 'axios';
let request = axios.create({
  timeout: 5000
});
export  {
  request
};
