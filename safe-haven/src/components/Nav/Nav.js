import React from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'
import "./Nav.css"

export default function Nav() {

  return (
    <nav className='TopNav'>
       <section className='NavLogo'>
            <SimpleLink linkclass='LogoName' linkname={<>Safe <span className='blue-sh-clr haven'>Haven</span></> } linktarget=""  />
        </section> 
       <section className='NavItems'>
            <SimpleLink linkclass='NavLink' linkname='Home' linktarget=""  />
            <SimpleLink linkclass='NavLink' linkname='Properties' linktarget="properties"  />
            <SimpleLink linkclass='NavLink' linkname='About Us' linktarget="about"  />
            <SimpleLink linkclass='NavLink' linkname='Contact Us' linktarget="contact"  />
        </section> 
       <section className='NavRegister'>
              <SimpleLink linkclass='Navlogin NavLink' linkname='Login' linktarget="login"  />
        </section> 
    </nav>
  )
}
