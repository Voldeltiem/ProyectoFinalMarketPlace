import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import Context from '../Context/MyContext';
import React from 'react'

const PrivateRoute = () => {

  const usuarioContext = useContext(Context);
  const { token, setToken } = usuarioContext;

  return token ? <Outlet /> : Navigate("/") ;
};

export default PrivateRoute;
