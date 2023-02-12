import "./footer.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link-wrapper">
        <div className="col1-footer">
          <h2>Socialgiver</h2>
          <Link className="about">About</Link>
          <Link className="give">Give</Link>
          <Link className="contact">Contact</Link>
          <Link className="become_giving_partner">Become Giving Partner</Link>
          <Link className="careers">Careers</Link>
          <Link className="faq">FAQ</Link>
          <Link className="privacy">Privacy</Link>
        </div>
        <div className="col2-footer">
          <h2>Explore Shop</h2>
          <Link className="hotels">Hotels</Link>
          <Link className="restaurants">Restaurants</Link>
          <Link className="activities">Activities</Link>
          <Link className="sha">SHA</Link>
          <Link className="products">Products</Link>
        </div>
        <div className="col3-footer">
          <h2>Explore Give</h2>
          <Link className="animal">Animal</Link>
          <Link className="wildlife">Wildlife</Link>
          <Link className="disability">Disability</Link>
          <Link className="education">Education</Link>
          <Link className="environment">Environment</Link>
          <Link className="health">Health</Link>
          <Link className="women">Women</Link>
        </div>
        <div className="col4-footer">
          <h2>Get in Touch</h2>
          <Link
            className="social-icon-link-facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </Link>

          <Link
            className="social-icon-link-instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <small className="website-rights">
        © 2023 My TreeGiver Co., Ltd. All rights reserved.
      </small>
    </div>
  );
};
export default Footer;
