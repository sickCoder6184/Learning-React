import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  const getErrorEmoji = (status) => {
    switch (status) {
      case 404: return "🔍";
      case 500: return "⚠️";
      case 403: return "🚫";
      default: return "😵";
    }
  };

  const getErrorTitle = (status) => {
    switch (status) {
      case 404: return "Page Not Found";
      case 500: return "Server Error";
      case 403: return "Access Denied";
      default: return "Oops! Something went wrong";
    }
  };

  const getErrorDescription = (status) => {
    switch (status) {
      case 404: return "The page you're looking for doesn't exist or has been moved.";
      case 500: return "Our servers are having trouble processing your request.";
      case 403: return "You don't have permission to access this resource.";
      default: return "An unexpected error occurred. Please try again.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Error Icon */}
        <div className="text-8xl mb-6 animate-bounce">
          {getErrorEmoji(err?.status)}
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-lg font-bold">
            Error {err?.status || "Unknown"}
          </span>
        </div>

        {/* Error Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {getErrorTitle(err?.status)}
        </h1>

        {/* Error Description */}
        <p className="text-xl text-gray-600 mb-2">
          {getErrorDescription(err?.status)}
        </p>
        
        {err?.statusText && (
          <p className="text-gray-500 mb-8 italic">
            "{err.statusText}"
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="btn-primary text-lg px-8 py-3 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="mr-2">🏠</span>
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary text-lg px-8 py-3 hover:shadow-md transition-all duration-200"
          >
            <span className="mr-2">↩️</span>
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-primary hover:text-primary/80 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📧</span>
              Contact Support
            </Link>
            <span className="hidden sm:block text-gray-400">•</span>
            <a
              href="/"
              className="text-primary hover:text-primary/80 transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              <span className="mr-2">🔄</span>
              Refresh Page
            </a>
          </div>
        </div>

        {/* Development Info (only show in development) */}
        {process.env.NODE_ENV === 'development' && err && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
            <h4 className="font-semibold text-gray-800 mb-2">Debug Info:</h4>
            <pre className="text-sm text-gray-600 whitespace-pre-wrap">
              {JSON.stringify(err, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;