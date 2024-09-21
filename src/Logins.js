import React, { useRef, useState } from "react";
import Header from "./components/Header";
import { checkValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/fireBase";

import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Logins = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //check validate data
    const massage = checkValidData(
      email.current.value,
      password.current.value,
      //  fullName.current.value ? fullName.current.value : null
    );
    setErrormessage(massage);
    if (massage) return;

    //sign in sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // const auth = getAuth();
          updateProfile(user, {
            displayName: fullName.current.value, 
            photoURL: "https://avatars.githubusercontent.com/u/120303479?v=4",
          })
            .then(() => {
              const{ uid,email,displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email,displayName:displayName, photoURL: photoURL }));
              // Profile updated!
             
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrormessage(error.massage)
              // ...
            });

         
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Enter Your Full Name"
            className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-gray-700 bg-opacity-70 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-2 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
