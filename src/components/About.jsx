import React from 'react';


const About = () => {
  return (
    <section 
      id="apropos" 
      className="relative bg-primary py-16 px-6 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(/bg.png)`, // Use your custom background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: '#432279'
      }}
    >
      {/* Purple Overlay - Adjust opacity here (opacity-70, opacity-80, opacity-90) */}
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Mobile App Images (Desktop) */}
          <div className="hidden lg:flex justify-center items-start pt-12">
            <img 
              src="/Frame66.png"
              alt="Kaf8 App Interface" 
              className="w-80 xl:w-96 h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              À propos
            </h2>
            
            <div className="space-y-6 text-base lg:text-lg leading-relaxed">
              <p>
                Tout à commencé lorsque <span className="font-semibold">Marc GONCALVES CEO de Kaf8</span> a voulu organiser son déménagement. Très vite, il se rendit compte de la difficulté d'avoir un prestataire (particulier ou professionnel) de services sérieux et dont les tarifs n'étaient pas à la tête du client + Malgré l'existence de services de transports de qualité, ceux-ci ne sont pas ou peu visibles et accessibles pour le client lambda à tout moment.
              </p>
              
              <p>
                C'est ainsi qu'est partie l'idée de rassembler des prestataires professionnels désireux de gagner en visibilité web et prestataires particuliers réguliers ou occasionnels sur la même plate-forme et au service du client. Aujourd'hui, des <span className="text-cyan-300">conducteurs de vélo, scooter, véhicule, camionnette, dépanneuse, ou semi-remorque</span> nous ont fait confiance et ont le contrôle. Le développement des échanges nationaux et internationaux inédit l'accroissement du filet et par voie de conséquences nous invite à adopter une nouvelle attitude, un autre regard sur notre mode de vie, notre organisation ; celle de servir notre prochain. Ainsi, nous avons développé un réseau 1ère de fourmis avec toute une organisation, une discipline qui nous fait avancer dans la bonne direction.
              </p>
              
              <p>
                La solution fonctionne car elle offre à chaque prestataire quel qu'il soit la possibilité de pratiquer instantanément le tarif qui correspond le mieux à divers paramètres tels que sa position, le type de moyen de transport utilisé, la météo, les conditions de circulation... et ceci dans le respect de la clientèle.
              </p>
              
              <p>
                Kaf8 est une communauté qui grandit et se développe grâce à vous.
              </p>
              
              <p className="font-semibold">
                Kaf8, c'est la force d'un réseau.
              </p>
              
              <p className="font-semibold">
                Kaf8 vous invite à prendre le train en marche, celui de l'excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile App Image - Mobile Only (Bottom) */}
        <div className="lg:hidden flex justify-center mt-12">
          <img 
            src="/Frame66.png"
            alt="Kaf8 App Interface" 
            className="w-64 sm:w-80 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;