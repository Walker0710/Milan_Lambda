import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
const Profilepage = () => {
  return (
    <>
     <Navbar />
      <div class="flex flex-col h-screen">
        <div class="flex-1">
            <Profile /> 
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Profilepage