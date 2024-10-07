import { Link, NavLink } from "react-router-dom";

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
  return (
    <>
      {navlinks.map((link) => {
        return (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
