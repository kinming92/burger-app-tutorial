import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-tutorial-43944.firebaseio.com/'
});

export default instance;