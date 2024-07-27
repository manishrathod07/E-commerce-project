import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailedCategory = ({ addToCart }) => {
  const { categoryId } = useParams();
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [addedItems, setAddedItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await axios.get(
          `https://swadeshshop.onrender.com/${categoryId}`
        );
        setCategoryDetails(response.data);
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    if (categoryId) {
      fetchCategoryDetails();
    }
  }, [categoryId]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems([...addedItems, product]);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  if (!categoryDetails) {
    return <div>Loading category...</div>;
  }

  return (
    <div className="mt-20">
      <h1>{categoryDetails.name}</h1>
      {showNotification && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-4 left-1/2 transform -translate-x-1/2"
          role="alert"
        >
          <strong>Success!</strong> Item added to cart.
        </div>
      )}
      <div className="h-auto w-full grid grid-cols-4 gap-12 mt-2">
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
                onError={(e) =>
                  console.error("Image loading error:", e.target.src)
                }
              />
              <h2>{product.name}</h2>
              <h2 className="text-sm">Rs {product.cost}</h2>
              {addedItems.includes(product) ? (
                <button className="bg-gray-500 rounded-xl py-1 text-[14px] w-3/5 mt-6 text-center hover:scale-105 duration-500 text-white mb-2">
                  Added
                </button>
              ) : (
                <button
                  className="bg-[#00df9a] rounded-xl py-1 text-[14px] w-3/5 mt-6 text-center hover:scale-105 duration-500 text-white mb-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailedCategory;
