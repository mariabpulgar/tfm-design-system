import React from 'react'
import './AlertBox.css'
import IconSelector from './IconSelector'
import IconButton from './IconButton'

function AlertBox(){
    return(
        <div className="alert-box">
            <IconSelector
            color="#545454"
            name="infoIcon"
            size="display"
            />
            <div>
                <h6>Error</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus.</p>
            </div>
            <IconButton
            iconName="closeIcon"
            onClick={() => {}}
            size="medium"
            variant="default"
            />
        </div>
    );
};

export default AlertBox;