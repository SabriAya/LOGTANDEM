import React from 'react';
import about from '../assets/about.png';
const AboutUs = () => {
  return (
    <div className="bg-[#b83d32] my-10 mx-10 rounded-xl text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:flex-row lg:items-start lg:space-x-8">
        <div className="mt-8 lg:mt-0 lg:w-1/3">
        <img 
            src={about} 
            alt="About Us Image" 
            className="w-full h-full rounded-lg"
          /> 
        </div>
        <div className="lg:w-2/3 lg:mt-0 mt-8">
          <div className="items-center text-center lg:text-left">
          <h2 className="mt-2 max-w-2xl text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            A propos de nous
          </h2>
          <p className="mt-4 max-w-2xl text-xl lg:mx-0">
              <span className="font-bold">Avec plus de 25 ans d'expertise douanière, Logtandem Internationale vous accompagne avec des solutions numériques avancées pour simplifier la gestion de vos dossiers et transactions financières. <br/>
                Grâce à notre partenariat avec V Transit, vous bénéficiez d'une plateforme intuitive qui vous permet de suivre vos dossiers de l'ouverture à la déclaration, en restant informé à chaque étape. <br/>
                Suivez facilement l'état de vos factures, gérez vos paiements, consultez vos devis et contrôlez vos avoirs en temps réel.<br/>
                 Nous vous offrons une solution complète pour garder le contrôle total de vos transactions financières.</span>
          </p>

          </div>
          <div className="mt-10 text-center lg:text-left">
            <a
              href="/presentation"
              className="inline-flex items-center px-6 py-3 border radius-3xl border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;