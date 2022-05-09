import axios from 'axios';

const baseURL = 'https://nativapps.herokuapp.com/'; 

const movieApi = axios.create({baseURL});

export default movieApi;