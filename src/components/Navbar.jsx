// react-icons
import { FcStackOfPhotos } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
// components
import { NavLinks } from "./";
// rrd
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage());

  function changeTheme() {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  }
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
            <span className="indicator-item badge badge-primary">0</span>
            <FaHeart className="w-6 h-6 m-1" />
          </Link>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={changeTheme} />
            <FaSun className="swap-on h-6 w-6 fill-current" />
            <FaMoon className="swap-off h-6 w-6 fill-current" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
