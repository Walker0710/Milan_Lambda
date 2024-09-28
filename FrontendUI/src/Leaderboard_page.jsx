import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Leaderboard from './components/Leaderboard'
const Leaderboard_page = () => {
  return (
    <>
     <Navbar />
      <div class="flex flex-col h-screen">
        <div class="flex-1">
            <Leaderboard />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Leaderboard_page