import React from 'react';
import './Home.css';
import NavBar from '../NavBar';
import Hero from '../Hero';
import Image from '../Image';
import CarruselTestimonial from '../CarruselTestimonial';
import Testimonial from '../Testimonial'; // 
import ButtonCardList from '../ButtonCardList';
import perrito from '../../assets/perrito2.jpg';
import Rectangle982 from '../../assets/Rectangle982.svg'; 
import Dato01 from '../../assets/DATO01.svg';
import Dato02 from '../../assets/DATO02.svg';
import Dato03 from '../../assets/DATO03.svg';
import testimonio1 from '../../assets/testimonio-1.jpg';
import testimonio2 from '../../assets/testimonio-2.jpg';
import testimonio3 from '../../assets/testimonio-3.jpg';
import adoptar from '../../assets/adoptar1.jpg'
import donar from '../../assets/donar1.jpg'
import voluntario from '../../assets/voluntario.jpg'

function Home() {
  return (
    <div className="home-container">
      <div className="home-container-1">
        <NavBar
          imageSrc={Rectangle982} // 👈 usa el import
          vectorSrc="data:image/svg+xml,%3csvg%20width='2'%20height='38'%20viewBox='0%200%202%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%200V38'%20stroke='%23C2E1F0'/%3e%3c/svg%3e"
        />
        <Hero
          smallTitle="Fundación dedicada al bienestar"
          mainTitle="Rescate y adopción de animales en Turbaco"
          buttonText="Quiero adoptar"
          imageSrc={perrito}
          onButtonClick={() => console.log('Hero button click')}
        />
        <div className="home-container-text">
          <h2>Lo que hemos logrado juntos</h2>
          <h5>“Cada día nos esforzamos por mejorar la vida de los animales y quienes los adoptan.”</h5>
        </div>

        <div className="home-container-cards">
          <div className="home-container-cards-child">
            <Image alt="card-1-rescates" src={Dato01} variant="img-simpleCard-horizontal" />
            <p><strong>+100</strong> animales rescatados</p>
          </div>
          <div className="home-container-cards-child">
            <Image alt="card-2-rescates" src={Dato02} variant="img-simpleCard-horizontal" />
            <p><strong>50</strong> adopciones responsables</p>
          </div>
          <div className="home-container-cards-child">
            <Image alt="card-3-rescates" src={Dato03} variant="img-simpleCard-horizontal" />
            <p><strong>20</strong> voluntarios activos</p>
          </div>
        </div>
      </div>

      <div className="home-container-2">
        <h2>Nuestros ángeles adoptados</h2>
        <div>
          <CarruselTestimonial>
            <Testimonial
              altText="Foto del usuario"
              imageSrc={testimonio1}
              text="“Adoptar a Luna fue la mejor decisión que tomamos. Pasó de estar sola en la calle a ser parte de nuestra familia y llenarnos de alegría todos los días.”"
              userName="María, adoptante"
            />
            <Testimonial
              altText="Foto del usuario"
              imageSrc={testimonio2}
              text="“Gracias a la fundación aprendimos lo que significa la adopción responsable. Max llegó a casa sano, vacunado y con un seguimiento que nos dio mucha confianza.”"
              userName="Andrés, adoptante"
            />
            <Testimonial
              altText="Foto del usuario"
              imageSrc={testimonio3}
              text="“Ser voluntario aquí me enseñó el valor de cada pequeño gesto. Ver cómo los animales recuperan la confianza en las personas es realmente inspirador.”"
              userName="Julián, voluntario"
            />
          </CarruselTestimonial>
        </div>
      </div>

      <div className="home-container-3">
        <div className="home-container-3-text">
            <h2>Tu apoyo transforma vidas</h2>
            <h5>Tienes muchas formas de apoyar nuestra labor: adopta, dona o sé voluntario.
    Cada gesto suma para darles a los animales la vida que merecen.</h5>
        </div>
        <div className="home-container-3-button-cards">

  <ButtonCardList
    className=""
    emptyMessage="No hay elementos para mostrar."
    items={[
      {
        buttonSize: 'large',
        buttonText: 'Más información',
        buttonType: 'button',
        buttonVariant: 'btn-primary',
        description: 'Dale un hogar seguro y amoroso a un animal que lo espera. La adopción es el primer paso hacia una nueva vida.',
        imageAlt: 'Adopciones',
        imageSrc: adoptar,
        title: 'Adopciones'
      },
      {
        buttonSize: 'large',
        buttonText: 'Más información',
        buttonType: 'button',
        buttonVariant: 'btn-primary',
        description: 'Con tu aporte económico o en especie (alimento, medicinas, insumos) garantizamos el cuidado y bienestar de los rescatados.',
        imageAlt: 'Donaciones',
        imageSrc: donar,
        title: 'Donaciones'
      },
      {
        buttonSize: 'large',
        buttonText: 'Más información',
        buttonType: 'button',
        buttonVariant: 'btn-primary',
        description: 'Únete a nuestro equipo y ayuda en jornadas de rescate, cuidado y adopción. Tu tiempo también salva vidas.',
        imageAlt: 'Voluntariado',
        imageSrc: voluntario,
        title: 'Voluntariado'
      }
    ]}
    orientation="horizontal"
  />

        </div>

      </div>


      
    </div>
  );`   `
}

export default Home;
