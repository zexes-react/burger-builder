import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://flash-chat-26a01.firebaseio.com/'
});

export default instance;