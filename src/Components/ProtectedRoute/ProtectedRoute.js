import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    { children }
  ) : (
    <Navigate to="/auth" state={{ from: location }} />
  );
}
