// import React from 'react'
import Header from '../Components/Header/Header'
import Categories from '../Components/Categories/categories'
import Footer from '../Components/Footer/Footer'
import Featured from '../Components/Featured-section/featured-products/featured-products'
import OurStory from '../Components/ourStory'
import SubCategories from '../Components/SubCategories/SubCategories'

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <SubCategories />
      <Featured />
      <OurStory />
      <Footer />
    </>
  )
}

export default Home