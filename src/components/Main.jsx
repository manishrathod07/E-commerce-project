import React, { useEffect, useRef } from "react";
import Upper from "./Upper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Category from "./Category";

const Main = () => {
  const observer = useRef();

  const handleIntersection = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // Load more content or trigger an action to fetch more data
      // For example, you can update the state to load more categories
      // and fetch additional data from an API.
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as needed
    });

    if (observer.current) {
      observer.current.observe(document.getElementById("scroll-trigger"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="h-full">
      <Upper />
      <div className="h-10 flex items-center justify-between mx-auto pl-2 pr-16 text-sm mt-4">
        <h2>Explore Popular Categories</h2>
        <button className="bg-gray-100 px-4 py-1 rounded-lg">
          See All 
          <ArrowForwardIcon className="w-4"/>
        </button>
      </div>
      <Category />
      <div id="scroll-trigger" style={{ height: "1px" }}></div>
      {/* This empty div with a height of 1px will act as a trigger for intersection */}
    </div>
  );
};

export default Main;
