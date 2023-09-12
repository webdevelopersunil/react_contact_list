import React from "react";

export default function NotFound() {

  // Incase if user request for the unknown
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">This Page you are looking doesn't exists !!!</p>
    </div>
  );
}
