import React from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'
import './Footer.css'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IconContext } from 'react-icons';




export default function Footer() {
  return (
    <footer className='Footer blue-sh-bg'>
        <section className='FooterItems'>
            <SimpleLink linkclass='FooterLink' linkname='Home' linktarget="home"  />
            <SimpleLink linkclass='FooterLink' linkname='properties' linktarget="properties"  />
            <SimpleLink linkclass='FooterLink' linkname='About Us' linktarget="about"  />
            <SimpleLink linkclass='FooterLink' linkname='Leave a Review' linktarget="review"  />
            <SimpleLink linkclass='FooterLink' linkname='Contact Us' linktarget="contact"  />
        </section> 
        <section className='FooterConnect'>
            <section >
                    <p className='newsletter connect'>
                        Subscribe to our <br/> newsletter
                    </p>
                    <p className='updates connect'> 
                        subscribe to get <br/> latest updates
                    </p>
                <section className='FooterSocials'>
                    <h5>
                        CONNECT WITH US
                    </h5>
                    <IconContext.Provider value={{ className: "global-class-name", size: '2em' }}>
                        <AiFillInstagram />
                        <FaFacebookSquare />
                        <IoLogoYoutube />
                    </IconContext.Provider>

                </section>
            </section>
        </section>
    </footer>
  )
}
