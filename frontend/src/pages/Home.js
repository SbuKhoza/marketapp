import React from 'react'
import ProductsComp from '../components/ProductsComp'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Banner/>
        <ProductsComp/>
        <Footer/>
    </div>
  )
}

export default Home