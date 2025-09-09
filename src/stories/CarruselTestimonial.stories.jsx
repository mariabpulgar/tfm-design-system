// CarruselTestimonial.stories.jsx
import React from 'react';
import CarruselTestimonial from '../components/organisms/CarruselTestimonial';
import Testimonial from '../components/molecules/Testimonial';
import Rectangle979 from '../assets/Rectangle979.svg';
import '../components/organisms/CarruselTestimonial.css';

export default {
  title: 'Organisms/CarruselTestimonial',
  component: CarruselTestimonial,
  subcomponents: { Testimonial },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Carrusel de testimonios con funcionalidad de navegación por flechas y swipe en móvil. Responsive: muestra 3 items en desktop, 2 en tablet y 1 en móvil.',
      },
    },
    controls: { expanded: true },
    layout: 'centered',
  },
  argTypes: {
    autoSlide: {
      description: 'Habilita el deslizamiento automático',
      control: 'boolean',
    },
    autoSlideInterval: {
      description: 'Intervalo del deslizamiento automático (ms)',
      control: { type: 'number', min: 1000, max: 10000, step: 1000 },
    },
  },
};

// Mock data para los testimonios
const mockTestimonials = [
  {
    imageSrc: Rectangle979,
    altText: 'Foto de María García',
    text: '"Excelente servicio, superó todas mis expectativas. Lo recomiendo totalmente."',
    userName: 'María García'
  },
  {
    imageSrc: Rectangle979,
    altText: 'Foto de Carlos López',
    text: '"Una experiencia increíble, el equipo es muy profesional y atento a los detalles."',
    userName: 'Carlos López'
  },
  {
    imageSrc: Rectangle979,
    altText: 'Foto de Ana Martínez',
    text: '"Definitivamente la mejor decisión que he tomado. Resultados excepcionales."',
    userName: 'Ana Martínez'
  },
  {
    imageSrc: Rectangle979,
    altText: 'Foto de Luis Rodríguez',
    text: '"Atención al cliente de primera, muy satisfecho con el trabajo realizado."',
    userName: 'Luis Rodríguez'
  },
  {
    imageSrc: Rectangle979,
    altText: 'Foto de Elena Morales',
    text: '"Profesionales, puntuales y con resultados que hablan por sí solos."',
    userName: 'Elena Morales'
  }
];

export const WithChildren = {
  name: 'Con Children (Recomendado)',
  args: {
    autoSlide: false,
    autoSlideInterval: 5000,
  },
  render: (args) => (
    <div style={{ maxWidth: 1200, padding: '20px' }}>
      <CarruselTestimonial {...args}>
        {mockTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            text={testimonial.text}
            userName={testimonial.userName}
          />
        ))}
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo principal usando children. Navega con las flechas o desliza en móvil. Responsive: 3 items en desktop, 2 en tablet, 1 en móvil.',
      },
    },
  },
};

export const WithItems = {
  name: 'Con Items Prop',
  args: {
    autoSlide: false,
    autoSlideInterval: 3000,
    items: mockTestimonials,
  },
  render: (args) => (
    <div style={{ maxWidth: 1200, padding: '20px' }}>
      <CarruselTestimonial {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo usando la prop items en lugar de children.',
      },
    },
  },
};

export const AutoSlide = {
  name: 'Deslizamiento Automático',
  args: {
    autoSlide: true,
    autoSlideInterval: 3000,
  },
  render: (args) => (
    <div style={{ maxWidth: 1200, padding: '20px' }}>
      <CarruselTestimonial {...args}>
        {mockTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            text={testimonial.text}
            userName={testimonial.userName}
          />
        ))}
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Carrusel con deslizamiento automático cada 3 segundos. Los usuarios pueden seguir usando las flechas manualmente.',
      },
    },
  },
};

export const FewItems = {
  name: 'Pocos Items (Sin Flechas)',
  render: () => (
    <div style={{ maxWidth: 1200, padding: '20px' }}>
      <CarruselTestimonial>
        <Testimonial
          imageSrc={Rectangle979}
          altText="Foto del usuario"
          text='"Solo hay dos testimonios, por lo que no se muestran las flechas de navegación."'
          userName="Usuario único"
        />
        <Testimonial
          imageSrc={Rectangle979}
          altText="Foto del usuario"
          text='"Segundo testimonio para demostrar el comportamiento."'
          userName="Segundo usuario"
        />
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Cuando hay pocos items (igual o menor al número visible), las flechas se ocultan automáticamente.',
      },
    },
  },
};

// Historia para probar responsividad
export const ResponsiveTest = {
  name: 'Prueba Responsive',
  render: () => (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Comportamiento responsive:</strong></p>
        <p>• Desktop (≥1024px): 3 testimonios visibles</p>
        <p>• Tablet (768px-1023px): 2 testimonios visibles</p>
        <p>• Mobile (&lt;768px): 1 testimonio visible + swipe habilitado</p>
      </div>
      
      <CarruselTestimonial>
        {mockTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            text={testimonial.text}
            userName={testimonial.userName}
          />
        ))}
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Redimensiona la ventana o usa las herramientas de responsive del navegador para probar el comportamiento en diferentes tamaños de pantalla.',
      },
    },
  },
};