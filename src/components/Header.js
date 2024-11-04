import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { PHOTOURL, SUPPORTED_LANGUAGES } from "../utils/constants";

import { LOGO } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguages } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = ()=> {
    dispatch (toggleSearchView());

  }
  const handleLanguageChange = (e)=>{
    dispatch(changeLanguages(e.target.value))
    

  }

  return (
    <div className="absolute w-screen  px-14 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-60" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2"> 
     {showGptSearch && (   <select className="h-9 w-full justify-start space-x-2 px-3 hover:bg-accent sm:w-[130px] m-2 rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) =>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}

        </select>)}
          <button className="h-9 w-full justify-start space-x-2 px-3 hover:bg-accent sm:w-[130px] bg-purple-600 m-2 rounded-lg"
          onClick={handleGptSearchClick}
          >{showGptSearch ? "Homepage" : "Gpt Search"}</button>
          <img className="w-12 h-12 " alt="user-icon" src={PHOTOURL } />
          <button
            onClick={handleSignOut}
            className="p-2 flex font-bold text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
