import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Listing from '../../components/Listing/Listing'
import NewListingData from '../../Data/NewListingData'


export default function NewListing() {

  const NewListing = NewListingData.map((list) => {
    return <Listing key={list.id} ListClass={'new-listing'} {...list} />;
  });

  return (
  <>
    <Nav/>

    <section className='new-listings wrapper'>
        <h1 className="new-listings__heading">New Listings</h1>
        <section className="listings">
          {NewListing}
        </section>
    </section>
    
    <Footer/>
  </>
   
  )
}
