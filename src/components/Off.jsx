const Earbuds=require('../assets/img/earbud.webp')
const Off = () => {
  return ( 
    <div className="flex flex-col w-2/5 h-full">
      <div className=' w-full flex justify-center items-center h-1/2 shadow-sm shadow-gray-600 mx-10 rounded-lg hover:scale-105 duration-500'>
          <h2 className='text-center text-xl font-bold max-w-56'>GET UPTO <span className='text-[#00df9a]'>20%</span> OFF ON SPORTS SHOES</h2>
      </div>
      <div className='w-full flex h-1/2 shadow-sm shadow-gray-600 mx-10 rounded-lg mt-2 hover:scale-105 duration-500'>
        <div className='w-3/4 mt-6 pl-5 text-center'>
          <h2 className='text-lg font-normal'>Premium Earbuds</h2>
          <button className='bg-[#00df9a] rounded-xl py-1  text-[14px] w-1/2  text-center mx-auto mt-1 hover:scale-105 duration-500'>Shop Now</button>
        </div>
        <img src={Earbuds} alt="" className='h-16 mt-4'/>
      </div>
     </div>
   );
}
 
export default Off;