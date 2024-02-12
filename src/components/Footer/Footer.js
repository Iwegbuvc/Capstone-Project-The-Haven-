import React from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'
import './Footer.css'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IconContext } from 'react-icons';





export default function Footer() {
    const d = new Date();

  return (
    <>
        <footer className='footer blue-sh-bg wrapper'>
            <section className='footer__items'>
                <SimpleLink linkclass='footer__item' linkname='Home' linktarget=""  />
                <SimpleLink linkclass='footer__item' linkname='properties' linktarget="properties"  />
                <SimpleLink linkclass='footer__item' linkname='About Us' linktarget="about"  />
                <SimpleLink linkclass='footer__item' linkname='Leave a Review' linktarget="review"  />
                <SimpleLink linkclass='footer__item' linkname='Contact Us' linktarget="contact"  />
            </section> 
            <section className='footer__connect'>
                <section className=''>
                    <section className='subscription'>
                        <p className='newsletter connect'>
                            Subscribe to our <br/> newsletter
                        </p>
                        <p className='updates connect'> 
                            Subscribe to get <br/> latest updates
                        </p>
                    </section>

                    <section className='footer__socials socials'>
                        <h5 className='socials__heading'>
                            CONNECT WITH US
                        </h5>
                        <section className='socials_icons'>
                            <IconContext.Provider value={{ className: "global-class-name", size: '2em' }}>
                                <AiFillInstagram />
                                <FaFacebookSquare />
                                <IoLogoYoutube />
                            </IconContext.Provider>
                        </section>
                    </section>
                </section>

                
            </section>
        
        </footer>
        <p className="copyright"> &copy; Safe Haven {d.getFullYear()}. All right Reserved</p>
    </>
   
  )
}
