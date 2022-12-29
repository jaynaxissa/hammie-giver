import React from "react";
import Cards from "../../components/card/Cards";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Banner />
        <Cards />
        <h1>Footer down below2</h1>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
