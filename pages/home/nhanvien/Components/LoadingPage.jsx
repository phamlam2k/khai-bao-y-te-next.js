import React from "react";

export const LoadingPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center h-100" style={{paddingTop: "200px"}}>
      <div className="spinner-border" style={{width: "6rem", height:"6rem"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div>
        <p className="text-center font-weight-bold mt-5 h2">Loading...</p>
      </div>
    </div>
  );
};
