import React from 'react'
import Nav from '../../components/Nav/Nav'
import HeroImg from '../../Assets/images/BACKGROUND.png'
import './Layout.css'


export default function Layout({title, heading, children, body}) {

  const image= {
    background: `url(${HeroImg}) no-repeat top center/cover`,
    border: '1px solid grey'
  }

  return (
    <section className='other-wrapper' style={image}>
     <Nav/>
     <section className={body +" other-section"}>
        <h1 className={heading + " other-section__heading"}>{title}</h1>
        <section className="other-section__body">{children}</section>
    </section>

    </section>
  )
}
