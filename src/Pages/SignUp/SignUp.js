import React from 'react'
import { useState } from 'react';
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
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

  const handleRegister = () => {
    console.log('Button clicked!');
  };
  return (
    <>
    <Nav/>
    <div className='bg-signup-pattern bg-cover h-[100vh] flex items-center'>
      <div className='flex justify-center gap-20 pb-24 mt-16 '>

      <div className='rounded-2xl bg-white py-12 px-8 mt-14 w-[400px] md:w-[70%] max-w-[400px]'>
        <h1 className='text-[#0602B2] text-[24px] font-bold mt-6 mb-2'>SIGN UP NOW</h1>
        <form  className='flex flex-col gap-2'>
    <div className='flex gap-2'>  
     <div className='flex flex-col gap-2'>
       <label >First Name*</label>
     <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl w-[90%]' value={fName} onChange={(e) => setFName(e.target.value)} required />
     </div>

      <div className='flex flex-col gap-2'>
        <label className='pl-4'>Last Name*</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl w-[90%] self-end'  value={lName}  onChange={(e) => setLName(e.target.value)} required />
      </div>
    </div>

      <label>Business Name</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl' value={bName}   onChange={(e) => setBName(e.target.value)} />

      <label>Email Address*</label>
      <input type="email" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl' value={email}   onChange={(e) => setEmail(e.target.value)} required />

      <div className='flex gap-2'>  
     <div className='flex flex-col gap-2'>
       <label >Password*</label>
     <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl w-[90%]' value={password} onChange={(e) => setPassword(e.target.value)} required />
     </div>

      <div className='flex flex-col gap-2 '>
        <label className='pl-4'>Confirm Password*</label>
      <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl w-[90%] self-end'  value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} required /></div>
    </div>

   
    

      <div className='flex flex-col gap-2'>
        <label>Phone Number*</label>
        <PhoneInput
        international
            placeholder="Phone number"
            defaultCountry="NG"
            value={phone}
            onChange={setPhone}
            withCountryCallingCode
            inputProps= {{
            required: true,
      }}
      
      className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl' 
      />
      <div className='flex justify-start ml-5 mt-4 gap-2'>
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
        backgroundColor = "#F4F4F4"
        borderRadius= '26px'
        borderColor="#0602B2"
        width="90px"
        fontSize="12px"
        padding="1px 0px"
      /></div>

      <div className='flex justify-center mt-8 font-bold'>
      <Button
        onClick={handleRegister}
        label="REGISTER"
        color="#FFFFFF"
        backgroundColor = "#1E18FF"
        borderRadius= '26px'
        borderColor="#1E18FF"
        width="50%"
        fontSize="12px"
        padding="4px 0px"
      />
      </div>
      <div className='flex justify-center ml-3 mt-3 gap-2'>
        <h3 className=''>Already have an account? </h3> <span className='text-[#0602B2] font-semibold'><Link to="/login" style={{textDecoration: 'underline'}} >Login</Link></span>  
        </div>
      </div>
  
      

    </form>
        
      </div>
      <div className='hidden md:flex md:justify-center items-center md:w-[30%]'>
        <h1 className='font-[1000] text-[40px] text-[#F4F4F4] p-[20px] '>UNLOCK A WORLD OF POSSIBILITIES BY SIGNING UP WITH SAFE <span className='text-[#0602B2]'>HAVEN</span> TODAY</h1>

       </div>
      </div>
      
            </div> 
  </>

  )
}
