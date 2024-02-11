import React, { useState } from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'
import "./Nav.css"
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


export default function Nav() {
const[click, setClick] = useState(false);

const handleClick = () => setClick(!click);

  return (
    <nav className='nav'>
       <section className='nav__logo'>
            <SimpleLink linkclass='logo' linkname={<>Safe <span className='blue-sh-clr haven'>Haven</span></> } linktarget=""  />
        </section> 
       <section className={click ? 'nav__items show':'nav__items hide' }>
            <SimpleLink linkclass='link' linkname='Home' linktarget=""  />
            <SimpleLink linkclass='link' linkname='Properties' linktarget="properties"  />
            <SimpleLink linkclass='link' linkname='About Us' linktarget="about"  />
            <SimpleLink linkclass='link' linkname='Contact Us' linktarget="contact"  />
            <SimpleLink linkclass='link link__login blue-sh-clr' linkname='Login' linktarget="login"  />
        </section> 
        <section className='nav__icons' onClick={handleClick}>
          {click? <FaTimes />:<FaBars />}
        </section>
    </nav>
  )
}
