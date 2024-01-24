import React from 'react'
import Header from '../Components/Header/Header'
import Categories from '../Components/Categories/categories'
import Footer from '../Components/Footer/Footer'
import Featured from '../Components/Featured-section/featured-products/featured-products'
import SubCategories from '../Components/SubCategories'

function Home() {
  return (
    <>
        <Header/>
        <Categories/>
        <SubCategories/>
        <Featured/>
        <Footer/>

    </>
  )
}

export default Home