import axios from "axios";


export const axiosPublic = axios.create({
    baseURL:"http://localhost:5000",
    headers : {"Content-type" : 'application/json'}
})