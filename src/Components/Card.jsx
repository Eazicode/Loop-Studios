const Card = ({text, image}) => {
  return ( 
    <>
      <div className='h-[400px] bg-no-repeat bg-cover bg-center ps-5 flex items-end' style={{backgroundImage:`url(${image})`}}>
        <p className='uppercase text-white text-[21px] pb-5 font-light'>{text}</p>
      </div>
    </>
   );
}
 
export default Card;