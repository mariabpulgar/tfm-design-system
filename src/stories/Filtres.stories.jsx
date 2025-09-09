import React from 'react';
import Filtres from '../components/organisms/Filtres';

export default {
  title: 'Organisms/Filtres',
  component: Filtres,
  tags: ['autodocs'],
};

const SECTIONS = [
  {
    key: 'animal',
    title: 'Animal type',
    items: [
      { id: 'dog', label: 'Dog' },
      { id: 'cat', label: 'Cat' },
      { id: 'other', label: 'Other' },
    ],
  },
  {
    key: 'size',
    title: 'Size',
    items: [
      { id: 's', label: 'Small' },
      { id: 'm', label: 'Medium' },
      { id: 'l', label: 'Large' },
    ],
  },
  {
    key: 'health',
    title: 'Health status',
    items: [
      { id: 'vaccinated', label: 'Vaccinated' },
      { id: 'spayed', label: 'Spayed/Neutered' },
      { id: 'special', label: 'Special needs' },
    ],
  },
  {
    key: 'gender',
    title: 'Gender',
    items: [
      { id: 'male', label: 'Male' },
      { id: 'female', label: 'Female' },
    ],
  },
];

export const Default = {
  args: {
    sections: SECTIONS,
    onChange: (filters) => console.log('filters', filters),
  },
};