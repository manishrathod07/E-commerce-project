const logo=require('../assets/img/logo.png')
const Sidebar = () => {
  return ( 
    <div className="h-full w-[20%] bg-white pl-4 sticky">
      <img src={logo} alt="" className='h-24 mb-6'/>
      <h2 className="font-bold text-[20px]">Categories</h2>
      <li className='text-[16px] flex flex-col justify-center pl-1 gap-2 mt-4 cursor-pointer'>
         <ul>Electronics</ul>
         <ul>Computers</ul>
         <ul>Clothes</ul>
         <ul>Arts & Crafts</ul>
         <ul>Toys & Games</ul>
         <ul>Jewelry</ul>
         <ul>Beauty & Care</ul>
         <ul>Mother & Kids</ul>
         <ul>Home design</ul>
         <ul>Sports</ul>
         <ul>Pet Supplies</ul>
      </li>
    </div>
   );
}
 
export default Sidebar;