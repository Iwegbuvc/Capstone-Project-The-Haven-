import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Properties.css'

export default function Properties() {
  return (
    <>
    <Nav/>
   <div className="main_container">
      <h3 className="heading_text">List a home</h3>
      <div class="upper_container">
        <div class="large_view">
          <img src="https://placehold.co/700x700" alt="large view screen" />
        </div>
        
        <div class="side_view1">
          <img src="https://placehold.co/350x340" alt="large view screen1" />
        </div>
        <div class="side_view2">
          <img src="https://placehold.co/350x340"  alt=""side_view2/>
        </div>
      </div>
      <div className="lower_container">
        <div className="features_container">
          <div className="feature_item1">
            <h6 className="feature_name">Bedrooms</h6>
            <p className="feature_value">x</p>
          </div>
          <div className="feature_item">
            <h6 className="feature_name">Bathrooms</h6>
            <p className="feature_value">x</p>
          </div>
          <div className="feature_item3">
            <h6 className="feature_name">Repair Quality</h6>
            <p className="feature_value">xxxxxx</p>
          </div>
          <div className="feature_item4">
            <h6 className="feature_name">status</h6>
            <p className="feature_value">xxxx</p>
          </div>
        </div>
        <div className="price_container">
        <form>
          <label >Rent Price</label><br/>
          <input type='number'/><br/>
          <label>Duration</label><br/>
          <input type="text"/><br/>
          <label >Location</label><br/>
          <input type='text'/><br/>
         <button>Add Listing</button>
        </form>
        </div>
        <div className="description_container">
          <h3 className="description_text">Description</h3>
          <div className="house-container">
            <div className="exterior">
              <h2>Exterior:</h2>
              <p>Architectural Style: Our house boasts a blend of modern minimalism and timeless elegance. Its clean lines, large windows, and a welcoming front porch create an inviting facade.</p>
              <p>Color Palette: The exterior is painted in soothing earth tones, with a touch of slate gray for the roof tiles.</p>
              <p>Landscaping: A well-maintained garden surrounds the house, featuring vibrant flowers, neatly trimmed hedges, and a winding stone pathway leading to the front door.</p>
            </div>
            <div className="entryway">
              <h2>Entryway:</h2>
              <p>As you step inside, the foyer greets you with warmth. The floor is adorned with honey-hued hardwood, and a crystal chandelier hangs from the ceiling.</p>
              <p>To the left, a coat rack stands ready to hold your outerwear, while a full-length mirror reflects natural light from the adjacent window.</p>
            </div>
            <div className="living-room">
              <h2>Living Room:</h2>
              <p>The spacious living room exudes comfort. Plush sofas in neutral tones invite you to sink in, while a fireplace adds coziness during chilly evenings.</p>
              <p>Bookshelves line one wall, filled with well-loved novels and family photo albums. A handwoven rug anchors the seating area.</p>
            </div>
            <div className="dining-area">
              <h2>Dining Area:</h2>
              <p>The dining room, connected to the living space, features a rustic farmhouse table surrounded by mismatched upholstered chairs.</p>
              <p>Above the table hangs a vintage chandelier, casting a warm glow during intimate dinners.</p>
            </div>
            <div className="kitchen">
              <h2>Kitchen:</h2>
              <p>The heart of the home, the kitchen, boasts marble countertops, stainless steel appliances, and a subway tile backsplash.</p>
              <p>Sunlight streams through the window, illuminating the breakfast nook where you can sip coffee and watch the sunrise.</p>
            </div>
            <div className="bedrooms">
              <h2>Bedrooms:</h2>
              <div className="master-suite">
                <h3>Master Suite:</h3>
                <p>The master bedroom exudes tranquility. A canopy bed with flowing curtains takes center stage.</p>
                <p>A bay window offers a cozy reading nook, complete with a velvet armchair and a stack of your favorite books.</p>
              </div>
              <div className="guest-bedroom">
                <h3>Guest Bedroom:</h3>
                <p>The guest room features a daybed that doubles as a sofa. A gallery wall displays travel souvenirs.</p>
                <p>A writing desk by the window invites creativity.</p>
              </div>
            </div>
            <div className="bathrooms">
              <h2>Bathrooms:</h2>
              <p>The bathrooms are a blend of spa-like serenity and functional elegance.</p>
              <p>The master bath boasts a clawfoot tub, while the guest bath features a glass-enclosed shower.</p>
            </div>
          </div>
            
        
        </div>
      </div>
    </div>
    </>
  );
}
