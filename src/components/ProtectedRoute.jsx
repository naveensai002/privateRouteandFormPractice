import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = { token: false };
  return auth.token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
