import React from 'react'
import Layout from '../Layout/Layout'
import SimpleBtn from '../../components/button/SimpleBtn';
import './Contact.css'


const inputs = [
  {
    id: 1,
    placeholder: "Name",
    name: "fullname",
    type: "text",
    required: true,
  },
  {
    id: 2,
    placeholder: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    id: 3,
    placeholder: "Phone No",
    name: "phone",
    type: "tel",
    required: true,
  },
];


export default function Contact() {
  //handle state of form
  const [contactValue, setContactValue] = React.useState({
    fullname: "",
    email: "",
    message: "",
  });

  //handle form change
  function handleChange(event) {
    const { name, value } = event.target;
    setContactValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const ContactInputs = inputs.map((input) => (
    <div className="form-input">    
      <input
        key={input.id}
        {...input}
        value={contactValue[input.name]}
        handleChange={handleChange}
        formInputClass="contact-form-input"
      />
    </div>
  ));

  // Handle signup submit
  function handleSubmit(event) {
    event.preventDefault();
    setContactValue((prevValue) => {
      return {
        ...prevValue,
        fullname: "",
        register: "",
        message: "",
      };
    });
  }
  return (
    <>
      <Layout 
        title={<>Need Help? <br/> Contact <span className='blue-sh-clr'>Us</span></>}
        heading = {'contact__heading'}
        body = {'contact__body'}
      >
        <h2 className='blue-sh-clr'>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">

            {ContactInputs}
            <div className="text-area">
              <textarea
                onChange={handleChange}
                value={contactValue.textarea}
                name="message"
                id="message"
                placeholder="Message"
                className="contact-form-input"
              />
            </div>

            <div className='contact-btn'>
              <SimpleBtn content="Send" btnclass="contact-form-btn" />
            </div>

            
          </form>
      </Layout>    
    </>
  )
}
