import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import perrito from './assets/perrito.jpg'
import elipse from './assets/elipse.png'
import loguito from './assets/Logo_FACP_Color.svg'


function App() {
  const images = [
    { src: perrito, alt: "Imagen 1" },
    { src: elipse, alt: "Imagen 2" },
    { src: loguito, alt: "Imagen 3" },
    { src: perrito, alt: "Imagen 4" },
  ];
  return (
    <div>
      <Gallery
        images={images}
        title="Collar para gato"
        description="Collar ajustable con campanita. Material antialérgico y disponible en varios colores."
      />
    </div>    
  );
}

export default App
 
