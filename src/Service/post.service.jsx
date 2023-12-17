import { privateAxios } from "./axios.service";

export const createPost = (postData) =>{
    return privateAxios.post('/post/' , postData).then(resp => resp.data);
}


export const getAllPost = () =>{
    return privateAxios.get('/post/').then(resp => resp.data);
}