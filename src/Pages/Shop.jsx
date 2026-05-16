import SearchBar from "../Components/SearchBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Shop.css";

const Shop = ({ products, search, setSearch, deleteProduct }) => {
  const navigate = useNavigate();

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="shop-page">
      <SearchBar search={search} setSearch={setSearch} />

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>No products found matching "{search}"</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="product-price">${item.price}</p>

              <div className="product-actions">
                <button onClick={() => navigate(`/edit/${item.id}`)}>
                  Edit
                </button>

                <button onClick={() => deleteProduct(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
