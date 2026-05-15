import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Shop from "./Pages/Shop";
import AboutPage from "./Pages/AboutPage";

import NavBar from "./Components/NavBar";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
