import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const SearchProfile = () => {
  return ( 
    <div className='flex justify-end w-1/2 pr-8 gap-4'>
       <LocalGroceryStoreOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
       <FavoriteBorderOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
       <PermIdentityOutlinedIcon className="
       text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10"/>
    </div>
   );
}
 
export default SearchProfile;