import { Url } from './../base-url';
import axios from 'axios';

export const slider = () => {
    return axios.get(`${Url}/media/slider`)
}

export const mainVideo = () => {
    return axios.get(`${Url}/media/home/video`)
}