import React from 'react'
import { useState } from 'react';
import Nav from '../../components/Nav/Nav'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Button from '../../components/button/Button';




export default function SignUp() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [bName, setBName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState()
  const handleHomeSeeker = () => {
    console.log('Button clicked!');
  };

  const handleHomeOwner = () => {
    console.log('Button clicked!');
  };
  return (
    <>
    <Nav/>
    <div className='bg-signup-pattern bg-cover h-[100vh]'>
      <div className='flex justify-center gap-10 '>

      <div className='rounded-2xl bg-white py-12 px-6 mt-10 w-[450px] max-w-[450px]'>
        <h1 className='text-[#0602B2] text-[24px] font-bold mt-6 mb-2'>SIGN UP NOW</h1>
        <form  className='flex flex-col gap-2'>
    <div className='flex gap-2'>  
     <div className='flex flex-col gap-2'>
       <label >First Name*</label>
     <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[90%]' value={fName} onChange={(e) => setFName(e.target.value)} required />
     </div>

      <div className='flex flex-col gap-2'>
        <label>Last Name*</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[90%]'  value={lName}  onChange={(e) => setLName(e.target.value)} required /></div>
    </div>

      <label>Business Name</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg' value={bName}   onChange={(e) => setBName(e.target.value)} />

      <label>Email Address*</label>
      <input type="email" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg' value={email}   onChange={(e) => setEmail(e.target.value)} required />

      <div className='flex '>  
     <div className='flex flex-col'>
       <label >Password*</label>
     <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[90%]' value={password} onChange={(e) => setPassword(e.target.value)} required />
     </div>

      <div className='flex flex-col'>
        <label>Confirm Password*</label>
      <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[90%]'  value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} required /></div>
    </div>

   
    

      <div className='flex flex-col'>
        <label>Phone number*</label>
        <PhoneInput
        international
            placeholder="Enter phone number"
            defaultCountry="NG"
            value={phone}
            onChange={setPhone}
            withCountryCallingCode
            inputProps= {{
            required: true,
      }}
      
      className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg' 
      />
      <div className='flex ml-5 mt-4'>
        <h3 className=''>Signing Up as a </h3>  
      <Button
        onClick={handleHomeSeeker}
        label="Home-seeker"
        color="#F4F4F4"
        borderRadius= '26px'
        borderColor="#0602B2"
        width="90px"
        fontSize="12px"
        padding="1px 0px"
      />

<Button
        onClick={handleHomeOwner}
        label="Home-owner"
        color="#0602B2"
        backgroundColor = "F4F4F4"
        borderRadius= '26px'
        borderColor="#0602B2"
        width="90px"
        fontSize="12px"
        padding="1px 0px"
      /></div>
      
      </div>
  
      

    </form>
        
      </div>
      <div className=''>
        <h1>UNLOCK A WORLD OF POSSIBILITIES BY SIGNING UP WITH SAFE HAVEN TODAY</h1>

       </div>
      </div>
      
            </div> 
  </>

  )
}
