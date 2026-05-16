import React from "react";

const FormPage = ({
  name,
  price,
  description,
  image,
  setName,
  setPrice,
  setDescription,
  setImage,
  handleSubmit,
}) => {
  return (
    <div className="form-page">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit} className="add-product-form">
        {/* Product Name */}
        <label>
          Product Name:
          <input
            type="text"
            placeholder="Caramel Latte"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        {/* Price */}
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            placeholder="5.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        {/* Description */}
        <label>
          Description:
          <textarea
            placeholder="Describe the drink..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {/* Image URL */}
        <label>
          Image URL:
          <input
            type="text"
            placeholder="/images/summative-lab-react-showcase-photos-1.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        {/* Submit */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormPage;
