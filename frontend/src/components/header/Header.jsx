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
              <div className="category-name">
                <img
                  className="pictureSearch"
                  src="/images/search-item-1.jpg"
                  alt=""
                />
              </div>
              <div className="category-title">Hotels</div>
            </div>
            <div className="optionItem">
              <div className="category-name">
                <img
                  className="pictureSearch"
                  src="/images/search-item-2.jpg"
                  alt=""
                />
              </div>
              <div className="category-title">Restaurants</div>
            </div>
            <div className="optionItem">
              <div className="category-name">
                <img
                  className="pictureSearch"
                  src="/images/search-item-3.jpg"
                  alt=""
                />
              </div>
              <div className="category-title">Activities</div>
            </div>
            <div className="optionItem">
              <div className="category-name">
                <img
                  className="pictureSearch"
                  src="/images/search-item-4.jpg"
                  alt=""
                />
              </div>
              <div className="category-title">Meaningful Travel</div>
            </div>
            <div className="optionItem">
              <div className="category-name">
                <img
                  className="pictureSearch"
                  src="/images/search-item-5.jpg"
                  alt=""
                />
              </div>
              <div className="category-title">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
