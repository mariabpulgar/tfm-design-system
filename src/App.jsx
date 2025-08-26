import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import CarruselTestimonial from './components/CarruselTestimonial';
import Partners from './components/Partners';



function App() {


  return (
    <div>
        <Partners
        partners={[
          {
            alt: 'Partner A',
            src: '/src/assets/Rectangle979.svg'
          },
          {
            alt: 'Partner B',
            src: '/src/assets/Rectangle979.svg'
          },
          {
            alt: 'Partner C',
            src: '/src/assets/Rectangle979.svg'
          }
        ]}
        />
    </div>    
  );
};

export default App
 
