import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Feedback from "./Feedback";
import Card from "./Card";

function Contact() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Card />
        <Feedback />
      </div>

      <Footer />
    </>
  );
}
export default Contact;
