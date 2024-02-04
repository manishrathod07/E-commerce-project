import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchProfile = () => {
  const [position, setPosition] = useState({ longitude: null, latitude: null });
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

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
    navigate('/cart', { state: { address } });
  };

  return (
    <div className='flex justify-end w-1/2 pr-8 gap-5'>
      <FmdGoodIcon />
      {address ?
        (<h1 className='text-xs'>{address}</h1>)
        : (<h1>Loading...</h1>)}
      <LocalGroceryStoreOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'  onClick={handleNavigateToCart} />
      <FavoriteBorderOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
      <PermIdentityOutlinedIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
    </div>
  );
}

export default SearchProfile;
