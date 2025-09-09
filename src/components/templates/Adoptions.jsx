// src/components/templates/Adoptions.jsx
import React, { useState } from 'react';

import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import Filtres from '../organisms/Filtres';
import CardList from '../organisms/CardList';
import Pagination from '../molecules/Pagination';
import Footer from '../organisms/Footer.jsx';

import { animalesAdoptables } from '../../data/animales-adoptables.js';

// Assets (IMPORTS reales, evita "/src/..." en runtime)
import heroAdopciones from '../../assets/hero-adopciones.jpg';
import rect982 from '../../assets/Rectangle982.svg';
import logoBlanco from '../../assets/Logo_FACP_Blanco_v2.svg';

import './Adoptions.css';

function Adoptions() {
  // Filtros seleccionados
  const [selectedFilters, setSelectedFilters] = useState({});

  // Datos base y filtrados
  const [allAnimals] = useState(animalesAdoptables);
  const [filteredAnimals, setFilteredAnimals] = useState(allAnimals);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const animalsPerPage = 9;

  // Cambios de filtro
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
    filterAnimals(filters);
  };

  // Lógica de filtrado
  const filterAnimals = (filters) => {
    let filtered = allAnimals;

    if (filters.animal?.length) {
      filtered = filtered.filter((a) => filters.animal.includes(a.animal));
    }
    if (filters.size?.length) {
      filtered = filtered.filter((a) => filters.size.includes(a.size));
    }
    if (filters.gender?.length) {
      filtered = filtered.filter((a) => filters.gender.includes(a.gender));
    }
    if (filters.age?.length) {
      filtered = filtered.filter((a) => filters.age.includes(a.age));
    }
    if (filters.health?.length) {
      filtered = filtered.filter((a) =>
        filters.health.some((h) => a.health.includes(h))
      );
    }

    setFilteredAnimals(filtered);
  };

  // Adaptar items para CardList
  const formatAnimalsForCardList = (animals) =>
    animals.map((a) => ({
      title: a.title,
      description: a.description,
      imageSrc: a.imageSrc,
      imageAlt: a.imageAlt,
    }));

  // Agrupar en filas de 3
  const chunkAnimals = (animals, chunkSize = 3) => {
    const chunks = [];
    for (let i = 0; i < animals.length; i += chunkSize) {
      chunks.push(animals.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Paginación
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);
  const startIndex = (currentPage - 1) * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);
  const animalChunks = chunkAnimals(currentAnimals, 3);

  // Secciones de filtros
  const filterSections = [
    {
      items: [
        { id: 'dog', label: 'Perro' },
        { id: 'cat', label: 'Gato' },
        { id: 'bird', label: 'Ave' },
        { id: 'rabbit', label: 'Conejo' },
        { id: 'other', label: 'Otro' },
      ],
      key: 'animal',
      title: 'Especie',
    },
    {
      items: [
        { id: 's', label: 'Pequeño' },
        { id: 'm', label: 'Mediano' },
        { id: 'l', label: 'Grande' },
      ],
      key: 'size',
      title: 'Tamaño',
    },
    {
      items: [
        { id: 'vaccinated', label: 'Vacunado' },
        { id: 'spayed', label: 'Esterilizado' },
        { id: 'special', label: 'Necesidades especiales' },
        { id: 'healthy', label: 'Saludable' },
      ],
      key: 'health',
      title: 'Estado de salud',
    },
    {
      items: [
        { id: 'male', label: 'Macho' },
        { id: 'female', label: 'Hembra' },
      ],
      key: 'gender',
      title: 'Género',
    },
    {
      items: [
        { id: 'puppy', label: 'Cachorro' },
        { id: 'young', label: 'Joven' },
        { id: 'adult', label: 'Adulto' },
        { id: 'senior', label: 'Mayor' },
      ],
      key: 'age',
      title: 'Edad',
    },
  ];

  return (
    <div className="adopciones-container">
      <NavBar
        imageSrc={rect982}
        vectorSrc="data:image/svg+xml,%3csvg%20width='2'%20height='38'%20viewBox='0%200%202%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%200V38'%20stroke='%23C2E1F0'/%3e%3c/svg%3e"
      />

      <Hero
        smallTitle="Dale un hogar y una nueva oportunidad a los animales rescatados de nuestra fundación."
        mainTitle="Adopta y cambia una vida"
        buttonText="Button"
        showButton={false}
        titleOrder="reversed"
        imageSrc={heroAdopciones}
      />

      <div className="adoption-section">
        <div className="filters-container">
          <Filtres onChange={handleFilterChange} sections={filterSections} />
        </div>

        <div className="animales-adoptables-container">
          {animalChunks.length > 0 ? (
            <>
              {animalChunks.map((chunk, index) => (
                <CardList
                  key={`animal-group-${index}`}
                  cardType="button"                // Usa la variante con botón
                  orientation="vertical"
                  buttonText="Conocer más"
                  items={formatAnimalsForCardList(chunk)}
                  // Prop drilling: controla el botón interno (ButtonCard -> Button)
                  buttonProps={{
                    showLeftIcon: false,
                    showRightIcon: false,
                  }}
                />
              ))}

              {totalPages > 1 && (
                <div className="pagination-container">
                  <Pagination
                    arrowVariant="pagination"
                    boundaryCount={1}
                    onChange={setCurrentPage}
                    page={currentPage}
                    showPrevNext
                    siblingCount={1}
                    size="medium"
                    totalPages={totalPages}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <p>No se encontraron animales que coincidan con los filtros seleccionados.</p>
              <p>Intenta ajustar los criterios de búsqueda.</p>
            </div>
          )}
        </div>
      </div>

      <Footer
        backToTop={{ href: '#top', icon: 'topIcon', label: 'Volver arriba' }}
        logo={{ alt: 'Logo', src: logoBlanco }}
        navLinks={[
          { href: '#', label: 'Quienes somos' },
          { href: '#', label: 'Adopciones' },
          { href: '#', label: 'Donaciones' },
        ]}
        socials={[
          { href: '#', label: 'Instagram', name: 'instagramAIcon' },
          { href: '#', label: 'WhatsApp', name: 'whatsappAIcon' },
          { href: '#', label: 'Facebook', name: 'facebookAIcon' },
          { href: '#', label: 'TikTok', name: 'tiktokAIcon' },
        ]}
        title="Tittle page"
        utilityLinks={[
          { href: '#', label: 'Contáctanos' },
          { href: '#', label: 'Sugerencias' },
        ]}
        year={2025}
      />
    </div>
  );
}

export default Adoptions;
