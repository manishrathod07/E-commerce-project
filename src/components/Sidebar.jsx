import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const logo = require("../assets/img/logo.png");

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const locate = useLocation();
  const { state } = locate;
  console.log(state);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          "https://swadeshshop.onrender.com/fetchcategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const handleCategoryClick = (categoryId) => {
    navigate(`/${categoryId}`); // Dynamic route for detailed category
  };
  return (
    <div className="h-full w-[20%] bg-white pl-4 sticky ">
      <img src={logo} alt="" className="h-24 mb-6" />
      <h2 className="font-bold text-[20px]">Categories</h2>
      <li className="text-[16px] flex flex-col justify-center pl-1 gap-2 mt-4 cursor-pointer">
        {categories.map((category) => (
          <ul
            className="hover:text-[#00df9a] hover:scale-105 duration-500"
            onClick={() => handleCategoryClick(category._id)}
          >
            {category.name}
          </ul>
        ))}
      </li>
    </div>
  );
};

export default Sidebar;
