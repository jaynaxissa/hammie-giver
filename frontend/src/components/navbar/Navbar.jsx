import "./navbar.css";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="footer-image" src="images/img-1.jpg" alt="hammiegiver" />

      <div className="navContainer">
        <Link
          to="/"
          style={{ color: "inherit", textDecoration: "none" }}
        ></Link>
      </div>
    </div>
  );
};

export default Navbar;
