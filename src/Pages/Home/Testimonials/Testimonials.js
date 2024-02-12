import TestimonialCard from "../../../components/Helpers/Cards/TestimonialCard"
import "./Testiomonials.css"


export default function Testimonials() {
  return (
    <section className='testimonials wrapper'>
        <section className="testimonial__customers testimonial">
            <TestimonialCard
                review= "SafeHaven transformed my home-seeking journey! The app's user-friendly interface made finding my dream home a breeze. From detailed listings to swift communication with landlords, SafeHaven exceeded my expectations, making my move a stress-free experience."
                reviewer= "Grace Anwuli"
            />
            <h3 className="testimonial__heading">Hear from our <br/> <span className='blue-sh-clr'>happy</span> <br/> customers</h3>
        </section>
        <section className="testimonial__owners testimonial">
            <h3 className="testimonial__heading">And from our <br/> <span className='blue-sh-clr'>satisfied</span> <br/> home-owners</h3>
            <TestimonialCard
              review= 'A visual guide could be a wireframe, creative composition, or information architecture. A device that enables collaboration will lessen the chance of work having to be completely redone. A manager could create a visual guide for the team to complete the build-out.'
              reviewer= 'Arnold Afam'
            />
        </section>
    </section>
  )
}
