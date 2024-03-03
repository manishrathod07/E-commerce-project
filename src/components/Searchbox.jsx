import React, { useState, useRef } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  // Function to handle input change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Example: Fetch suggestions from an API based on inputValue
    // Replace this with your own logic to fetch suggestions
    fetchSuggestionsFromAPI(inputValue);
  };

  // Example function to fetch suggestions from an API
  const fetchSuggestionsFromAPI = (inputValue) => {
    // Example API call logic here
    // Update suggestions state based on API response
    // For now, using dummy suggestions
    const dummySuggestions = ['TV', 'Toys', 'Shoes', 'Dress'];
    setSuggestions(dummySuggestions);
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]); // Clear suggestions
    inputRef.current.focus(); // Focus back on the input field
  };

  // Function to handle clicks outside the component
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]); // Clear suggestions if clicked outside
    }
  };

  // Add event listener for clicks outside the component
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex w-1/2'>
      <div className='relative w-4/5' ref={inputRef}>
        <input
          type="text"
          placeholder="search"
          className='pl-8 bg-gray-100 rounded-xl text-gray-600 text-[12px] w-11/12 h-8 font-semibold'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchOutlinedIcon className='absolute left-1 top-1 text-gray-700' />
      </div>
      <TuneOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10' />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-xl text-sm mt-8 w-11/12 z-10">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="px-2 py-1 cursor-pointer hover:bg-gray-200" onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
