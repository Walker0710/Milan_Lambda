import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero_section from "./components/Hero_section";
function App() {
  return (
    <>
      <Navbar />
      <div class="flex flex-col h-screen">
        <div class="flex-1">
          <Hero_section />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
