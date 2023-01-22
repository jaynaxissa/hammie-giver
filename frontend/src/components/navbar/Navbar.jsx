import "./navbar.css";
import { Link } from "react-router-dom";
// import LanguageIcon from "@mui/icons-material/Language";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
// import { AuthContext } from "../../context/AuthContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="treeGiverLogo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <EmojiNatureIcon className="logo-nature" />
            <span className="logo">TreeGiver</span>
          </Link>
        </div>
        <div className="navItems">
          <div className="navList">
            <button className="navButton">Shop</button>
            <button className="navButton">Give</button>
            <button className="navButton">About</button>
            <button className="navButton">Contact</button>

            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            {/* <div className="languageChange">
              <LanguageIcon className="languageIcon" />
              <button className="navButton-thai">ภาษาไทย</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
