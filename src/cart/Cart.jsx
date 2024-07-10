import React, { useState, useEffect } from "react";
// import Search from "./Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = ({ addedProducts, updateAddedProducts }) => {
  const location = useLocation();
  const { state } = location;
  const topass = state;
  console.log(state);

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Function to add a product to the cart from local storage
  // const handleAddToCart = (product) => {
  //   const existingIndex = cartItems.findIndex((item) => item.id === product.id);

  //   if (existingIndex === -1) {
  //     // Product does not exist in the cart, add it
  //     setCartItems((prevCartItems) => [
  //       ...prevCartItems,
  //       { ...product, quantity: 1 },
  //     ]);
  //   } else {
  //     // Product already exists in the cart, update its quantity
  //     const updatedCartItems = [...cartItems];
  //     updatedCartItems[existingIndex].quantity += 1;
  //     setCartItems(updatedCartItems);
  //   }

  //   // Update local storage with the new cart items
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // Load cart items from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Function to handle incrementing quantity
  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];

    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Update addedProducts in parent component using the prop (if needed)
    updateAddedProducts(updatedCartItems);
  };

  return (
    <div className="w-full h-auto">
      <h1 className="text-xl">Shopping Cart</h1>
      {cartItems.map((product, index) => (
        <div
          key={index}
          className="w-3/4 h-32 shadow-sm shadow-gray-400 rounded-md ml-2 mt-3 flex items-center justify-start gap-6"
        >
          <img src={product.url} alt="" className="w-32 h-4/5 ml-8" />
          <div className="w-1/3 ml-8">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <h2 className="text-md font-semibold">{product.cost}</h2>
          </div>
          <div className="1/4 flex gap-4 justify-center items-center">
            <button
              className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full"
              onClick={() => decrementQuantity(index)}
            >
              -
            </button>
            <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">
              {product.quantity}
            </button>
            <button
              className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full"
              onClick={() => incrementQuantity(index)}
            >
              +
            </button>
          </div>
          <CancelIcon
            style={{ color: "red" }}
            className="ml-6 cursor-pointer"
            onClick={() => removeFromCart(index)}
          />
        </div>
      ))}
      <button
        className="bg-[#00df9a] rounded-xl py-1 text-[14px] w-2/5 mt-6 text-center hover:scale-105 duration-500 text-white"
        onClick={() => {
          navigate(`/order`, { state: { cartItems, topass } });
        }}
      >
        Proceed Order
      </button>
    </div>
  );
};

export default Cart;
