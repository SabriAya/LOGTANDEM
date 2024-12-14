import React from 'react'
import Navbar from '../layout/Navbar'
import Head from '../components/Head'
import Annimation from '../components/Annimation/Annimation'
import AboutUs from '../components/AboutUs'
import Footer from '../layout/Footer/Footer'


function Accueil() {
  return (
    <div>
        <Navbar />
        <Head />
        <Annimation/>
        <AboutUs/>
        <Footer />
    </div>
  )
}

export default Accueil;
