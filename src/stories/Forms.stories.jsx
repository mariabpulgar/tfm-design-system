import React from 'react';
import Forms from '../components/Forms';

export default {
  title: 'Components/Forms',
  component: Forms,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Contact = {
  args: {
    type: 'contact',
    onSubmit: (values) => console.log('Contact:', values),
  },
};

export const Adoption = {
  args: {
    type: 'adoption',
    onSubmit: (v) => console.log('Adoption:', v),
  },
};

export const Volunteer = {
  args: {
    type: 'volunteer',
    onSubmit: (v) => console.log('Volunteer:', v),
  },
};

export const Donation = {
  args: {
    type: 'donation',
    onSubmit: (v) => console.log('Donation:', v),
  },
};