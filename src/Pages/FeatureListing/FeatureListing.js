import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Listing from '../../components/Listing/Listing'
import FeatureListingsData from '../../Data/FeatureListingData'


export default function FeatureListing() {

  const NewListing = FeatureListingsData.map((list) => {
    return <Listing key={list.id} ListClass={'new-listing'} {...list} />;
});

  return (
    <>
    <Nav/>

    <section className='new-listings wrapper'>
        <h3 className="new-listings__heading">Features Listings</h3>
        <section className="listings">
          {NewListing}
        </section>
    </section>

    <Footer/>
  </>

  )
}
