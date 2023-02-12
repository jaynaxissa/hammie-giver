export const productColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              "http://localhost:8800/" + params.row.photos[0] ||
              "https://images.pexels.com/photos/9385902/pexels-photo-9385902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "supportType",
    headerName: "Support Type",
    width: 170,
  },

  {
    field: "location",
    headerName: "Location",
    width: 120,
  },
  {
    field: "desc1",
    headerName: "Description1",
    width: 230,
  },
  {
    field: "desc2",
    headerName: "Description2",
    width: 230,
  },
  {
    field: "desc3",
    headerName: "Description3",
    width: 230,
  },
  {
    field: "desc4",
    headerName: "Description4",
    width: 230,
  },

  {
    field: "value",
    headerName: "Value",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "discountPercentage",
    headerName: "Discount Percentage",
    width: 180,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 90,
  },
];

export const orderColumns = [
  { field: "_id", headerName: "Tracking ID", width: 250 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.photos ||
              "https://images.pexels.com/photos/9385902/pexels-photo-9385902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 170,
  },

  {
    field: "location",
    headerName: "Location",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 230,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 230,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 230,
  },
];
