import { Url } from './../base-url';
import axios from 'axios';

export const mainVideo = () => {
    return axios.get(`${Url}/media/slider`)
}