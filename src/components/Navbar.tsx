import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbarContainer">
      <Link
        to="/"
        style={{
          color: `${location.pathname === "/" ? "red" : "black"}`,
        }}
      >
        홈
      </Link>
      <Link
        to="/about"
        style={{
          color: `${location.pathname === "/about" ? "red" : "black"}`,
        }}
      >
        어바웃또
      </Link>
    </div>
  );
}
