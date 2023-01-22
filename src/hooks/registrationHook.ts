import { axiosPublic } from "../utils/axiosPublic";
import { useState,useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'


export function useRegister(userFormData){
    const register = useRef(false)
    const navigate = useNavigate();
    const sendUserData = () => {    
        axiosPublic.post('http://localhost:5000/auth/signup', {username : userFormData.email, password: userFormData.password}).then((res) => {
            if(res.data.error == false){
                console.log(res.data)
                register.current = true;
                localStorage.setItem("tokens", JSON.stringify({"tokens" :res.data}))
                navigate('/login');
        }else{
            register.current = false;
            //navigate('/login');
        }
        return register
    })
}
return sendUserData;
}