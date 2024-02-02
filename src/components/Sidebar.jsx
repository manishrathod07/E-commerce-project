const logo=require('../assets/img/logo.png')
const Sidebar = () => {
  return ( 
    <div className="h-full w-[20%] bg-white pl-4 sticky">
      <img src={logo} alt="" className='h-24 mb-6'/>
      <h2 className="font-bold text-[20px]">Categories</h2>
      <li className='text-[16px] flex flex-col justify-center pl-1 gap-2 mt-4 cursor-pointer'>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Electronics</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Computers</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Clothes</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Arts & Crafts</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Toys & Games</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Jewelry</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Beauty & Care</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Mother & Kids</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Home design</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Sports</ul>
         <ul className='hover:text-[#00df9a] hover:scale-105 duration-500'>Pet Supplies</ul>
      </li>
    </div>
   );
}
 
export default Sidebar;