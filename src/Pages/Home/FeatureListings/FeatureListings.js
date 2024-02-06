import Listing from "../../../components/Listing/Listing"
import NewListingData from "../../../Data/NewListingData"
import SimpleLink from '../../../components/Helpers/Links/SimpleLink'

export default function FeatureListings() {
  const NewListing = NewListingData.map((list) => {
    return <Listing key={list.id} ListClass={'new-listing'} {...list} />;
});

return (
<section className='new-listings wrapper'>
    <h3 className="new-listings__heading">Features Listings</h3>
    <section className="listings">
      {NewListing}
    </section>
    <section className="new-listing__btn">
      <SimpleLink linkclass='btn' linkname='See all' linktarget="properties"  />
    </section>
    
</section>
)
}
