import React, { useState, useEffect } from 'react';
import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import Filtres from '../organisms/Filtres';
import CardList from '../organisms/CardList';
import Footer from '../organisms/Footer.jsx';
import { animalesAdoptables } from '../../data/animales-adoptables.js';
import heroAdopciones from '../../assets/hero-adopciones.jpg';
import './Adoptions.css';

function Adoptions() {
    // Estado para manejar los filtros seleccionados
    const [selectedFilters, setSelectedFilters] = useState({});
    
    // Estado para los animales
    const [allAnimals, setAllAnimals] = useState(animalesAdoptables);
    
    // Estado para los animales filtrados
    const [filteredAnimals, setFilteredAnimals] = useState(allAnimals);

    // Función que se ejecutará cuando cambien los filtros
    const handleFilterChange = (filters) => {
        setSelectedFilters(filters);
        filterAnimals(filters);
    };

    // Función para filtrar los animales según los criterios seleccionados
    const filterAnimals = (filters) => {
        let filtered = allAnimals;

        // Filtrar por especie
        if (filters.animal && filters.animal.length > 0) {
            filtered = filtered.filter(animal => 
                filters.animal.includes(animal.animal)
            );
        }

        // Filtrar por tamaño
        if (filters.size && filters.size.length > 0) {
            filtered = filtered.filter(animal => 
                filters.size.includes(animal.size)
            );
        }

        // Filtrar por género
        if (filters.gender && filters.gender.length > 0) {
            filtered = filtered.filter(animal => 
                filters.gender.includes(animal.gender)
            );
        }

        // Filtrar por edad
        if (filters.age && filters.age.length > 0) {
            filtered = filtered.filter(animal => 
                filters.age.includes(animal.age)
            );
        }

        // Filtrar por estado de salud (puede tener múltiples valores)
        if (filters.health && filters.health.length > 0) {
            filtered = filtered.filter(animal => 
                filters.health.some(healthFilter => 
                    animal.health.includes(healthFilter)
                )
            );
        }

        setFilteredAnimals(filtered);
    };

    // Convertir datos de animales al formato que espera CardList
    const formatAnimalsForCardList = (animals) => {
        return animals.map(animal => ({
            title: animal.title,
            description: animal.description,
            imageSrc: animal.imageSrc,
            imageAlt: animal.imageAlt
        }));
    };

    // Función para dividir los animales en grupos de 3
    const chunkAnimals = (animals, chunkSize = 3) => {
        const chunks = [];
        for (let i = 0; i < animals.length; i += chunkSize) {
            chunks.push(animals.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Configuración de las secciones de filtros
    const filterSections = [
        {
            items: [
                { id: 'dog', label: 'Perro' },
                { id: 'cat', label: 'Gato' },
                { id: 'bird', label: 'Ave' },
                { id: 'rabbit', label: 'Conejo' },
                { id: 'other', label: 'Otro' }
            ],
            key: 'animal',
            title: 'Especie'
        },
        {
            items: [
                { id: 's', label: 'Pequeño' },
                { id: 'm', label: 'Mediano' },
                { id: 'l', label: 'Grande' }
            ],
            key: 'size',
            title: 'Tamaño'
        },
        {
            items: [
                { id: 'vaccinated', label: 'Vacunado' },
                { id: 'spayed', label: 'Esterilizado' },
                { id: 'special', label: 'Necesidades especiales' },
                { id: 'healthy', label: 'Saludable' }
            ],
            key: 'health',
            title: 'Estado de salud'
        },
        {
            items: [
                { id: 'male', label: 'Macho' },
                { id: 'female', label: 'Hembra' }
            ],
            key: 'gender',
            title: 'Género'
        },
        {
            items: [
                { id: 'puppy', label: 'Cachorro' },
                { id: 'young', label: 'Joven' },
                { id: 'adult', label: 'Adulto' },
                { id: 'senior', label: 'Mayor' }
            ],
            key: 'age',
            title: 'Edad'
        }
    ];

    // Dividir los animales filtrados en grupos de 3
    const animalChunks = chunkAnimals(filteredAnimals, 3);

    return (
        <div className="adopciones-container">
            <NavBar
                imageSrc="/src/assets/Rectangle982.svg"
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
                    <Filtres
                        onChange={handleFilterChange}
                        sections={filterSections}
                    />
                </div>
                
                <div className="animales-adoptables-container">
                    {animalChunks.length > 0 ? (
                        animalChunks.map((chunk, index) => (
                            <CardList
                                key={`animal-group-${index}`}
                                cardType="button"
                                orientation="vertical"
                                buttonText="Conocer más"
                                items={formatAnimalsForCardList(chunk)}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No se encontraron animales que coincidan con los filtros seleccionados.</p>
                            <p>Intenta ajustar los criterios de búsqueda.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer
                backToTop={{
                    href: '#top',
                    icon: 'topIcon',
                    label: 'Volver arriba'
                }}
                logo={{
                    alt: 'Logo',
                    src: '/src/assets/Logo_FACP_Blanco_v2.svg'
                }}
                navLinks={[
                    {
                    href: '#',
                    label: 'Quienes somos'
                    },
                    {
                    href: '#',
                    label: 'Adopciones'
                    },
                    {
                    href: '#',
                    label: 'Donaciones'
                    }
                ]}
                socials={[
                    {
                    href: '#',
                    label: 'Instagram',
                    name: 'instagramAIcon'
                    },
                    {
                    href: '#',
                    label: 'WhatsApp',
                    name: 'whatsappAIcon'
                    },
                    {
                    href: '#',
                    label: 'Facebook',
                    name: 'facebookAIcon'
                    },
                    {
                    href: '#',
                    label: 'TikTok',
                    name: 'tiktokAIcon'
                    }
                ]}
                title="Tittle page"
                utilityLinks={[
                    {
                    href: '#',
                    label: 'Contáctanos'
                    },
                    {
                    href: '#',
                    label: 'Sugerencias'
                    }
                ]}
                year={2025}
            />
        </div>
    );
}

export default Adoptions;