import React from 'react';
import HeaderProduct from '../../Components/HeaderProduct/HeaderProduct'
import FetchedProducts from '../../Components/FetchedProducts/FetchedProducts';
import Footer from '../../Components/Footer/Footer'

function Product() {
  return (
    <>
      <HeaderProduct />
      <FetchedProducts />
      <Footer />
    </>
  )
}

export default Product