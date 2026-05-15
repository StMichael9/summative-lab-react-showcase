// A product page that will show the product.
import SearchBar from "../Components/SearchBar";
import React from "react";
import "../CSS/Shop.css";

const Shop = ({ products, search, setSearch }) => {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="shop-page">
      <h2 className="shop-title">Shop</h2>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
