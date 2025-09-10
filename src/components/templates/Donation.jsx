import React from 'react';
import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import perritoLindo from '../../assets/1250373142.jpg';
import gaticoLindo from '../../assets/gato1.jpg'
import Footer from '../organisms/Footer';
import Forms from "../organisms/Forms";
import SimpleCard from '../molecules/SimpleCard'
import './AdoptionForm.css';
import './Donation.css'


function Donation() {
  return (
    <div className="main-container">
      <NavBar />
      
      <Hero
        smallTitle="Juntos salvamos huellas"
        mainTitle="Cada aporte es una nueva oportunidad para ellos."
        buttonText="Enviar solicitud"
        showButton={true}
        titleOrder="normal"
        imageSrc={perritoLindo}
        onButtonClick={() => console.log('Enviar formulario')}
      />

      <div className="donacion-y-proposito">
        <SimpleCard
          description={
            <>
              Durante años hemos trabajado incansablemente para poner fin al abandono y al maltrato animal. 
              Somos un referente en rescate, protección y adopción, y tu aporte nos ayuda a salvar vidas, combatir la crueldad y darles una segunda oportunidad a cientos de animales.
              <br /><br />
              Gracias por hacer parte de este cambio y por darle esperanza a quienes más lo necesitan.
            </>
          }
          imgAlt="gatico"
          imgSrc={gaticoLindo}
          title="Nuestro propósito"
        />


        <Forms
        type="donation"
        schema={undefined}
        title="Donación"
        subtitle="Tu apoyo nos ayuda a rescatar y cuidar animales en necesidad."
        submitText="Donar"
        onSubmit={(v) => console.log("Donation:", v)}
        initialValues={{
            fullName: "Carlos Rodríguez",
            age: "30",
            email: "carlos@example.com",
            phone: "",
            amount: "50.000",
            payment: "paypal",
            message: "Por favor usen esta donación para cuidados médicos de los animales.",
        }}
        />   

      </div>
 
      <Footer
        backToTop={{
          href: '#top',
          icon: 'topIcon',
          label: 'Volver arriba',
        }}
        logo={{
          alt: 'Logo',
          src: '/src/assets/Logo_FACP_Blanco_v2.svg',
        }}
        navLinks={[
          { href: '#', label: 'Quiénes somos' },
          { href: '#', label: 'Adopciones' },
          { href: '#', label: 'Donaciones' },
        ]}
        socials={[
          { href: '#', label: 'Instagram', name: 'instagramAIcon' },
          { href: '#', label: 'WhatsApp', name: 'whatsappAIcon' },
          { href: '#', label: 'Facebook', name: 'facebookAIcon' },
          { href: '#', label: 'TikTok', name: 'tiktokAIcon' },
        ]}
        title="Ángeles con Patas"
        utilityLinks={[
          { href: '#', label: '📞 +57 305 657 3826' },
          { href: '#', label: '✉️  funangeles@hotmail.com' },
        ]}
        year={2025}
      />
    </div>
  );
}

export default Donation;
