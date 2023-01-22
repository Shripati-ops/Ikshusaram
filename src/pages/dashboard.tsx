import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { axiosPrivate } from "../utils/axiosPrivate"
import { useNavigate } from "react-router-dom";
import React from "react";

export const Dashboard = () =>{
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("tokens");
        navigate('/login')
    }
    useEffect(() => {
        axiosPrivate.post('auth/users',{user:"Shripati"})
    },[])
    return (<div>
    <h1 className="text-3xl text-gray-700 font-bold mb-5"> Dashboard Page </h1>

    <button onClick = {logout} className = "m-2 p-2 drop-shadow-md bg-slate-600"> logout </button>
            <Outlet/>
            </div>)
}