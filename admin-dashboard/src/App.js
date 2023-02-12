import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, orderInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { productColumns, orderColumns } from "./datatablesource";
import NewProduct from "./pages/newProduct/NewProduct";
import NewOrder from "./pages/newOrder/NewOrder";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <List
                    pageType="products"
                    inputs={productInputs}
                    columns={productColumns}
                  />
                }
              />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewProduct />} />
            </Route>
            <Route path="orders">
              <Route index element={<List pageType="orders" />} />
              <Route path=":orderId" element={<Single />} />
              <Route path="new" element={<NewOrder />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
