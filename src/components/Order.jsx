import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const items = state?.cartItems || [];
  const userEmail = state?.topass?.id;
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState("");

  let total = 0;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(
          `https://swadeshshop.onrender.com/profile?email=${userEmail}`
        );
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userEmail]);

  items.forEach((item) => {
    total += parseFloat(item.cost);
  });

  const submitOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://swadeshshop.onrender.com/order",
        {
          items,
          user: {
            name: user.name,
            mobile: user.mobile,
            email: userEmail,
            address: user.address,
          },
          total,
          paymentOption: "cashOnDelivery",
        }
      );

      if (response.data.message === "Order placed successfully") {
        setNotification("Order placed successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000); // Redirect to home page after 3 seconds
      } else {
        console.error("Error placing order:", response.data.message);
      }
    } catch (error) {
      console.error("Error during order submission:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <div className="flex justify-between font-semibold mt-20 gap-60 mb-4">
        <h2>Product</h2>
        <h2>Price</h2>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between mb-4">
          <div>{item.name}</div>
          <div>{item.cost}</div>
        </div>
      ))}
      <div className="flex">
        <h2>Name:</h2>
        <h2>{user.name}</h2>
      </div>
      <div className="flex">
        <h2>Mobile:</h2>
        <h2>{user.mobile}</h2>
      </div>
      <div className="flex">
        <h2>Email:</h2>
        <h2>{userEmail}</h2>
      </div>
      <div className="flex">
        <h2>Address:</h2>
        <h2>{user.address}</h2>
      </div>
      {notification && (
        <div className="text-green-500 mt-4">{notification}</div>
      )}
      <button
        onClick={submitOrder}
        className="bg-[#00df9a] rounded-xl py-1 text-[14px] w-2/5 text-center hover:scale-105 duration-500 text-white mt-4"
      >
        Confirm Order - Rs.{total}
      </button>
    </div>
  );
};

export default OrderConfirmation;
