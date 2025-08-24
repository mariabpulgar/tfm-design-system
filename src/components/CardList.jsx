import React from 'react'
import ButtonCard from '../components/ButtonCard'
import './CardList.css'

function CardList({ buttonText }) {
    const cardsData = [
        {
            title: "Título de la card 1",
            description: "Descripción corta de la card 1.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },
        {
            title: "Título de la card 2",
            description: "Descripción corta de la card 2.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },
        {
            title: "Título de la card 3",
            description: "Descripción corta de la card 3.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },
        {
            title: "Título de la card 4",
            description: "Descripción corta de la card 1.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },
        {
            title: "Título de la card 5",
            description: "Descripción corta de la card 2.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },
        {
            title: "Título de la card 6",
            description: "Descripción corta de la card 3.",
            imageSrc: "/src/assets/Rectangle979.svg?t=1755714061172",
            imageAlt: "placeholder"
        },

            
        // ...más si necesitas
    ]

    return (
        <div className="card-list-container">
            <div className="card-list-grid">
                {cardsData.map((card, index) => (
                    <ButtonCard
                        key={index}
                        buttonSize="medium"
                        buttonText={buttonText}
                        buttonType="button"
                        buttonVariant="btn-primary"
                        description={card.description}
                        imageAlt={card.imageAlt}
                        imageSrc={card.imageSrc}
                        onButtonClick={() => console.log("Testeando componente")} 
                        orientation="vertical"
                        title={card.title}
                    />
                ))}
            </div>
        </div>

    )
}

export default CardList
