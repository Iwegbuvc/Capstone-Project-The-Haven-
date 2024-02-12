import Smart from '../../../assets/svg/FeatureOne.png'
import Secure from '../../../assets/svg/FeatureTwo.png'
import Transparent from '../../../assets/svg/FeatureThree.png'
import "./Features.css"

export default function Features() {
  return (
    <section className='features wrapper'>
        <section className='feature__one'>
            <img src={Smart} alt='smart' className='feature__image' />
            <h5 className='smart__heading feature__heading' >Smart Matching Algorithm</h5>
            <p className='smart__paragraph'>
                Safe Haven employs a cutting-edge Smart Matching Algorithm that 
                goes beyond basic filters. Our technology understands your unique preferences, 
                considering factors like location, amenities, and lifestyle choices. 
                Say goodbye to endless scrolling - find your dream home faster with personalized 
                matches tailored just for you.
            </p>
        </section>
        <section className='feature__two secure'>
            <img src={Secure} alt='secure' className='feature__image' />
            <h5 className='secure__heading feature__heading' >Secure Virtual Tours</h5>
            <p className='secure__paragraph'>
                Explore properties from the comfort of your home with our secure virtual tours. 
                SafeHaven brings the homes to you, offering immersive 3D experiences that 
                provide an in-depth look at every corner. Take a virtual stroll through your potential new home, 
                ensuring a confident decision-making process before scheduling in-person visits.
            </p>
        </section>
        <section className='feature__three transparent'>
            <img src={Transparent} alt='transparent' className='feature__image' />
            <h5 className='transparent__heading feature__heading' >Transparent Communication Hub</h5>
            <p className='transparent__paragraph'>
                Communication is key, and SafeHaven prioritizes transparency. 
                Our platform serves as a centralized hub for clear and open communication between landlords and tenants. 
                Stay informed about property details, lease agreements, and maintenance updates effortlessly. 
                Trust in a seamless and trustworthy communication channel that enhances the overall renting experience.
            </p>

        </section>
  </section>
  )
}
