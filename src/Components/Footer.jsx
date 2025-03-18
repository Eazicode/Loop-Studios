import { FaInstagram, FaPinterest, FaRegCopyright, FaSquareFacebook, FaTwitter, } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return ( 
    <>
      <footer className='bg-black'>
        
        <div className='md:flex justify-between items-center px-3 md:px-12 lg:px-30 pt-20 pb-10'>

          <div>
            <img className='w-35 md:w-45 pb-10 mx-auto md:mx-0' src="../logo.svg" alt="" />

            <NavLinks  className={'md:flex text-center gap-5 font-bold text-white text-sm mb-10 md:mb-0'}/>
          </div>

          <div>
            <div className='flex gap-5 pb-10 px-10 md:px-0'>
              <FaSquareFacebook className='text-white text-3xl cursor-pointer mx-auto md:mx-0'/>
              <FaTwitter className='text-white text-3xl cursor-pointer mx-auto md:mx-0'/>
              <FaPinterest className='text-white cursor-pointer text-3xl mx-auto md:mx-0'/>
              <FaInstagram className='text-white cursor-pointer text-3xl mx-auto md:mx-0'/>
            </div>

            <div className='flex justify-center'>
              <p className='text-white opacity-50 pr-2'><FaRegCopyright /> </p>
              <p className='text-white text-sm opacity-50'>{year} LoopStudios. All rights reserved.</p>
            </div>
          </div>

        </div>

      </footer>
    </>
   );
}
 
export default Footer;