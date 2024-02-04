import Search from "./Search";
import CancelIcon from '@mui/icons-material/Cancel';
const SmartPhone=require('../assets/img/samsung.png');
const EarBuds=require('../assets/img/earbud.webp');
const Chair=require('../assets/img/chair.png')
const Cart = () => {
  return ( <div className="w-[80%] flex flex-col h-auto">
  <Search/>
  <div className=" w-full h-auto">
     <h1 className="text-xl">Shopping Cart</h1>
     <div className="w-3/4 h-32 shadow-sm shadow-gray-400 rounded-md ml-2 mt-3 flex  items-center justify-start gap-6">
      <img src={SmartPhone} alt="" className="w-32 h-4/5 ml-8"/>
      <div className="w-1/3 ml-8">
        <h2 className="text-lg font-bold">Smart Phone</h2>
        <h3 className="text-sm font-normal">Gadgets</h3>
        <h2 className="text-md font-semibold">Rs 24000</h2>
      </div>
      <div className="1/4 flex gap-4 justify-center items-center">
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">-</button>
        <button>1</button>
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">+</button>
      </div>
      <CancelIcon style={{color:'red'}} className="ml-6 cursor-pointer"/>
     </div>
     <div className="w-3/4 h-36 shadow-sm shadow-gray-400 rounded-md ml-2 mt-3 flex  items-center justify-start gap-6">
      <img src={EarBuds} alt="" className="w-32 h-4/5 ml-8"/>
      <div className="w-1/3 ml-8">
        <h2 className="text-lg font-bold">Pro Earbuds</h2>
        <h3 className="text-sm font-normal">Gadgets</h3>
        <h2 className="text-md font-semibold">Rs 1350</h2>
      </div>
      <div className="1/4 flex gap-4 justify-center items-center">
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">-</button>
        <button>1</button>
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">+</button>
      </div>
      <CancelIcon style={{color:'red'}} className="ml-6 cursor-pointer"/>
     </div>
     <div className="w-3/4 h-36 shadow-sm shadow-gray-400 rounded-md ml-2 mt-3 flex  items-center justify-start gap-6">
      <img src={Chair} alt="" className="w-32 h-4/5 ml-8"/>
      <div className="w-1/3 ml-8">
        <h2 className="text-lg font-bold">Wooden Chair</h2>
        <h3 className="text-sm font-normal">Furniture</h3>
        <h2 className="text-md font-semibold">Rs 820</h2>
      </div>
      <div className="1/4 flex gap-4 justify-center items-center">
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">-</button>
        <button>1</button>
        <button className="w-4 h-4 bg-gray-300 flex items-center justify-center rounded-full">+</button>
      </div>
      <CancelIcon style={{color:'red'}} className="ml-6 cursor-pointer"/>
     </div>
  </div>
</div>)
}
 
export default Cart;