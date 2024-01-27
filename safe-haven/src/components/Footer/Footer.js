import React from 'react'
import SimpleLink from '../Helpers/Links/SimpleLink'

export default function Footer() {
  return (
    <footer>
        <section className='FooterItems'>
            <SimpleLink linkclass='FooterLink' linkname='Home' linktarget="home"  />
            <SimpleLink linkclass='FooterLink' linkname='properties' linktarget="properties"  />
            <SimpleLink linkclass='FooterLink' linkname='About Us' linktarget="about"  />
            <SimpleLink linkclass='FooterLink' linkname='Contact Us' linktarget="contact"  />
        </section> 
        <section>
            <section>
                <p>
                    Subscribe to our newsletter
                    subscribe to get latest updates
                </p>
            </section>
            <section>
                <h5>
                    CONNECT WITH US
                </h5>
            </section>
        </section>
    </footer>
  )
}
