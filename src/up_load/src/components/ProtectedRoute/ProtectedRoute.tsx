import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../../store/useAuthStore";
import { useFileStore } from "../../store/useFileStore";

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.accessToken);
  const isLoading = useFileStore((state) => state.isLoading);

  if (isLoading) return null;

  return token ? <Outlet /> : <Navigate to="/up_load" replace />;
};

export default ProtectedRoute;
