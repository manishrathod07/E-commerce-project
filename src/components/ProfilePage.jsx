import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const userEmail = location.state.email.id;

  console.log(userEmail);

  useEffect(() => {
    console.log("User email:", userEmail);

    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(
          `https://swadeshshop.onrender.com/profile?email=${userEmail}`
        );

        console.log("Response:", response.data);
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
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
        <p className="text-lg mb-2">
          <span className="font-semibold">Address:</span> {user.address}
        </p>

        <div className="mt-4">
          <Link
            to="/edit-profile"
            state={{ user }}
            className="bg-[#00df9a] rounded-xl text-white font-bold py-2 px-4 rounded"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
