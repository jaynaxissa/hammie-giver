import "./header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <div className="headerSearchField">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <div className="optionItem">
              <span>Hotels</span>
            </div>
            <div className="optionItem">
              <span>Restaurants</span>
            </div>
            <div className="optionItem">
              <span>Activities</span>
            </div>
            <div className="optionItem">
              <span>Meaningful Travel</span>
            </div>
            <div className="optionItem">
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
