import axios from 'axios';
import { useState, useEffect } from 'react';
const TV=require('../assets/img/tv.png')
const Furniture=require('../assets/img/chair.png')
const SmartPhone=require('../assets/img/samsung.png')
const Toys=require('../assets/img/toys.png')


const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post('http://localhost:8000/fetchcategories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="h-auto w-full grid grid-cols-4 gap-y-4">
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={TV}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Electronics</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={Furniture}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Furniture</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={Toys}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Toys</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={SmartPhone}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Gadgets</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={Furniture}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Furniture</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={SmartPhone}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Gadgets</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={TV}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Electronics</h2>
        </div>
      <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
          <img
            src={Toys}
            alt=""
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>Toys</h2>
        </div>
      {/* {categories.map((category) => (
        <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500" key={category._id}>
          <img
            src={`/img/${category.url}.png`}
            alt={category.name}
            className='w-2/3 h-1/2'
            onError={(e) => console.error("Image loading error:", e.target.src)}
          />
          <h2>{category.name}</h2>
        </div>
      ))} */}
    </div>
  );
};

export default Category;
