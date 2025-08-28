import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Ellipse5 from './assets/Ellipse5.svg'
import NavBar from './components/NavBar';




function App() {


  return (
    <div>
      <NavBar
        imageSrc="/src/assets/Rectangle982.svg"
        vectorSrc="data:image/svg+xml,%3csvg%20width='2'%20height='38'%20viewBox='0%200%202%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%200V38'%20stroke='%23C2E1F0'/%3e%3c/svg%3e"
      />
      {/* <Hero 
        imageSrc={Ellipse5}
        smallTitle="Lorem ipsum"
        mainTitle="dolor sit amet, consectetur
adipiscing elit "
        buttonText="Button"
        onButtonClick={() => console.log('Usuario interesado!')}
      /> */}
      <div className="hero">
          <Hero
            smallTitle="Lorem ipsum"
            mainTitle="dolor sit amet, consectetur adipiscing elit"
            buttonText="Button"
            imageSrc={Ellipse5}
            onButtonClick={() => console.log('Hero button click')}
          />

      </div>

    </div>    
  );
};

export default App
 
