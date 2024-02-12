// import React from 'react'
import Nav from '../../components/Nav/Nav'
import { useState } from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Button clicked!');
  };
  return (
    <>
    <Nav/>
    <div className='bg-signup-pattern bg-cover h-[100%]'>
      <div className='flex justify-center gap-20 pb-24 '>

      <div className='rounded-2xl bg-white py-12 px-8 mt-10 w-[400px] md:w-[75%] max-w-[400px] md:max-w-[450px]'>
        <h1 className='text-[#0602B2] text-[24px] font-bold mt-6 mb-2'>LOGIN</h1>
        <form  className='flex flex-col'>
   


      <label className='mb-[10px]'>Email Address</label>
      <input type="email" className='text-[#0602B2] mb-[10px] border-2 border-[#9D9D9D] rounded-xl' value={email}   onChange={(e) => setEmail(e.target.value)} required />
 
  
       <label className='mb-[-12px]'>Password</label><span className='text-right  text-[#0602B2] text-sm'><Link to="/forgotPassword">Forgot Password?</Link></span>
     <input type="password" className='text-[#0602B2] border-2 border-[#9D9D9D] rounded-xl ' value={password} onChange={(e) => setPassword(e.target.value)} required />

     <div className='flex justify-center mt-8 font-bold'>
      <Button
        onClick={handleLogin}
        label="LOGIN"
        color="#FFFFFF"
        backgroundColor = "#1E18FF"
        borderRadius= '26px'
        borderColor="#1E18FF"
        width="50%"
        fontSize="12px"
        padding="4px 0px"
      />
      </div>

      <div className='flex justify-center ml-3 mt-1 gap-2'>
      <h3 className=''>Don't have an account yet? </h3> <span className='text-[#0602B2] font-semibold'><Link to="/signup" style={{textDecoration: 'underline'}}>Register Now</Link></span>  
        </div>
 

   
    

      
      

    </form>
        
      </div>
      <div className='hidden md:flex md:justify-center items-center md:w-[25%]'>
        <h1 className='font-[1000] text-[40px] text-[#F4F4F4] p-[20px] '><span className='text-[#0602B2]'>LOGIN</span> TO GET THE FULL <span className='text-[#0602B2]'>EXPERIENCE</span></h1>

       </div>
      </div>
      
            </div> 
  </>

  )
}
