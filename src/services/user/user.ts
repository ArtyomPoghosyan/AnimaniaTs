import { Url } from './../base-url';
import { IAllUser } from './../../models/user/user';
import axios, { AxiosResponse } from 'axios';

export const getCurrentUSer = (): Promise<AxiosResponse<IAllUser[]>> => {

    return axios.get<IAllUser[]>(`${Url}/user/all`)
}