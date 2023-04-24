import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='bg-[#111827] h-[100vh]'>
        <Navbar/>
        <Products/>
    </div>
  )
}

export default Home