import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops 😢</h1>

      <h2>{err.status} : {err.statusText}</h2>

      <p>{err.data}</p>

      <button onClick={() => (window.location.href = "/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default Error;