import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center border rounded-xl p-10 bg-white shadow-sm">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-4">Oops! Page not found</p>
        <a href="/" className="text-sky-700 hover:underline font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
