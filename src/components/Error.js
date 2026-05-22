const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you are looking for does not exist or has been moved.
      </p>

      <button onClick={() => window.location.href = "/"}>
        Go Back Home
      </button>
    </div>
  );
};

export default Error;