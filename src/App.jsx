import React from 'react';
import './App.css';
import GridGallery from './components/GridGallery';


function App() {


  return (
    <div>
      <GridGallery
        boundaryCount={1}
        images={[
          {
            alt: 'Perrito feliz',
            id: 1,
            src: '/src/assets/perrito.jpg'
          },
          {
            alt: 'Elipse decorativa',
            id: 2,
            src: '/src/assets/elipse.png'
          },
          {
            alt: 'Logo FACP a color',
            id: 3,
            src: '/src/assets/Logo_FACP_Color.svg'
          },
          {
            alt: 'Foto Line3',
            id: 4,
            src: '/src/assets/Line3.jpg'
          },
          {
            alt: 'Rectángulo 979',
            id: 5,
            src: '/src/assets/Rectangle979.svg'
          },
          {
            alt: 'Rectángulo 982',
            id: 6,
            src: '/src/assets/Rectangle982.svg'
          },
          {
            alt: 'Perrito 2',
            id: 7,
            src: '/src/assets/perrito.jpg'
          },
          {
            alt: 'Elipse 2',
            id: 8,
            src: '/src/assets/elipse.png'
          },
          {
            alt: 'Logo 2',
            id: 9,
            src: '/src/assets/Logo_FACP_Color.svg'
          },
          {
            alt: 'Line3 2',
            id: 10,
            src: '/src/assets/Line3.jpg'
          },
          {
            alt: 'Rectángulo 979 (2)',
            id: 11,
            src: '/src/assets/Rectangle979.svg'
          },
          {
            alt: 'Rectángulo 982 (2)',
            id: 12,
            src: '/src/assets/Rectangle982.svg'
          }
        ]}
        pageSize={6}
        showPrevNext
        showTitle
        siblingCount={1}
        title="Galería FACP"
      />
    </div>    
  );
};

export default App
 
