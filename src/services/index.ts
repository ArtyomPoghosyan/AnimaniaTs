import axios, { AxiosResponse } from 'axios';
import { Url } from './base-url';
import { IAllUser } from '../models/user/user';

export const SendMessage = (data:any) => {
    return axios.post(`${Url}/contact`,data)
}

export const slider = () => {
    return axios.get(`${Url}/media/slider`)
}

export const mainVideo = () => {
    return axios.get(`${Url}/media/home/video`)
}

export const getPartners = () => {
    return axios.get(`${Url}/partners`)
}

export const getCurrentUSer = (): Promise<AxiosResponse<IAllUser[]>> => {
    return axios.get<IAllUser[]>(`${Url}/user/all`)
}

export const getAbout = () => {
    return axios.get(`${Url}/about-us`)
}