import React from 'react';
import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import perritoLindo from '../../assets/1250373142.jpg';
import Footer from '../organisms/Footer';
import Forms from "../organisms/Forms";
import './AdoptionForm.css';


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
