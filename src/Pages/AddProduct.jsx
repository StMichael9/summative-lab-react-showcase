import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../Components/Form";
import "../CSS/AddProduct.css";

const AddProductPage = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      description,
      image,
    };

    try {
      await addProduct(newProduct);
      navigate("/shop");
    } catch (err) {
      // Keep the user on the form if the request fails.
      // (Intentionally no extra UI beyond console output.)
      console.error(err);
    }
  };

  return (
    <FormPage
      name={name}
      price={price}
      description={description}
      image={image}
      setName={setName}
      setPrice={setPrice}
      setDescription={setDescription}
      setImage={setImage}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddProductPage;
