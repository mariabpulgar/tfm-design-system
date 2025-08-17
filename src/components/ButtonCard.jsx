import React from 'react'
import SimpleCard from './SimpleCard'
import Button from './Button'

function ButtonCard(){
    return(
        <div className="button-card">
            <SimpleCard
            description="Lorem ipsum dolor sit amet."
            title="Card"
            variant="horizontal"
            />
             <Button
            onClick={() => {}}
            size="medium"
            text="Button"
            type="button"
            variant="btn-primary"
            />
        </div>
    );
}

export default ButtonCard;