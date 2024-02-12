import Search from "./Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailedCategory = () => {
  const location = useLocation();
  const { state } = location;
  const key = state && state.key;
  console.log(key);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/fetchcategories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  let filteredCategories = [];
  if (key) {
    filteredCategories =
      categories.filter((category) => category._id === key)[0]?.detail || [];
  }

  return (
    <div className="w-[80%] flex flex-col h-auto">
      <Search />
      <div className="w-full h-auto">
        <h1 className="text-xl mb-4 ml-3">
          {categories.filter((category) => category._id === key)[0]?.name || ""}
        </h1>

        <div className="h-auto w-full grid grid-cols-4 gap-y-4 mx-2">
          {filteredCategories.map((category) => (
            <div
              className="w-44 shadow-md shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500 cursor-pointer h-40 py-2"
              key={category.id}
            >
              <img
                src={category.url}
                alt={category.name}
                className="w-3/5 h-1/2"
                onError={(e) =>
                  console.error("Image loading error:", e.target.src)
                }
              />
              <h2 className="text-sm font-semibold">{category.name}</h2>
              {/* <h3 className="text-xs font-normal">{category.details}</h3>
          <h2 className="text-xs font-normal">Rs {category.cost}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedCategory;
