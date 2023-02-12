import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { Link } from "react-router-dom";
import ProductDatatable from "../../components/productdatatable/ProductDatatable";
import OrderTable from "../../components/ordertable/OrderTable";

const List = ({ columns, pageType }) => {
  if (pageType === "products") {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <ProductDatatable columns={columns} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />

          <div className="datatable">
            <div className="datatableTitle">
              Add New Order
              <Link to="/orders/new" className="link">
                Add New
              </Link>
            </div>
            <OrderTable />
          </div>
        </div>
      </div>
    );
  }
};

export default List;
