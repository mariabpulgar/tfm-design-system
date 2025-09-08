import React from 'react'
import IconSelector from '../atoms/IconSelector'
import './Chip.css'

function Chip({title = "Removable chip"}){
    return(
        <div className="chip">
            <div className="chip-title">{title}</div>
            <div className="chip-icon">
                <IconSelector
                    color="#545454"
                    name="closeIcon"
                    size="small"
                />
            </div>
        </div>
    );
};

export default Chip;
