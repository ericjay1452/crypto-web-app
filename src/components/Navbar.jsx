import React from 'react'
import {Link } from "react-router-dom"
import Logo from "../constant/Binance-Logo.svg"
import { MenuDta } from '../Data/MenuData'
import {Button, Avatar} from "antd"
import "../index.css"

const Navbar = () => {
    

  return (
    <div className = "relative w-full block">
        <div className='relative w-full h-full'>
            <div className='block relative'>
            <Link to = "/" className='font-bold w-full text-center'>
                <Avatar src = {Logo} id = "img"/>
            </Link>
            </div>
        </div>

            <div>
              <ul className='mt-6'>
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
  )
}

export default Navbar