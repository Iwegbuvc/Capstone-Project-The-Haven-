import React from 'react'
import './About.css'
import Layout from '../Layout/Layout'

export default function About() {
  
  return (
    <>
     <Layout title={<>About <span className='blue-sh-clr'>Us</span></>} 
             heading = {'about__heading'}
             body = {'about__body'}
     >

      <p className='about-us__paragraph'>
        Safe Haven is your ally in addressing housing challenges for marginalized
        individuals. Our initiative connects communities with landlords and tiny-
        home builders, offering affordable micro-living solutions. Focused on
        combating discrimination and enhancing digital literacy, Safe Haven
        streamlines the housing search experience. Inspired by successful models
        and driven by inclusivity, we aim to create a just and accessible
        environment. Join us in building homes and shaping futures at SafeHaven
      </p>

     </Layout>

    </>

  )
}

