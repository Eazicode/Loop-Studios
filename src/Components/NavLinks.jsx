const NavLinks = ({className}) => {
  return ( 
    <>
      <ul className={className}>
        <li className='cursor-pointer hover:underline decoration-2 underline-offset-8 pb-3'>About</li>
        <li className='cursor-pointer  hover:underline decoration-2 underline-offset-8 pb-3'>Careers</li>
        <li className='cursor-pointer hover:underline decoration-2 underline-offset-8 pb-3' >Events</li>
        <li className='cursor-pointer hover:underline decoration-2 underline-offset-8 pb-3'>Products</li>
        <li className='cursor-pointer hover:underline decoration-2 underline-offset-8 pb-3'>Support</li>
      </ul>
    </>
   );
}
 
export default NavLinks;