import HomeIcon from '@mui/icons-material/Home';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useNavigate } from 'react-router-dom';
const Logo=require('../assets/img/logo.png')
const Navbar = () => {
  const navigate=useNavigate();
  return ( 
    <div className="h-20 w-full flex gap-8 pr-32 pl-7 items-center justify-between">
      <img src={Logo} alt=""  className="w-20"/>
      <div className='flex gap-3 text-gray-600'>
     <button onClick={()=>{navigate('/');}}><HomeIcon className=' bg-gray-200 rounded-full p-1 cursor-pointer'/></button>
     <LocalGroceryStoreOutlinedIcon className=' bg-gray-200 rounded-full p-1 cursor-pointer'/>
     <PermIdentityOutlinedIcon className=' bg-gray-200 rounded-full p-1 cursor-pointer'/>
     </div>
    </div>
   );
}
 
export default Navbar;