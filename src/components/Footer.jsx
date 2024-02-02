import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return ( 
    <div className="w-full h-24 flex mt-32 bg-gray-200">
      <div className='w-2/6 h-full flex flex-col justify-center items-start pl-4'>
        <h2>Connect with us</h2>
        <div className='flex justify-center w- pr-8 gap-2'>
          <FacebookIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
          <XIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
          <InstagramIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
          <LinkedInIcon className='text-[12px] mt-1 cursor-pointer rounded-full bg-gray-100 p-1 w-10'/>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;