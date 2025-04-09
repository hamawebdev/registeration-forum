import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flutter-body min-h-screen flex items-center justify-center">
      <div className="flutter-card text-center max-w-md w-full">
        <h1 className="flutter-heading text-6xl font-bold mb-6">404</h1>
        <p className="text-xl text-light-text mb-8">Oops! Page not found</p>
        <a href="/" className="flutter-button inline-block hover:no-underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
