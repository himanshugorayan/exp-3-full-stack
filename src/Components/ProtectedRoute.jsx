import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = true;   // TEMPORARY: always allow

  return isLoggedIn ? children : <Navigate to="/login" />;
}