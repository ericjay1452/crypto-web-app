import React, {useEffect, useState} from 'react'
import {Link } from "react-router-dom"
import Logo from "../constant/Binance-Logo.svg"
import { MenuDta } from '../Data/MenuData'
import {Button} from "antd"
import {GiHamburgerMenu} from "react-icons/gi"
import "../index.css"

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect ( () => {     
   const {innerWidth} = getWindowSize()
     if(innerWidth < 768) {
      setisOpen(false)
     }
     else {setisOpen(true)}
  }, [windowSize])


   
  return (<> 
    
    <div className = "relative w-full block bg-slate-900 flex justify-between items-center p-2">

        <div className='relative w-full h-full'>
            <div className='block relative'>
            <Link to = "/" className='font-bold text-center w-20 h-20'>
                <img src = {Logo} id = "img" className='max-w-full h-auto' alt = {"Logo"}/>
            </Link>
            </div>
        </div>
   
   <div className='bg-white block'>
   <div className = "absolute rounded bg-inherit right-2 top-6 block md:hidden ">
   <button onClick={() => setisOpen(!isOpen)} className = "w-full px-6 block py-2 h-full">
    <GiHamburgerMenu className='text-xl'/>
     </button>
   </div>
   </div>
 

              {isOpen && (<>

                <div className = "block md:hidden absolute z-index-40 bg-black custom">
                  <div className = "block h-full">
                <ul className='flex flex-col'>
                  {
                      MenuDta?.map( item =>{
                          const {name, id, icon, color, url} = item
                        return(
                          <li key = {id}>
                            <Link to = {url} className= "p-2 mb-2 flex items-center text-white hover:bg-white hover:text-black">
                              <span style={{color : `${color}`}} className = "block relative">{icon}</span>
                              <span className = "block relative text-center ml-2">{name}</span>
                              </Link>
                          </li>
                        )
                        
                      })
                      
                  }
                  </ul>
                  </div>
              </div>
              </>
              )}
        
            <div className='hidden md:block'>
              <ul className='flex'>
                {
                    MenuDta?.map( item =>{
                        const {name, id, icon, color, url} = item
                      return(
                        <li key = {id}>
                          <Link to = {url} className= "p-2 mb-2 flex items-center text-white hover:bg-white hover:text-black">
                            <span style={{color : `${color}`}} className = "block relative">{icon}</span>
                            <span className = "block relative text-center ml-2">{name}</span>
                            </Link>
                        </li>
                      )
                    })
                }
                </ul>
            </div>
          
          </div>
    
    </>
  )
}

export default Navbar