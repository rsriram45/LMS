import React from "react";

import Freecourse from "../components/Freecourse";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freecourse/>
      <Footer />
    </>
  );
}

export default Home;
