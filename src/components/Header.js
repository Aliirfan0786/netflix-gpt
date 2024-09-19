import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/")
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className="absolute w-screen  px-14 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-60"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />

    { user && <div className="flex p-2">
        <img
          className="w-12 h-12 "
          alt="user-icon"
          src={user.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="p-2 flex font-bold text-white"
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
