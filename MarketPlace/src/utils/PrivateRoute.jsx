import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../Context/MyContext";
import { useContext } from 'react';
import Context from '../Context/MyContext';
import { useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const { user } = useData();
  const usuarioContext = useContext(Context);
  const { token, setToken } = usuarioContext;

  return token ? <Outlet /> : navigate("/") ;
};

export default PrivateRoute;
