import React, { useState } from "react";
import Header from "./components/Header";

const Logins = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {!isSignInForm && <input
          type="text"
          placeholder="Enter Your Full Name"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
        />}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now "
            : "Already Registered? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Logins;
