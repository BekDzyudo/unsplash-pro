// react-icons
import { FcStackOfPhotos } from "react-icons/fc";
import { FaHeart, FaDownload } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
// components
import { NavLinks } from "./";
// rrd
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// context
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const { likedImages, downloadImages, user, dispatch } = useGlobalContext();

  function changeTheme() {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  }

  const signOutUser = async () => {
    try {
      dispatch({ type: "LOGOUT" });
      await signOut(auth);
      toast.success("See You Soon");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-200">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex">
            <FcStackOfPhotos className="w-10 h-10" />
          </Link>
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <FcStackOfPhotos className="w-10 h-10" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal rounded-box hidden md:flex">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/likedimages" className="indicator">
            <span className="indicator-item badge badge-primary">
              {likedImages.length}
            </span>
            <FaHeart className="w-6 h-6 m-1" />
          </Link>
          <Link to="/downloadimages" className="indicator">
            <span className="indicator-item badge badge-primary">
              {downloadImages.length}
            </span>
            <FaDownload className="w-6 h-6 m-1" />
          </Link>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={changeTheme} />
            <FaSun className="swap-on h-6 w-6 fill-current" />
            <FaMoon className="swap-off h-6 w-6 fill-current" />
          </label>
          <div className="dropdown md:block hidden dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 rounded-full">
                <img alt="" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={signOutUser}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
