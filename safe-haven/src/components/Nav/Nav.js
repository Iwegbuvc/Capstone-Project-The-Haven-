import React from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'

export default function Nav() {

  return (
    <nav>
       <section className='NavLogo'>
            <SimpleLink linkclass='logoName' linkname='Safe Haven' linktarget="home"  />
        </section> 
       <section className='NavItems'>
            <SimpleLink linkclass='NavLink' linkname='Home' linktarget="home"  />
            <SimpleLink linkclass='NavLink' linkname='properties' linktarget="properties"  />
            <SimpleLink linkclass='NavLink' linkname='About Us' linktarget="about"  />
            <SimpleLink linkclass='NavLink' linkname='Contact Us' linktarget="contact"  />
        </section> 
       <section className='NavRegister'>
              <SimpleLink linkclass='Navlogin' linkname='Login' linktarget="login"  />
        </section> 
    </nav>
  )
}
