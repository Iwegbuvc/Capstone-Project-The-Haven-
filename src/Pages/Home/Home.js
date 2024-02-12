import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import NewListings from './NewListings/NewListings'
import Hero from './Hero/Hero'
import FeatureListings from './FeatureListings/FeatureListings'
import Testimonials from './Testimonials/Testimonials'
import Quotes from './Quotes/Quotes'
import Features from './Features/Features'

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <NewListings/>
      <FeatureListings/>
      <Testimonials/>
      <Quotes/>
      <Features/>
      <Footer/>
    </>
  )
}
