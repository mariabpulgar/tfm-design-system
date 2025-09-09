import React from 'react';
import Filtres from '../components/organisms/Filtres';

export default {
  title: 'Organisms/Filtres',
  component: Filtres,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'filtros cambiados' },
  },
};

const SECTIONS = [
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

export const Default = {
  args: {
    sections: SECTIONS,
    onChange: (filters) => console.log('filtros aplicados:', filters),
  },
};

export const SinSecciones = {
  args: {
    sections: [],
    onChange: (filters) => console.log('filtros aplicados:', filters),
  },
};

export const PocasSecciones = {
  args: {
    sections: SECTIONS.slice(0, 2),
    onChange: (filters) => console.log('filtros aplicados:', filters),
  },
};