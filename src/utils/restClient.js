// Library
import axios from 'axios';

// API CONSTANTS
const API_URL = 'https://api.themoviedb.org/3/'
export const API_KEY = '2d1524775e35a01b352e29a6e7d01c31'

let api = null

// INITIALIZE API
const getInitializedApi = () => {
    if (api) {
        return api;
    }
    api = axios.create({
        baseURL: API_URL,
        responseType: 'json',
    });
    return api;
};

// GET METHOD
export const get = async url => {
    return getInitializedApi().get(url);
};