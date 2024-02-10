import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useLocation,useNavigate } from "react-router-dom";

const SearchProfile = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const { state } = location;
  const address = state && state.address;
  console.log(state)

  return (
    <div className='flex justify-end w-1/2 pr-8 gap-5'>
      <FmdGoodIcon />
      {address ?
        (<h1 className='text-xs'>{address}</h1>)
        : (<h1>Loading...</h1>)}
      <LocalGroceryStoreOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'onClick={() => navigate('/cart')}  />
      <FavoriteBorderOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10' />
      <PermIdentityOutlinedIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
    </div>
  );
}

export default SearchProfile;
