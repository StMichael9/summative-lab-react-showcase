import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page imports
import LandingPage from "./Pages/LandingPage";
import Shop from "./Pages/Shop";
import AboutPage from "./Pages/AboutPage";
//Component imports
import NavBar from "./Components/NavBar";
// Data imports
import shopData from "./Data/ShopData";
//Hook imports
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [products, setProducts] = useLocalStorage("products", shopData); // "products is the key value and shopData is the initalValue"
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
