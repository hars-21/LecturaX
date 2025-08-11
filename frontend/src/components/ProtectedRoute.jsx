import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children, requireAuth = true, redirectTo = "/signin" }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If route requires authentication and user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Save the attempted location for redirecting after login
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // If route requires no authentication (like login page) and user is authenticated
  if (!requireAuth && isAuthenticated) {
    // Redirect to dashboard or intended location
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  // User meets the route requirements
  return children;
};

// Public Route Component (accessible whether authenticated or not)
const PublicRoute = ({ children }) => {
  return children;
};

export { ProtectedRoute, PublicRoute };
export default ProtectedRoute;
