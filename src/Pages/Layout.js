import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

export default function Layout() {
  return (
    <>
     <Nav/>
        <main>
            <Outlet/>
        </main>
     <Footer/>
    </>
  )
}
