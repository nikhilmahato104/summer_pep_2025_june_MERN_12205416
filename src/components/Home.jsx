import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Welcome to the Home Page</h1>
      {/* <Link to="/login" className="btn btn-primary mt-3">
        Go to Login
      </Link> */}
    
    <Link to = "/login">
        Go to Login
    </Link>

    </div>
  );
}

export default Home;
