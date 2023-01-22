import React,{ Fragment, useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/loginHook';
export const ProtectedRoute = (props) => {
  const isLoggedIn = useRef(false);
  const navigate = useNavigate();
  const checkIsUserLoggedIn = () =>{
  
    if (localStorage.getItem("tokens") !== null) {
      isLoggedIn.current = true
    } else {
      isLoggedIn.current = false;
      return navigate('/login');
    }
  }

    useEffect(() => {
      checkIsUserLoggedIn();
    }, [isLoggedIn]);


    return (
    <React.Fragment>
      
      {isLoggedIn ? props.children : null}
      
      </React.Fragment>);
  }


