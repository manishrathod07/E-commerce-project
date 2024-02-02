
const TV=require('../assets/img/tv.png')
const Chair=require('../assets/img/chair.png')
const Category = () => {
 
  return ( 
    <div className="h-1/2 w-full grid grid-cols-4 gap-y-4">
      
        <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
             <img src={TV} alt="" className=' w-2/3 h-1/2'/> 
             <h2 className=''>Electronics</h2> 
        </div> 
        <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
             <img src={Chair} alt="" className=' w-2/3 h-1/2'/> 
             <h2 className=''>Furniture</h2> 
        </div> 
        <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
             <img src={TV} alt="" className=' w-2/3 h-1/2'/> 
             <h2 className=''>Electronics</h2> 
        </div> 
        <div className="w-48 shadow-sm shadow-gray-400 rounded-lg text-center flex flex-col justify-center items-center gap-2 hover:scale-105 duration-500">
             <img src={Chair} alt="" className=' w-2/3 h-1/2'/> 
             <h2 className=''>Furniture</h2> 
        </div> 
    </div>
   );
}
 
export default Category;