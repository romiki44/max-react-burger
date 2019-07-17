import axios from 'axios';

const instance=axios.create({
  baseURL: 'https://burger-54bfe.firebaseio.com/'
});

export default instance;