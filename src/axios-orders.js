import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-fe084.firebaseio.com/'
});

export default instance;