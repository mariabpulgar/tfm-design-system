import React from 'react'
import Rectangle982 from '../assets/Rectangle982.png'
import Button from './Button';

function NavBar({
    imageSrc = Rectangle982
}){
    return(
        <div className="nav-bar">
            <div className="navbar-img">
                <img src={imageSrc}/>
            </div>
            <div className="navbar-items">
                <a>Quienes somos</a>
                <a>Ubicación</a>
                <Button
                text="Contacto"
                isGroup={false}
                iconSide="left"
                showLeftIcon={true}
                showRightIcon={false}
                leftIconName="download1Icon"
                iconSize="medium"
                iconColor="currentColor"
                type="button"
                variant="btn-primary"
                size="small"
                />
            </div>
        </div>
    );
};

export default NavBar