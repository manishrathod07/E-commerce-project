import React, { useState, useEffect } from "react";
import axios from "axios"; // Use Axios for HTTP requests
// import { useNavigate } from 'react-router-dom';

const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          "https://swadeshshop.onrender.comfetchcategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [cost, setCost] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://swadeshshop.onrender.comaddproducts",
        {
          name,
          url,
          cost,
          categoryId: selectedCategoryId,
        }
      );

      console.log("Product added successfully:", response.data);
      // Handle form reset or success message (optional)
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error message display
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Cost:
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
