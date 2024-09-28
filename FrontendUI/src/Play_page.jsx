import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Play from './components/Play'
const Play_page = () => {
  return (
    <>
        <Navbar />
        <div class="flex flex-col h-screen">
            <div class="flex-1">
                <Play /> 
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Play_page