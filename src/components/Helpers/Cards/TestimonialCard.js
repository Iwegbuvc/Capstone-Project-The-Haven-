import "./TestimonialCard.css"
import { RxAvatar } from "react-icons/rx";


export default function TestimonialCard({review, reviewer}) {

  return (
    <section className='testimonial--card'>
        <section className="card__inner">
          <section className="Avatar" >
              <RxAvatar  style={{fontSize:'2rem'}} />
          </section>
          <section className="review">
            <p className="review__info">{review}</p>
          </section>
          <section className="reviewer">
            <p className="reviewer__name">{reviewer}</p>
          </section>
        </section>
    </section>
  )
}
