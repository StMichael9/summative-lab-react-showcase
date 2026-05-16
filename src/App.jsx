import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page imports
import LandingPage from "./Pages/LandingPage";
import Shop from "./Pages/Shop";
import AboutPage from "./Pages/AboutPage";
import AddProductPage from "./Pages/AddProduct";
//Component imports
import NavBar from "./Components/NavBar";
import EditProduct from "./Components/EditProduct";

//Hook imports
import useLocalStorage from "./Hooks/useLocalStorage";

const API = "http://localhost:3001/products";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  const addProduct = async (newProduct) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const saved = await res.json();
    setProducts([...products, saved]);
  };

  const updateProduct = async (id, updates) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    const updated = await res.json();

    setProducts(products.map((p) => (p.id === id ? updated : p)));
  };

  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              search={search}
              setSearch={setSearch}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/form"
          element={<AddProductPage addProduct={addProduct} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct products={products} updateProduct={updateProduct} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
