import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../Context/MyContext";

const PrivateRoute = () => {
  const { user } = useData();

  return user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
