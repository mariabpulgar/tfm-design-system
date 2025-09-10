// src/components/templates/Adoptions.jsx
import React, { useState, useEffect } from 'react';

import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import Filtres from '../organisms/Filtres';
import CardList from '../organisms/CardList';
import Pagination from '../molecules/Pagination';
import Footer from '../organisms/Footer.jsx';
import ModalControlado from '../organisms/ModalControlado.jsx';
import Gallery from '../organisms/Gallery';
import { animalesAdoptables } from '../../data/animalesAdoptables.js';
import heroAdopciones from '../../assets/hero-adopciones.jpg';
import rect982 from '../../assets/Rectangle982.svg';
import logoBlanco from '../../assets/Logo_FACP_Blanco_v2.svg';
import elipse from '../../assets/elipse.png';
import logoColor from '../../assets/Logo_FACP_Color.svg';
import './Adoptions.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Adoptions() {
  // Filtros seleccionados
  const [selectedFilters, setSelectedFilters] = useState({});

  // Datos base y filtrados
  const [allAnimals] = useState(animalesAdoptables);
  const [filteredAnimals, setFilteredAnimals] = useState(allAnimals);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const animalsPerPage = 9;

  // Resolver rutas relativas del dataset
  const resolveImage = (path) => {
    if (!path) return undefined;
    if (path.startsWith('http') || path.startsWith('/')) return path;
    const normalized = path.replace(/^\.\.\//, '../../');
    try {
      return new URL(normalized, import.meta.url).href;
    } catch {
      return path;
    }
  };

  // Filtrado
  const filterAnimals = (filters) => {
    let filtered = allAnimals;
    if (filters.animal?.length) filtered = filtered.filter((a) => filters.animal.includes(a.animal));
    if (filters.size?.length) filtered = filtered.filter((a) => filters.size.includes(a.size));
    if (filters.gender?.length) filtered = filtered.filter((a) => filters.gender.includes(a.gender));
    if (filters.age?.length) filtered = filtered.filter((a) => filters.age.includes(a.age));
    if (filters.health?.length) {
      filtered = filtered.filter((a) => filters.health.some((h) => a.health.includes(h)));
    }
    setFilteredAnimals(filtered);
  };

  useEffect(() => {
    filterAnimals(selectedFilters);
  }, [selectedFilters, allAnimals]);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    setCurrentPage(1);
  };

  // Adaptar items para CardList
  const formatAnimalsForCardList = (animals) =>
    animals.map((a) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      imageSrc: resolveImage(a.imageSrc),
      imageAlt: a.imageAlt || a.title,
    }));

  // Agrupar en filas de 3
  const chunkAnimals = (animals, chunkSize = 3) => {
    const chunks = [];
    for (let i = 0; i < animals.length; i += chunkSize) {
      chunks.push(animals.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // ======= Modal + animal seleccionado =======
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Imágenes para Gallery (placeholder hasta tener fotos reales)
  const buildGalleryImages = (item) => {
    const main = { alt: item.imageAlt || item.title, src: item.imageSrc };
    return [
      main,
      { alt: 'Gráfico de elipse decorativa', src: elipse },
      { alt: 'Logo de la Fundación Ángeles con Patas', src: logoColor },
      main,
    ];
  };

  const handleCardButtonClick = (item) => {
    setSelectedAnimal({ ...item, galleryImages: buildGalleryImages(item) });
    setModalOpen(true);
  };
  const navigate = useNavigate();

  // Paginación
  const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);
  const startIndex = (currentPage - 1) * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const currentAnimals = filteredAnimals.slice(startIndex, endIndex);
  const animalChunks = chunkAnimals(currentAnimals, 3);

  // Secciones de filtros
  const filterSections = [
    {
      key: 'animal',
      title: 'Especie',
      items: [
        { id: 'dog', label: 'Perro' },
        { id: 'cat', label: 'Gato' },
        { id: 'bird', label: 'Ave' },
        { id: 'rabbit', label: 'Conejo' },
        { id: 'other', label: 'Otro' },
      ],
    },
    {
      key: 'size',
      title: 'Tamaño',
      items: [
        { id: 's', label: 'Pequeño' },
        { id: 'm', label: 'Mediano' },
        { id: 'l', label: 'Grande' },
      ],
    },
    {
      key: 'health',
      title: 'Estado de salud',
      items: [
        { id: 'vaccinated', label: 'Vacunado' },
        { id: 'spayed', label: 'Esterilizado' },
        { id: 'special', label: 'Necesidades especiales' },
        { id: 'healthy', label: 'Saludable' },
      ],
    },
    {
      key: 'gender',
      title: 'Género',
      items: [
        { id: 'male', label: 'Macho' },
        { id: 'female', label: 'Hembra' },
      ],
    },
    {
      key: 'age',
      title: 'Edad',
      items: [
        { id: 'puppy', label: 'Cachorro' },
        { id: 'young', label: 'Joven' },
        { id: 'adult', label: 'Adulto' },
        { id: 'senior', label: 'Mayor' },
      ],
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
                  cardType="button"
                  orientation="vertical"
                  buttonText="Adóptame"
                  items={formatAnimalsForCardList(chunk)}
                  onClickItemButton={handleCardButtonClick}
                  buttonProps={{ showLeftIcon: false, showRightIcon: false }}
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

      {/* ===== Modal que muestra SOLO la Gallery (la X vive en Gallery) ===== */}
      <ModalControlado
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedAnimal(null);
        }}
        closeOnEsc
        closeOnBackdrop
      >
        {selectedAnimal && (
          <Gallery
            images={selectedAnimal.galleryImages}
            /* Título: SOLO el nombre (ej. "Luna") */
            title={selectedAnimal.title}
            /* Párrafo: descripción desde animalesAdoptables */
            description={selectedAnimal.description}
            /* Botón configurable: aquí abrimos flujo de adopción */
            buttonText="Quiero adoptarlo"
            onClose={() => {
              setModalOpen(false);
              setSelectedAnimal(null);
            }}
            onAction={() => {
              // Cerrar modal y redirigir con React Router
              setModalOpen(false);
              setSelectedAnimal(null);
              navigate('/adoptionForm');
              // si quieres algo más específico:
              // navigate(`/adopciones/${selectedAnimal.id}`);
            }}
          />
        )}
      </ModalControlado>


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
