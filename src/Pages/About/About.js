import React from 'react'
import Nav from '../../components/Nav/Nav'
import about from './About.css'
export default function About() {
  return (
    <>
      <Nav/>
      <main>
      <div className='main_container'>
       <div className="main_text_container">
       <h2 className="about_text">About <span className="us_text">Us</span></h2>
       <div className="full_text">
        Safe Haven is your ally in addressing housing challenges for marginalized <br/>
         individuals. Our initiative connects communities with landlords and tiny-<br/>home builders, offering affordable micro-living solutions. Focused on
         combating discrimination and enhancing digital literacy, Safe Haven<br/>
           streamlines the housing search experience. Inspired by successful models<br/> 
           and driven by inclusivity, we aim to create a just and accessible<br/>
           environment. Join us in building homes and shaping futures at SafeHaven</div>
       </div>
      </div>
    </main>  
    </>

  )
}
