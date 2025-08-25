import React from 'react';
import Image from './Image';
import './GridGallery.css'
// Importa imágenes desde assets
import perrito from '../assets/perrito.jpg';
import elipse from '../assets/elipse.png';
import logo from '../assets/Logo_FACP_Color.svg';
import line from '../assets/Line3.jpg';

function GridGallery() {
  return (
    <div className="grid-gallery-container">
      <div className="grid-first-row">
        <Image
          alt="Foto de un perrito feliz"
          src={perrito}
          variant="img-grid-gallery-large"
        />
        <div className="small-images">
            <Image
            alt="Gráfico de elipse decorativa"
            src={elipse}
            variant="img-grid-gallery-small"
            />
            <Image
            alt="Logo de la Fundación Ángeles con Patas"
            src={logo}
            variant="img-grid-gallery-small"
            />  
        </div>
             
      </div>

      <div className="grid-second-row">
        <div className="small-images">
            <Image
            alt="Fotografía decorativa Line3"
            src={line}
            variant="img-grid-gallery-small"
            />
            <Image
            alt="Otra imagen del perrito"
            src={perrito}
            variant="img-grid-gallery-small"
            /> 
        </div>

        <Image
          alt="Otra elipse decorativa"
          src={elipse}
          variant="img-grid-gallery-large"
        />
      </div>
    </div>
  );
}

export default GridGallery;
