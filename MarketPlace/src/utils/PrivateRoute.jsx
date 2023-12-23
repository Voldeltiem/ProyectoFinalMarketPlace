import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../Context/MyContext";
import { useContext } from 'react';
import Context from '../Context/MyContext';

const PrivateRoute = () => {
  const { user } = useData();
  const usuarioContext = useContext(Context);
  const { token, setToken } = usuarioContext;

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
