import React from 'react'
import './AlertBox.css'
import IconSelector from './IconSelector'
import IconButton from './IconButton'

function AlertBox(){
    return(
        <div className="alert-box alert-information-box">
            <div className="icon-and-text">
                <IconSelector
                    color="var(--ciam-dark)"
                    name="infoIcon"
                    size="display"
                />
                <div className="alert-text">
                    <h6>Alert</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus.</p>
                </div>
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
