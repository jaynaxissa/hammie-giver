import "./productdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";

const ProductDatatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/"[1]);
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch("/products/allproducts");
  // const { dataOrder, loading, error } = useFetch("/products/allproducts");
  // const { data, loading, error } = useFetch(`/${path}/allproducts`);
  // const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
    } catch (err) {}
    setList(list.filter((item) => item._id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  console.log(list);

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to={`/products/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(rows) => rows._id}
      />
    </div>
  );
};

export default ProductDatatable;
