import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Logo = require('../assets/img/logo.png');

const Footer = () => {
  return (
    <div className="w-full h-36 flex mt-8 bg-[#ececec] text-[#1c1c1c]">
      <img src={Logo} alt="" className="w-1/12" />
      <div className="w-1/4 h-full flex flex-col gap-0 justify-center items-center pl-4 pb-2">
        <h2 className='font-semibold text-md'>Connect with us</h2>
        <div className="flex justify-center items-center w-full gap-2 text-black">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <XIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10" />
          </a>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-start pl-4 mt-3">
        <h2 className="text-md font-semibold">Company</h2>
        <h3 className="text-sm">Terms of Service</h3>
        <h3 className="text-sm">Customer Care</h3>
        <h3 className="text-sm">Privacy</h3>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-start pl-4 gap-2">
        <h2 className="text-md font-semibold">Contact Us</h2>
        <div className="w-full flex gap-2">
          <input
            type="text"
            placeholder="Draft"
            className="border-2 border-gray-400 rounded-lg w-10/12 p-1 text-sm outline-none focus:placeholder:translate-x-1/2 focus:placeholder:text-[8px]  focus:placeholder:duration-1000 focus:placeholder:text-[#00df9a] focus:placeholder:opacity-50 focus:placeholder:font-semibold"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-[#00df9a] rounded-xl py-1  text-[14px] w-1/5  text-center hover:scale-105 duration-500 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
