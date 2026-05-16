import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormPage from "../Components/Form";

const EditProduct = ({ products, updateProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updates = {
      name,
      price: Number(price),
      description,
      image,
    };

    await updateProduct(product.id, updates);
    navigate("/shop");
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

export default EditProduct;
