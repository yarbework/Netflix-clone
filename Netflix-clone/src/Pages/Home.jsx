import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/banner/Banner";
import RowList from "../Components/Rows/RowsList/RowList";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
