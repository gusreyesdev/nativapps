import axios from 'axios';

const baseURL = 'https://nativapps2.herokuapp.com/';

const movieApi = axios.create({baseURL});

export default movieApi;