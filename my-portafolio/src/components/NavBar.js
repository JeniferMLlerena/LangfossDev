import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import { SlMenu } from "react-icons/sl";

function Navbar() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          <SlMenu />
        </button>
      </div>
      <div className="links">
        <Link to="/"> <span className="numNav">01.</span>Home </Link>
        <Link to="/projects"> <span className="numNav">02.</span>Projects </Link>
        <Link to="/experience"> <span className="numNav">03.</span>Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;