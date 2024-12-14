import React from 'react';
import solutionsNumeriques from '../assets/solutions-numeriques.jpeg';
import suiviDossier from '../assets/IMAGE V TRANSIT SUIVI DOSSIER.png';
import suiviFactures from '../assets/IMAGE V TRANSIT SUIVI FACTURES.png';
import modesTransport from '../assets/mode de transport.jpg'


function Body() {
  return (
    <div>
      <div>
        <p className='ml-4'>Bienvenue chez <b>LOGTANDEM INTERNATIONAL</b>, votre partenaire de confiance dans le domaine du transit, du transport national et international au Maroc. 
		      Nous sommes une entreprise spécialisée dans les solutions logistiques et douanières, offrant des services complets pour répondre aux besoins de nos 
		      clients en matière de gestion de leurs marchandises et de leurs expéditions.</p>
        <p className='ml-4 mt-2'>Notre expertise en matière de transit et de transport international et national est soutenue par une équipe de déclarants en douane hautement 
		      qualifiés, forts d'une expérience cumulée de plus de 25 ans. Cette longue expérience nous permet de naviguer en toute aisance dans les formalités 
		      douanières et de garantir des processus de dédouanement rapides et efficaces pour nos clients.</p>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div className="mx-14" style={{ width: '80%' }}>
          <img src={solutionsNumeriques} alt="solutions numeriques" />
        </div>
        <div className="ml-4 my-24"> {/* Adjust margin classes as needed */}
          <p>
          Une caractéristique unique de <b>LOGTANDEM INTERNATIONAL</b> est notre passage réussi à l'ère du numérique. Conscients de l'importance croissante de la technologie dans le secteur de la logistique, nous avons intégré une solution numérique innovante à nos services pour offrir à nos clients une expérience transparente et personnalisée.</p> 
        </div>
      </div>
      <div className="mt-10 ml-4">
        <p>Avec notre plateforme numérique intuitive, nos clients peuvent désormais suivre l'évolution de leur dossier de transit dès son ouverture jusqu'à la livraison 
		      finale. Chaque étape du processus, de la déclaration des dossiers jusqu'à la réception des marchandises, est clairement accessible depuis leur interface unique. 
		      De plus, nos clients peuvent également consulter leurs factures, devis, avoirs et même effectuer des paiements en ligne, le tout en un seul endroit convivial.</p> 
        <p className='mt-2'>Notre interface numérique est accessible via un moteur de recherche convivial, ce qui signifie que nos clients peuvent accéder à leurs informations depuis 
		      n'importe quel appareil connecté à internet. Cela permet une gestion plus pratique et flexible de leurs expéditions et de leurs documents, réduisant ainsi les 
		      délais et les contraintes administratives.</p>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div className="mx-14" style={{ width: '95%' , height: '100%'}}>
          <img src={suiviDossier} alt="image V transit suivi dossier" />
        </div>
        <div className='ml-10 my-52'>
          <p>Suivez votre dossier de A à Z. De l'ouverture à la déclaration, en passant par le traitement, nous vous tenons informé à chaque étape.</p>
        </div>
      </div> 
      <div className="grid grid-cols-2">
        <div className='mr-10 ml-4 my-52'>
          <p>Contrôlez vos factures en un coup d'œil. Notre solution digitale vous permet de suivre facilement l'état de vos factures et de rester à jour avec vos paiements.</p>
        </div>
        <div className="mr-4" style={{ width: '95%' , height: '100%'}}>
          <img src={suiviFactures} alt="image V transit suivi factures" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="ml-10" style={{ width: '100%' }}>
          <img src={modesTransport} alt="les modes de transport" />
        </div>
        <div className="ml-4 my-24"> {/* Adjust margin classes as needed */}
        <p>Chez <b>LOGTANDEM INTERNATIONAL</b>, notre mission est de fournir des solutions logistiques complètes, flexibles et numériques qui répondent aux besoins 
		      spécifiques de nos clients, tout en veillant à ce que leurs marchandises soient livrées en toute sécurité et à temps. Notre engagement envers l'excellence
		      opérationnelle, l'innovation technologique et le service client de qualité nous distingue dans l'industrie du transit et du transport.</p>
			  <p className='mt-2'>Que vous ayez besoin d'expédier des marchandises à l'échelle nationale ou internationale, vous pouvez compter sur <b>LOGTANDEM INTERNATIONAL</b> pour fournir 
		      des solutions logistiques sur mesure, adaptées à vos besoins spécifiques. Nous nous efforçons continuellement d'améliorer nos services et d'explorer de nouvelles 
		      façons de faciliter les opérations de transit et de transport pour nos clients.</p>
        </div>
      </div>
      <p className='my-10 ml-4'>Rejoignez-nous dès aujourd'hui et découvrez comment notre expertise, notre expérience et notre approche numérique peuvent simplifier et optimiser vos 
			  opérations logistiques et de transport. Chez <b>LOGTANDEM INTERNATIONAL</b>, nous sommes fiers d'être votre partenaire de confiance pour toutes vos 
			  exigences logistiques au Maroc et au-delà.</p>    
    </div>
  );
}

export default Body;
