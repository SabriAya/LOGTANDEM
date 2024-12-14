import React from 'react'
import allTransport from '../assets/allTransport.png'

function Head() {
  return (
    <div className="grid grid-cols-2 ">
          <div className='ml-10 mt-50'>
            <p className='font-serif text-3xl pt-20 ml-4'>Bienvenue chez Logtandem.</p> 
            <p className='font-serif text-3xl pt-10 ml-4'>Plus de 25 ans d'expertise douanière à votre service.</p>
          </div>
          <div className='mx-10'>
          <img src={allTransport} alt="les modes de transport" />
          </div>
    </div>

  )
}

export default Head
