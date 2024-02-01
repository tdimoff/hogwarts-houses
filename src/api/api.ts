import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://wizard-world-api.herokuapp.com/'
});

export const fetchHouses = async () => api.get('/houses');
export const postHouse = async (house: any) => api.post('/houses', house);
