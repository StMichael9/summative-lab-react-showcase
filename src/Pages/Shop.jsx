// A product page that will show the product.
import SearchBar from "../Components/SearchBar";
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Shop.css";

const Shop = ({
  products,
  isLoading,
  error,
  search,
  setSearch,
  onUpdateProduct,
  onDeleteProduct,
}) => {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const showNoResults =
    !isLoading && !error && filteredProducts.length === 0 && search.trim() !== "";

  return (
    <div className="shop-page">
      <SearchBar search={search} setSearch={setSearch} />

      {error ? (
        <div className="shop-status" role="alert">
          <p>Unable to load products. Is json-server running?</p>
        </div>
      ) : isLoading ? (
        <div className="shop-status">
          <p>Loading products...</p>
        </div>
      ) : showNoResults ? (
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
                <Link className="edit-link" to={`/edit/${item.id}`}>
                  Edit
                </Link>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => onDeleteProduct?.(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
