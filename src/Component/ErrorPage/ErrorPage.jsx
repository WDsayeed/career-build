import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col  items-center mt-64">
      <h1 className="text-6xl font-semibold">Oops!</h1>
      <p className="text-xl my-5">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-2xl font-bold">{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
