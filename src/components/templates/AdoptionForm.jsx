import React from 'react';
import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import perrito from '../../assets/perrito.jpg';
import Footer from '../organisms/Footer';
import Forms from "../organisms/Forms";
import './AdoptionForm.css';


function AdoptionForm() {
  return (
    <div className="main-container">
      <NavBar />
      
      <Hero
        smallTitle="Formulario de adopción"
        mainTitle="Dale una nueva oportunidad a un amigo peludo"
        buttonText="Enviar solicitud"
        showButton={true}
        titleOrder="normal"
        imageSrc={perrito}
        onButtonClick={() => console.log('Enviar formulario')}
      />

        <Forms
        type="adoption"
        className="animal-adoption"
        schema={undefined}
        title="Adopción"
        subtitle="Llena el formulario y conoce a tu nuevo mejor amigo."
        submitText="Enviar"
        onSubmit={(v) => console.log("Adoption:", v)}
        initialValues={{
            fullName: "Juan Pérez",
            age: "29",
            email: "juan@dominio.com",
            phone: "+57 300 000 0000",
            city: "bog",
            living: "apt",
            message: "Vivo en un apartamento, amo a los perros y tengo experiencia cuidándolos.",
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

export default AdoptionForm;
