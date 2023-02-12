import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Niue Honey",
      img: "https://d2g79oifq3rgie.cloudfront.net/givecard-images/CxLH2jnXvRU6zVAfe7W1iq4UHac2-1651214965900-OlbF.png",
      customer: "Ann Siri",
      date: "1 March",
      amount: 1990,
      method: "QR Code",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Rawi Warin Resort & Spa",
      img: "https://d2g79oifq3rgie.cloudfront.net/givecard-images/2pqrgkQaq7ZmixSfssSilq6uyd72-1665042586735-5x1p.png",
      customer: "Somsak Saksiri",
      date: "1 March",
      amount: 6600,
      method: "Credit/Debit card",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "The Racha",
      img: "https://d2g79oifq3rgie.cloudfront.net/wp-content/uploads/2020/09/02091024/Main-Building-21.jpg",
      customer: "John Smith",
      date: "5 March",
      amount: 14000,
      method: "Credit/Debit card",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Divana Urban Thai Med",
      img: "https://d2g79oifq3rgie.cloudfront.net/givecard-images/NPWgrit668XYXLGC7OVdufCU3Bd2-1672296863168-kiDx.jpg",
      customer: "Suthatta Yipee",
      date: "8 March",
      amount: 1200,
      method: "QR Code",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Shelter",
      img: "https://d2g79oifq3rgie.cloudfront.net/wp-content/uploads/2022/11/18064143/4_auto_x2-2.jpg",
      customer: "Teerapat Wanlung",
      date: "4 April",
      amount: 100,
      method: "QR Code",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
