import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const userEmail = location.state.email.id; // Accessing email property from location state
  console.log(userEmail);
  useEffect(() => {
    console.log("User email:", userEmail); // Check if userEmail is correct
    const fetchUserProfile = async () => {
      try {
        // Fetch user data from your backend server
        const response = await axios.post(`http://localhost:8000/profile?email=${userEmail}`);
        console.log("Response:", response.data); // Check response data
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };
  
    fetchUserProfile();
  }, [userEmail]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {

    
    return <div>User not found.</div>;
    
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg mb-2">
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Mobile:</span> {user.mobile}
        </p>
        {/* Render other user information */}
        <div className="mt-4">
          {/* Add buttons or links for actions like edit profile, change password, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
