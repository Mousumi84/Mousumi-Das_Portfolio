import { Navigate } from "react-router-dom";

const ViewerProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("Token");

  if (!token) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default ViewerProtectedRoute;
