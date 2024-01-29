import Upper from "./Upper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Category from "./Category";
const Main = () => {
  return ( 
    <div className="h-full ">
      <Upper/>
      <div className="h-10 flex items-center justify-between mx-auto pl-2 pr-16 text-sm mt-4">
        <h2>Explore Popular Categories</h2>
        <button className="bg-gray-100 px-4 py-1 rounded-lg">
          See All 
          <ArrowForwardIcon className="w-4"/>
        </button>
      </div>
      <Category/>
    </div>
   );
}
 
export default Main;