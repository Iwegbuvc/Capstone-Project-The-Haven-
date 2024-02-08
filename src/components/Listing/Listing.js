import { HiOutlineMapPin } from "react-icons/hi2"




export default function Listing({ListClass, image, price, location, brief, duration }) {
  return (
    <section className={ListClass + ' listing'} >
        <img src={require(`../../Assets/images/${image}.png`)} alt=""/>
        <section className={ListClass +"--info"}>
            <h4 className={ListClass + "--heading blue-sh-clr"}>₦ {price + " " + duration}</h4>
            <p className={ListClass + "--location"}>
            <span><HiOutlineMapPin /></span> 
             <span>{location}</span> 
            </p>
            <p className={ListClass + "--brief"}>{brief}</p>
        </section>
    </section>
  )
}



