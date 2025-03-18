import { useState, useEffect } from 'react';
import { FaInstagram, FaPinterest, FaRegCopyright, FaSquareFacebook, FaTwitter, } from "react-icons/fa6";
import data from "../card.json";
import NavBar from './Components/NavBar';
import Card from './Components/Card'
import './index.css'
import NavLinks from './Components/NavLinks';


function App() {
  const [cards, setCards] = useState([]);
  const year = new Date().getFullYear();


  useEffect(() => {
    setCards(data.card)
  }, [cards])

  return (
    <>
      <header className='bg-[url(../image-hero.jpg)] bg-no-repeat bg-center bg-cover pt-15 pb-30' >
        <NavBar/>

        <section>
          <div className='mx-auto md:mx-0 text-[30px] xs:text-[45px] md:text-[50px] lg:text-[60px] md:ms-10 lg:ms-30 p-4 md:p-8 w-[290px] xs:w-[380px] md:w-[450px] lg:w-[550px] leading-[40px] xs:leading-[50px] md:leading-[65px] border-3 font-extralight text-white uppercase'>
            immersive <br /> experiences <br /> that deliver
          </div>
        </section>
      </header>

      <section  className='md:flex justify-center items-center pt-30'>
        <div className='mx-auto md:mx-0 w-[300px] xs:w-[420px] tablet:w-[500px] lg:w-[600px]'>
          <img className='rounded-lg w-fit' src="../image-interactive.jpg" alt="" />
        </div>

        <div className='flex items-center bg-white text-black h-[300px] lg:h-[450px] md:-ml-[160px] md:mt-[300px] lg:mt-[280px]'>
          <div className='mx-auto text-center md:text-left px-[30px] lg:px-[50px]'>
            <h1 className='uppercase font-light text-[25px] xs:text-[35px] md:text-[45px] leading-[25px] xs:leading-[40px] md:leading-[50px] pb-[25px]'>
              the leader in <br /> interactive vr
            </h1>

            <p className='text-xs md:text-sm'>
              Founded in 2011, LoopStudios has been producing world-class <br className='hidden xs:block'/> virtual reality projects for some of the best companies around the <br className='hidden xs:block'/> globe. Our award-winning creations have transformed <br className='hidden xs:block'/> businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>

      </section>

      <div className='md:flex md:justify-between py-10 px-15 lg:px-30'>
        <p className='uppercase font-light text-[20px] md:text-[45px] text-center md:text-left'>our creations</p>
         
         <div className='hidden md:block'>
          <button className='uppercase hover:bg-black hover:text-white bg-white border text-black cursor-pointer px-8 py-2 text-sm'>see all</button>
         </div>
      </div>

      <article className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 px-10 lg:px-25 mt-5 md:mt-10 mb-20 md:mb-35'>
        {
          cards.map((card) => {
            return (
              <Card key={card.id}
                text={card.category}
                image={card.imageClass}
              />
            )
          })
        }
      </article>

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
  )
}

export default App
