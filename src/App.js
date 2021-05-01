import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="banner-main">
          <Banner />
        </div>
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
