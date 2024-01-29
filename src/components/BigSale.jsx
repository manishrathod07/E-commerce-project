const Nike=require('../assets/img/nike.png')
const BigSale = () => {
  return ( 
    <div className='flex w-1/2 h-full shadow-sm shadow-gray-600 rounded-lg hover:scale-105 duration-500'>
       <div className='w-1/2 pl-8 flex flex-col justify-center gap-2'>
            <h2 className='text-2xl font-bold'>BIG SALE</h2>
            <p className='text-[14px] max-w-48'>Sports Shoes With Extreme Comfort</p>
            <button className='bg-[#00df9a] rounded-xl py-1  text-[14px] w-2/5 mt-6 text-center hover:scale-105 duration-500'>Shop</button>
       </div>
       <div className='flex justify-center items-center w-1/2'>
       <img src={Nike} alt="" className='h-40'/>
       </div>
     </div>
   );
}
 
export default BigSale;