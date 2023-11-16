export interface IPartnersState {
    isLoading: boolean,
    isSuccess: boolean,
    data: [],
    error: null
}

export interface ISlide {
    data:{
        path?: string | undefined
    }
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    id?: number | undefined;
    width?: number;
    height?: number
}