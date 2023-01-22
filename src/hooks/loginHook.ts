import { axiosPublic } from "../utils/axiosPublic";
import { useState,useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'


export function useLogin(userFormData){
    const authState = useRef(false)
    const navigate = useNavigate();
    const sendUserData = () => {    
        axiosPublic.post('http://localhost:5000/auth', {email : userFormData.email, password: userFormData.password}).then((res) => {
            if(res.data.error == false){
                console.log(res.data)
                authState.current = true;
                localStorage.setItem("tokens", JSON.stringify({"tokens" :res.data}))
                navigate('/dashboard');
        }else{
            authState.current = false;
            //navigate('/login');
        }
        return authState
    })
}
return sendUserData;
}