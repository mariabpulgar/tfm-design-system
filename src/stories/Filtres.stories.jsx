import React from 'react';
import Filtres from '../components/Filtres';

export default {
  title: 'Components/Filtres',
  component: Filtres,
  tags: ['autodocs'],
      parameters: {
    docs: {
      description: {
        component: 'Componente de filtros que agrupa varios menús desplegables (dropdowns) para refinar resultados según distintas categorías. Permite al usuario aplicar, limpiar o combinar criterios de búsqueda de manera sencilla.',
      },
    },
  },
};

const SECTIONS = [
  {
    key: 'animal',
    title: 'Tipo de mascota',
    items: [
      { id: 'dog', label: 'Perro' },
      { id: 'cat', label: 'Gato' },
      { id: 'other', label: 'Otro' },
    ],
  },
  {
    key: 'size',
    title: 'Tamaño',
    items: [
      { id: 's', label: 'Pequeño' },
      { id: 'm', label: 'Medio' },
      { id: 'l', label: 'Grande' },
    ],
  },
  {
    key: 'health',
    title: 'Estado de salud',
    items: [
      { id: 'vaccinated', label: 'Vacunado' },
      { id: 'spayed', label: 'Esterilizado/a' },
      { id: 'special', label: 'Necesidades especiales' },
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
];

export const Default = {
  args: {
    sections: SECTIONS,
    onChange: (filters) => console.log('filters', filters),
  },
};