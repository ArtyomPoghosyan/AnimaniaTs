export interface IInitialState { 
    isLoading: boolean,
    isSuccess: boolean,
    videoData: [],
    videoError:null
}

export interface IVideo {
    createdAt:string,
    id:number,
    path:string,
    updatedAt:string
}