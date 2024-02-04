import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const SearchBox = () => {
  return ( 
    <div className='flex w-1/2'>
      <div className='relative w-4/5'>
        <input type="text" placeholder="search" className='pl-8 bg-gray-100 rounded-xl text-gray-600 text-[12px] w-11/12 h-8 font-semibold'/>
        <SearchOutlinedIcon className='absolute left-1 top-1 text-gray-700'/>
      </div>
      <TuneOutlinedIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
    </div>
   );
}
 
export default SearchBox;