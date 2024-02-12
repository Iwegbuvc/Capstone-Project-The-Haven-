import React from 'react'
import SimpleLink from '../../../components/Helpers/Links/SimpleLink'
import HeroImg from '../../../Assets/images/Heroimage.png'
import './Hero.css'

const image= {
  background: `url(${HeroImg}) no-repeat center center/cover`,
  border: '0.1rem solid var(--grey-sh)'
}


export default function Hero() {
  return (
    <main className='hero wrapper' style={image} >
      <section className='hero__content content'>
          <h1 className='content__heading-one'>
              Find Your Home,<br/> Your Safe <span className='blue-sh-clr haven'>Haven</span>
          </h1>
          <h2 className='content__heading-two blue-sh-clr'>
              Let’s help you find a homely apartment.
          </h2>
          <section className='content__btns'>
              <SimpleLink linkclass='btn' linkname='Find a home' linktarget="properties"  />
              <SimpleLink linkclass='btn' linkname='List a home' linktarget="list-home"  />
          </section>
      </section>
    </main>
  )
}
