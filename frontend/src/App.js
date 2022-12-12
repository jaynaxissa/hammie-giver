import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Hello, react router!</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
