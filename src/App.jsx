import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Shop from "./Pages/Shop";
import AboutPage from "./Pages/AboutPage";

import NavBar from "./Components/NavBar";
import shopData from "./Data/ShopData";

// import "./App.css";

function App() {
  const [products, setProducts] = useState(shopData);
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/shop"
          element={
            <Shop products={products} search={search} setSearch={setSearch} />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
