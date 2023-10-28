import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoriesCarousel from "./components/CategoriesCarousel";

function App() {
  return (
    <div>
      <Navbar />
      <CategoriesCarousel/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
