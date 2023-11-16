export interface IMediaState { 
    isLoading: boolean,
    isSuccess: boolean,
    data: [],
    error:null
}

export interface IVideo {
    createdAt:string,
    id:number,
    path:string,
    updatedAt:string
}