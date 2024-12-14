import React from 'react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import DarkMode from '../helpers/DarkMode/DarkMode'
//import Langue from '../helpers/Langue/Langue'

function Navbar() {
  return (
    <div className=' px-8 flex justify-between items-center'>
        <img src={logo} alt="Left side" className='h-40 w-100' /> 
        <div className='hidden md:flex space-x-8 items-center'>
            <Link to="/" className="text-black font-bold text-lg hover:text-green-700 dark:text-white">Accueil</Link>
            <Link to="/presentation" className="text-black font-bold text-lg hover:text-green-700 dark:text-white">Qui sommes nous?</Link>
            <DarkMode/>
            
        </div>
    </div>
  )
}

export default Navbar
