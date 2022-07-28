import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/auth-context"

export function RequireAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
