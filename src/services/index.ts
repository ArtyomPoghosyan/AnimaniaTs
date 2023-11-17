import { IFormData } from '@models/index';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

export const api = axios.create({
    baseURL: REACT_APP_BASE_URL,
});

export const sendMessage = (data: IFormData) => {
    return api.post(`contact`, data)
}

export const projects = () => {
    return api.get(`media/slider`)
}

export const mainVideo = () => {
    return api.get(`media/home/video`)
}

export const getPartners = () => {
    return api.get(`partners`)
}

export const getAbout = () => {
    return api.get(`about-us`)
}