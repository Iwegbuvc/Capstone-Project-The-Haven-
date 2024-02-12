import React from 'react'
import Nav from '../../components/Nav/Nav'
import NewListings from '../Home/NewListings/NewListings'
import FeatureListings from '../Home/FeatureListings/FeatureListings'
import SimpleLink from '../../components/Helpers/Links/SimpleLink'
import './Properties.css'

export default function Properties() {
  return (
    <>
      <Nav/>
      <section className='wrapper'>
        <h1>Properties</h1>
      <NewListings/>
      <FeatureListings/>
      <section className='list-home'>
        <h3 className='house-owner'>Are you a house Owner? List a house</h3>
        <SimpleLink linkclass='btn list-home__btn' linkname='List a home' linktarget="list-home"  />
      </section>
      </section>

    </>
  )
}
