import React from 'react'
import './Home.css'
import NavBar from '../NavBar';
import Hero from '../Hero'
import perrito from '../../assets/perrito2.jpg'
import CardList from '../CardList'
import Dato01 from '../../assets/DATO01.svg'
import Dato02 from '../../assets/DATO02.svg'
import Dato03 from '../../assets/DATO03.svg'
import SimpleCardList from '../SimpleCardList';
import Image from '../Image';


function Home(){
    return(
        <div className="home-container">
            <div className="home-container-1">
                <NavBar
                imageSrc="/src/assets/Rectangle982.svg"
                vectorSrc="data:image/svg+xml,%3csvg%20width='2'%20height='38'%20viewBox='0%200%202%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%200V38'%20stroke='%23C2E1F0'/%3e%3c/svg%3e"
                />
                <Hero
                smallTitle="Fundación dedicada al bienestar"
                mainTitle="Rescate y adopción de animales en Turbaco"
                buttonText="Quiero adoptar"
                imageSrc={perrito}
                onButtonClick={() => console.log('Hero button click')}
                />
            </div>
            <div className="home-container-2">
                <div className="home-container-text">
                    <h2>Lo que hemos logrado juntos</h2>
                    <h5>“Cada día nos esforzamos por mejorar la vida de los animales y quienes los adoptan.”</h5>
                </div>
                <div className="home-container-2-cards">
                    <div className="home-container-2-cards-child">
                        <Image
                            alt="card-1-rescates"
                            src={Dato01}
                            variant="img-simpleCard-horizontal"
                        />
                        <p><strong>+100</strong> animales rescatados</p>
                    </div>
                    <div className="home-container-2-cards-child">
                        <Image
                            alt="card-2-rescates"
                            src={Dato02}
                            variant="img-simpleCard-horizontal"
                        />
                        <p><strong>50</strong> adopciones responsables</p>
                    </div>
                    <div className="home-container-2-cards-child">
                        <Image
                            alt="card-3-rescates"
                            src={Dato03}
                            variant="img-simpleCard-horizontal"
                        />
                        <p><strong>20</strong> voluntarios activos</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;