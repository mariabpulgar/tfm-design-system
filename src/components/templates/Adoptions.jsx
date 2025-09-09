import react from 'react';
import NavBar from '../organisms/NavBar';
import Hero from '../organisms/Hero';
import heroAdopciones from '../../assets/hero-adopciones.jpg';
import './Adoptions.css'


function Adoptions(){
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


                </div>
                <div className="animales-adoptables-container">

                </div>
            </div>

        </div>
    );
};

export default Adoptions;