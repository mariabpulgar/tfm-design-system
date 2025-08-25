import React, { useState } from 'react';
import Image from './Image';
import Pagination from './Pagination';
import './GridGallery.css';

// Importa todas tus imágenes
import perrito from '../assets/perrito.jpg';
import elipse from '../assets/elipse.png';
import logo from '../assets/Logo_FACP_Color.svg';
import line from '../assets/Line3.jpg';

function GridGallery() {
  // Array con todas las imágenes que quieres mostrar
  const allImages = [
    { src: perrito, alt: "Foto de un perrito feliz", id: 1 },
    { src: elipse, alt: "Gráfico de elipse decorativa", id: 2 },
    { src: logo, alt: "Logo de la Fundación Ángeles con Patas", id: 3 },
    { src: line, alt: "Fotografía decorativa Line3", id: 4 },
    { src: perrito, alt: "Otra imagen del perrito", id: 5 },
    { src: elipse, alt: "Otra elipse decorativa", id: 6 },
    // Agrega más imágenes aquí para probar la paginación
    { src: perrito, alt: "Perrito página 2 - imagen 1", id: 7 },
    { src: elipse, alt: "Elipse página 2 - imagen 2", id: 8 },
    { src: logo, alt: "Logo página 2 - imagen 3", id: 9 },
    { src: line, alt: "Line página 2 - imagen 4", id: 10 },
    { src: perrito, alt: "Perrito página 2 - imagen 5", id: 11 },
    { src: elipse, alt: "Elipse página 2 - imagen 6", id: 12 },
    { src: perrito, alt: "Perrito página 3 - imagen 1", id: 13 },
    { src: elipse, alt: "Elipse página 3 - imagen 2", id: 14 },
    { src: logo, alt: "Logo página 3 - imagen 3", id: 15 },
  ];

  // Configuración de paginación
  const IMAGES_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular total de páginas
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);

  // Calcular qué imágenes mostrar en la página actual
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = allImages.slice(startIndex, endIndex);

  // Función para manejar cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    console.log('Nueva página:', newPage);
  };

  // Función para renderizar las imágenes en el grid 2x3
  const renderImages = () => {
    // Asegurar que siempre tengamos 6 slots (algunos pueden estar vacíos)
    const imagesToRender = [...currentImages];
    while (imagesToRender.length < 6) {
      imagesToRender.push(null); // Rellenar slots vacíos
    }

    return (
      <div className="grid-gallery-grid">
        <div className="grid-first-row">
          {/* Primera imagen grande */}
          {imagesToRender[0] && (
            <Image
              alt={imagesToRender[0].alt}
              src={imagesToRender[0].src}
              variant="img-grid-gallery-large"
            />
          )}
          
          <div className="small-images">
            {/* Segunda y tercera imagen pequeñas */}
            {imagesToRender[1] && (
              <Image
                alt={imagesToRender[1].alt}
                src={imagesToRender[1].src}
                variant="img-grid-gallery-small"
              />
            )}
            {imagesToRender[2] && (
              <Image
                alt={imagesToRender[2].alt}
                src={imagesToRender[2].src}
                variant="img-grid-gallery-small"
              />
            )}
          </div>
        </div>

        <div className="grid-second-row">
          <div className="small-images">
            {/* Cuarta y quinta imagen pequeñas */}
            {imagesToRender[3] && (
              <Image
                alt={imagesToRender[3].alt}
                src={imagesToRender[3].src}
                variant="img-grid-gallery-small"
              />
            )}
            {imagesToRender[4] && (
              <Image
                alt={imagesToRender[4].alt}
                src={imagesToRender[4].src}
                variant="img-grid-gallery-small"
              />
            )}
          </div>
          
          {/* Sexta imagen grande */}
          {imagesToRender[5] && (
            <Image
              alt={imagesToRender[5].alt}
              src={imagesToRender[5].src}
              variant="img-grid-gallery-large"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="grid-gallery-container">
      <div className="grid-gallery-title">
        <h2>Grid gallery - Página {currentPage} de {totalPages}</h2>
      </div>

      {renderImages()}

      <div className="grid-gallery-pagination">
        <Pagination
          totalPages={totalPages}
          page={currentPage}
          size="medium"
          onChange={handlePageChange}
          showPrevNext={true}
          siblingCount={1}
          boundaryCount={1}
        />
      </div>
    </div>
  );
}

export default GridGallery;