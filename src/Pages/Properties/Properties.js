import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import NewListings from '../Home/NewListings/NewListings'
import FeatureListings from '../Home/FeatureListings/FeatureListings'

export default function Properties() {
  return (
    <>
      <Nav/>
        <h1 className='wrapper'>Properties</h1>
        <NewListings/>
        <FeatureListings/>
      <Footer/>
    </>

  )
}
