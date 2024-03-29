import { useState } from "react";
import { useLogin } from "../hooks/loginHook"
import { useNavigate } from "react-router-dom";
import React from "react";
export const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const sendUserData = useLogin({email:email,password:password});

    function handleSubmit(){
        sendUserData();
    }
    function navigateToRegisterPage(){
        return navigate('/signup');
    }
    return ( 
      <div style = {{backgroundImage:`url('./132-1326806_download-hd-wallpaper-of-god-balaji-perumal-photos.jpg')`, height:"100vh", width:"100vw", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <div className="bg-white shadow-xl rounded my-8 float-right w-96 mr-16 pt-16 mt-16">
    <div className="text-center text-gray-600 py-4">Sign in with</div>
    <div className="flex justify-center mb-10">
      <button className="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
        <svg className="fill-current text-gray-600 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
        <div className="text-indigo-700">Facebook</div>
      </button>
      <button className="flex items-center bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
        <svg className="fill-current text-gray-600 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
        <div className="text-indigo-700">GitHub</div>
      </button>
    </div>
    <div className="bg-gray-200 pt-8 pb-16">
      <div className="text-center text-gray-600 mb-6">Or sign in with Email & Password</div>
      <div className="w-4/5 mx-auto">
        <div className="flex items-center bg-white rounded shadow-md mb-4">
          <span className="px-3">
            <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
          </span>
          <input className="w-full h-12 focus:outline-none" type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="flex items-center bg-white rounded shadow-md mb-4">
          <span className="px-3">
            <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
          </span>
          <input className="w-full h-12 focus:outline-none" type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="mb-4">
          <input type="checkbox" name="remember" className="mr-1"/>
          <label className="text-sm text-gray-600">Remember me</label>
        </div>
        <button className="bg-indigo-600 block mx-auto text-white text-sm uppercase rounded shadow-md px-6 py-2" onClick={handleSubmit}>Sign in</button>
      </div>
      <p className="text-sm text-gray-600 text-center"> Not a Member <a className="text-sm text-indigo-700" onClick={navigateToRegisterPage}>Sign Up</a> </p>
    </div>
  </div>
  </div>
  )
}