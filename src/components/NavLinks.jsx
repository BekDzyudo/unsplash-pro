import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const navlinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
function NavLinks() {
  const { dispatch } = useGlobalContext();
  const signOutUserMB = async () => {
    try {
      dispatch({ type: "LOGOUT" });
      await signOut(auth);
      toast.success("See You Soon");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <li className="md:hidden">
        <Link to="/">Profile</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li className="md:hidden">
        <Link to="/">Setting</Link>
      </li>
      <li>
        <p
          className="font-medium text-red-600 md:hidden"
          onClick={signOutUserMB}
        >
          Logout
        </p>
      </li>
      {/* {navlinks.map((link) => {
        return (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })} */}
    </>
  );
}

export default NavLinks;
