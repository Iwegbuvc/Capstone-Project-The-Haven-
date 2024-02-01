import React from 'react'
import { useState } from 'react';
import Nav from '../../components/Nav/Nav'

export default function SignUp() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [bName, setBName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
    <Nav/>
    <div className='bg-signup-pattern bg-cover'>
      <div className='flex justify-center gap-10 '>

      <div className='rounded-2xl bg-white py-12 px-6 mt-10 w-[450px] max-w-[450px]'>
        <h1 className='text-[#0602B2] text-[32px] font-bold'>SIGN UP NOW</h1>
        <form  className='flex flex-col gap-2'>
    <div className='flex'>
    <label >First Name*</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[50%]' value={fName} onChange={(e) => setFName(e.target.value)} required />

      <label>Last Name*</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg w-[50%]'  value={lName}  onChange={(e) => setLName(e.target.value)} required />
    </div>

      <label>Business Name</label>
      <input type="text" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg' value={bName}   onChange={(e) => setBName(e.target.value)} />

      <label>Email Address*</label>
      <input type="email" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-lg' value={email}   onChange={(e) => setEmail(e.target.value)} required />


      

    </form>
        
      </div>
      <div>
        <h1>UNLOCK A WORLD OF POSSIBILITIES BY SIGNING UP WITH SAFE HAVEN TODAY</h1>

       </div>
      </div>
      
            </div> 
  </>

  )
}
