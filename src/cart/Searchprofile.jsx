import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchProfile = () => {
  const [position, setPosition] = useState({ longitude: null, latitude: null });
  const [address, setAddress] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  if(state)
  {
    setIsLoggedIn(true);
  }
  console.log(isLoggedIn);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    } else {
      console.log("geolocation not available");
    }
  }, []);

  useEffect(() => {
    if (position.latitude && position.longitude) {
      const APIkey = 'Aoua5qyV-S3MRWLdAj6lvgX66bFtOd1XKcbWaPHbSykHK9L7wJztPpDGwVtxz2HM';
      const geoURL = `https://dev.virtualearth.net/REST/v1/Locations/${position.latitude},${position.longitude}?key=${APIkey}`;
      axios.get(geoURL)
        .then(res => {
          const responseSet = res.data.resourceSets[0];
          if (responseSet && responseSet.resources.length > 0) {
            setAddress(responseSet.resources[0].address.formattedAddress);
          } else {
            setAddress('no result found');
          }
        })
        .catch(error => {
          console.log(error);
          setAddress('error is fetching');
        });
    }
  }, [position]);

  const handleNavigateToCart = () => {
    // Navigate to cart page
    navigate('/cart', { state: address });
  };

  const handleLogin = () => {
    // Handle login
    navigate('/login');
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // Handle signup
    navigate('/signup');
  };

  const toggleDropdown = () => {
    if (!isLoggedIn) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleProfile = () => {
    if (isLoggedIn) {
      // Navigate to profile page if logged in
      navigate('/profile');
    } else {
      // Toggle dropdown if not logged in
      toggleDropdown();
    }
  };

  return (
    <div className='flex justify-end w-1/2 pr-8 gap-5'>
      <FmdGoodIcon />
      {address ?
        (<h1 className='text-xs'>{address}</h1>)
        : (<h1>Loading...</h1>)}
      <LocalGroceryStoreOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10' onClick={handleNavigateToCart} />
      {/* <FavoriteBorderOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10' /> */}
      <div className="relative">
        <PermIdentityOutlinedIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" onClick={handleProfile} />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-8 w-36 bg-white border border-gray-300 rounded-lg shadow-md">
            <button className="block w-full py-2 text-left hover:bg-gray-100 px-4" onClick={handleLogin}>Login</button>
            <button className="block w-full py-2 text-left hover:bg-gray-100 px-4" onClick={handleSignup}>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchProfile;
