import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const OrderConfirmation = () => {
  const location = useLocation();
  const { state } = location; // Destructuring state from location object
  console.log(state);
  const items = state.cartItems;
  const userEmail = state.topass.id;
  const [user, setUser] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  let total=0;
  useEffect(() => {
    console.log("User email:", userEmail); // Check if userEmail is correct
    const fetchUserProfile = async () => {
      try {
        // Fetch user data from your backend server
        const response = await axios.post(
          `http://localhost:8000/profile?email=${userEmail}`
        );
        console.log("Response:", response.data); // Check response data
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userEmail]);
  items.map((item)=>
  {
    total+=item.cost
  });
  return (
    <div className="mx-auto">
      <div className="flex justify-between font-semibold mt-20 gap-60 mb-4">
        <h2>Product</h2>
        <h2>Price</h2>
      </div>
      {items.map((item)=>(
      <div className="flex justify-between mb-4">
        
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
      <div className="flex">
      <button className='bg-white rounded-xl py-1  text-[14px] w-2/5 mt-6 text-center hover:scale-105 duration-500 text-black font-semibold'>Rs.{total}</button>
      <button className='bg-[#00df9a] rounded-xl py-1  text-[14px] w-2/5 mt-6 text-center hover:scale-105 duration-500 text-white'>Continue Purchase</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
