import { AnyAction } from '@reduxjs/toolkit';

export interface IState {
    media:AnyAction,
    project:AnyAction,
    partners:AnyAction,
    about:AnyAction
} 

export interface IPartnert {
    createdAt:string,
    id:number,
    path:string,
    updatedAt:string
}

export interface IContactState {
    isLoading: boolean,
    isSuccess: boolean,
    data: [],
    error: null
}

export interface IFormData {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export interface IContent {
    content:string
}

export interface IAbout {
    isLoading: boolean,
    isSuccess: boolean,
    data: [],
    error: null
}

export interface ISlide {
    data: []
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    id?: number | undefined;
    path?: string | undefined
    width: number;
    height: number
}

export interface ISliderItem {
    createdAt: string;
    updatedAt: string;
    id: number;
    path: string
}