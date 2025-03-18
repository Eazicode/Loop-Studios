import NavLinks from "./NavLinks";

const NavBar = () => {
  return ( 
    <>
      <nav className='flex justify-between px-5 md:px-10 lg:px-30 items-center pb-30'>
        <div>
          <img className='w-35 md:w-45' src="../logo.svg" alt="" />
        </div>

        <NavLinks  className={'hidden md:flex gap-5 font-bold text-white text-sm'}/>

        <div className='md:hidden'>
          <button>
            <img className='w-10 text-white cursor-pointer' src="../hambuger.svg" alt="" />
          </button>
        </div>
      </nav>
    </>
   );
}
 
export default NavBar;