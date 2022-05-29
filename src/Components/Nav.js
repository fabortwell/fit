import React, {useState} from 'react'
import { Menu } from '@headlessui/react'
import Bmi from './Bmi'
import { Link } from "react-router-dom";




const Nav = () => {
  const[click, setClick] = useState(true)
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/about"},
      {name:"Equipment",link:"/equipment"},
      {name:"Find a Gym",link:"/find-a-gym"},
      {name:"Pricing",link:"/pricing"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='flex'>
   <div className=' navbar shadow-md w-full fixed mt-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white-800'>
        <span className='text-3xl text-red-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Fit-Peeps
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }



<span onClick={(previousValue)=>setClick(!previousValue)} className='md:ml-8 text-xl md:my-0 my-7'>
              <a className='text-gray-800 hover:text-gray-400 duration-500' > Bmi </a>
            </span>




  <button className="bg-gray-900 text-white px-3 py-2 border hover:bg-gray-600 ml-8">
          Sign in
        </button>
        <button className="bg-red-600 text-white px-3 py-2 border hover:bg-red-800 ml-8">
          Sign Up
        </button>
      </ul>
      </div>
    </div> 
  
   <div className='hero'> 
   {/* <div className={click ? "hidden" : null}>
   <Bmi />
   </div> */}
 
    <img src="https://cdn.shopify.com/s/files/1/0078/6006/0207/files/iFitNut-Web_Hero-Desktop_1.jpg?v=1609781276" alt="fit" className="hero-img"/>
  </div> 
   </div>
  )
}

export default Nav