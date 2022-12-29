import "./navbar.css";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">hammiegiver</span>
        </Link>
        <div className="navItems">
          <div className="navList">
            <button className="navButton">Shop</button>
            <button className="navButton">Give</button>
            <button className="navButton">About</button>
            <button className="navButton">Contact</button>

            <button className="navButton">Register</button>
            <button className="navButton">Login</button>

            <button className="navButton">ภาษาไทย</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
