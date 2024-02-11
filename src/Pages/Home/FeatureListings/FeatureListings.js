import Listing from "../../../components/Listing/Listing"
import SimpleLink from '../../../components/Helpers/Links/SimpleLink'
import FeatureListingsData from "../../../Data/FeatureListingData"

export default function FeatureListings() {

  const ListSize = 3;

  const NewListing = FeatureListingsData.slice(0, ListSize).map((list) => {
    return <Listing key={list.id} ListClass={'new-listing'} {...list} />;
});

return (
<section className='new-listings wrapper'>
    <h3 className="new-listings__heading">Features Listings</h3>
    <section className="listings">
      {NewListing}
    </section>
    <section className="new-listing__btn">
      <SimpleLink linkclass='btn' linkname='See all' linktarget="feature-listing"  />
    </section>
    
</section>
)
}
