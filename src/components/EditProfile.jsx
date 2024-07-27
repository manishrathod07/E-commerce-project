import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const EditProfilePage = () => {
  const location = useLocation();
  const { user } = location.state;
  const [formData, setFormData] = useState({
    name: user.name,
    mobile: user.mobile,
    address: user.address,
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://swadeshshop.onrender.com/profile/${user.email}`,
        formData
      );
      setNotification("Profile updated successfully!");
      setTimeout(() => {
        setNotification("");
      }, 3000); // Clear the notification after 3 seconds
    } catch (error) {
      console.error("Error updating profile:", error);
      setNotification("An error occurred while updating the profile.");
      setTimeout(() => {
        setNotification("");
      }, 3000); // Clear the notification after 3 seconds
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Edit Profile</h1>

      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {notification}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block font-semibold mb-2">
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-[#00df9a] rounded-xl text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
