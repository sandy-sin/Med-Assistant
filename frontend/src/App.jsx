import { useState } from "react";
import Navbar from "./Components/NavFoot/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/NavFoot/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import { Toaster } from "react-hot-toast";
import Recommendation from "./Components/Recommendation/Recommendation.jsx";

function App() {
  const [clicked, setClicked] = useState("home");

  return (
    <div>
      <Navbar setClicked={setClicked} clicked={clicked} />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
      <Footer setClicked={setClicked} />
    </div>
  );
}

export default App;
