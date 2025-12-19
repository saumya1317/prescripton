import React from 'react'
import Header from '../components/Header' // <--- 1. Import it
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctor from '../components/Topdoctor'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Topdoctor/>
      <Banner/>
    </div>
  )
}

export default Home