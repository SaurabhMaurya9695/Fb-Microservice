import { jwtAxios, privateAxios, publicAxios } from "./axios.service";

export const createUser = (userData) =>{
    return publicAxios.post('/users/' , userData).then(resp => resp.data);
}


export const loginUser = (userData) =>{
    return jwtAxios.post('/authenticate/login' , userData).then(resp => resp.data);
}

export const getUserById = (userId) =>{
    return privateAxios.get("/users/" + userId).then(resp => resp.data);
}