// A product page that will show the product.
import products from "../Data/ShopData";
import React from "react";
import "../CSS/Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <h2 className="shop-title">Shop</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="product-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
