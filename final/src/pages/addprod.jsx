import React, { useState, useRef } from "react";
import { addProduct } from "../components/link";
import "./addprod.css";

const AddProd = () => {
  const initialProductState = {
    id: "",
    title: "",
    price: "",
    originalPrice: "",
    image: "",
    colors: "",
    rating: {
      rate: "",
      count: "",
    },
    bestSeller: false,
  };

  const [product, setProduct] = useState(initialProductState);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const colorsArray = product.colors.split(",").map((color) => color.trim());
    const newProduct = await addProduct({ ...product, colors: colorsArray });
    console.log(newProduct);

    setProduct(initialProductState);
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => {
      if (name === "rate" || name === "count") {
        return {
          ...prev,
          rating: { ...prev.rating, [name]: value },
        };
      }
      if (type === "checkbox") {
        return { ...prev, [name]: checked };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProduct((prev) => ({ ...prev, image: "" }));
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="adding">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="field"
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="ID*"
          required
        />
        <input
          className="field"
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Title*"
          required
        />
        <input
          className="field"
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Final Price*"
          required
        />
        <input
          className="field"
          type="text"
          name="originalPrice"
          value={product.originalPrice}
          onChange={handleChange}
          placeholder="Original Price (Optional)"
        />

        <div className="image-input-group field">
          <input
            type="text"
            name="image"
            value={product.image.startsWith("data:") ? "" : product.image}
            onChange={handleChange}
            placeholder="Image URL or leave blank if uploading*"
          />
          <span className="or-text">OR</span>
          <label className="custom-file-upload">
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
            />
          </label>
        </div>

        {fileName && <p className="file-name">{fileName}</p>}

        {product.image && (
          <div className="image-preview field">
            <img src={product.image} alt="Preview" />
            <button
              type="button"
              className="remove-image-btn"
              onClick={removeImage}
            >
              Remove Image
            </button>
          </div>
        )}

        <input
          className="field"
          type="text"
          name="colors"
          value={product.colors}
          onChange={handleChange}
          placeholder="Colors (comma-separated)*"
          required
        />
        <input
          className="field"
          type="number"
          name="rate"
          value={product.rating.rate}
          onChange={handleChange}
          placeholder="Rate (0 - 5)*"
          required
        />
        <input
          className="field"
          type="number"
          name="count"
          value={product.rating.count}
          onChange={handleChange}
          placeholder="Count*"
          required
        />

        <label className="checkbox-label field">
          <input
            type="checkbox"
            name="bestSeller"
            checked={product.bestSeller}
            onChange={handleChange}
          />
          Best Seller
        </label>

        <input id="ad" type="submit" value="Add Product" className="field" />
      </form>
    </div>
  );
};

export default AddProd;
