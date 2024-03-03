import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Or use a library like `fetch`

const DetailedCategory = ({ addToCart }) => { // Pass `addToCart` as a prop
  const { categoryId } = useParams(); // Get category ID from URL
  console.log(categoryId);
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${categoryId}`); // Replace with your API endpoint
        setCategoryDetails(response.data);
        console.log(categoryDetails);
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    };

    if (categoryId) { // Only fetch if category ID exists
      fetchCategoryDetails();
    }
  }, [categoryId]);

  // Display category details if available (conditional rendering or loading state)
  if (!categoryDetails) {
    return <div>Loading category...</div>; // Or display a loading indicator
  }

  // Access and display category details here, including products, descriptions, images, etc.

  const handleAddToCart = (product) => {
    addToCart(product); // Call the prop function to add to cart
  };

  return (
    <div>
      <h1>{categoryDetails.name}</h1>
      <div className="h-auto w-full grid grid-cols-4 gap-12 mt-2">
        {/* Assuming `name` is a property in categoryDetails */}
        {/* Check if products or a similar property exists within categoryDetails */}
        {categoryDetails.detail &&
          categoryDetails.detail.map((product) => (
            <div
              className="w-44 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500 cursor-pointer h-44"
              key={product._id}
            >
              <img
                src={product.url}
                alt={product.name}
                className="w-2/3 h-1/2"
                onError={(e) => console.error("Image loading error:", e.target.src)}
              />
              <h2>{product.name}</h2>
              <h2 className="text-sm">Rs {product.cost}</h2>
              <button
                className="bg-[#00df9a] rounded-xl py-1 text-[14px] w-3/5 mt-6 text-center hover:scale-105 duration-500 text-white mb-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        {/* Display details like images, descriptions, products, etc. based on your API response structure */}
      </div>
    </div>
  );
};

export default DetailedCategory;
