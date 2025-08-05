//Se crea el componente IconSelector con el fin de seleccionar dinamicamente los iconos. Al importar los iconos al final se debe escribir ?react para que los iconos puedan ser renderizados. Luego de importar el icono se anade en la const icons para que pueda ser reutilizado posteriormente. 

import React from 'react';
import './IconSelector.css';
import { iconSizeClasses } from '../tokens/icon-sizes';

const iconModules = import.meta.glob('../icons/*.svg', { eager: true, query: '?react' });

const icons = Object.fromEntries(
  Object.entries(iconModules).map(([path, component]) => {
    const iconName = path.match(/([a-zA-Z0-9-]+)\.svg$/)[1];
    
    const formattedName = {
      'Check-1': 'checkedIcon',
      'Settings-1': 'settingsIcon',
      'Home-2': 'home2Icon',
      'Download-1': 'download1Icon',
      'Upload-1': 'upload1Icon',
      'Status': 'statusIcon',
      'Plus': 'plusIcon',
      'Info': 'infoIcon',
      'Warning': 'warningIcon',
      'Close': 'closeIcon',
      'Check': 'checkIcon',
      'ArrowSubDownLeft': 'arrowSubDownLeftIcon',
      'ArrowSubDownRight': 'arrowSubDownRightIcon',
      'ArrowSubUpLeft': 'arrowSubUpLeftIcon',
      'ArrowSubUpRight': 'arrowSubUpRightIcon',
      'Attachment': 'attachmentIcon',
      'Billing': 'billingIcon',
      'Box': 'boxIcon',
      'Burger': 'burgerIcon',
      'Cart': 'cartIcon',
      'Cash': 'cashIcon',
      'Chat': 'chatIcon',
      'Checkbox-blank': 'checkboxBlankIcon',
      'Checkbox': 'checkboxIcon',
      'Contact': 'contactIcon',
      'Copy': 'copyIcon',
      'Coupon': 'couponIcon',
      'Credit-card': 'creditCardIcon',
      'Delivery': 'deliveryIcon',
      'Document': 'documentIcon',
      'Down': 'downIcon',
      'Download': 'downloadIcon',
      'Drop-down': 'dropDownIcon',
      'Drop-left': 'dropLeftIcon',
      'Drop-right': 'dropRightIcon',
      'Drop-top': 'dropTopIcon',
      'Edit': 'editIcon',
      'Envelope': 'envelopeIcon',
      'Fast': 'fastIcon',
      'Help': 'helpIcon',
      'History': 'historyIcon',
      'Home': 'homeIcon',
      'Left': 'leftIcon',
      'Location': 'locationIcon',
      'Lock': 'lockIcon',
      'Logout': 'logoutIcon',
      'Message': 'messageIcon',
      'Minus': 'minusIcon',
      'Navigation': 'navigationIcon',
      'Notification': 'notificationIcon',
      'Offer': 'offerIcon',
      'Options': 'optionsIcon',
      'Passenger': 'passengerIcon',
      'Phone': 'phoneIcon',
      'Photo': 'photoIcon',
      'Pin': 'pinIcon',
      'Profile': 'profileIcon',
      'Right': 'rightIcon',
      'Search': 'searchIcon',
      'Send': 'sendIcon',
      'Settings': 'settingsIcon',
      'Shared': 'sharedIcon',
      'Shopping': 'shoppingIcon',
      'Star-solid': 'starSolidIcon',
      'Star': 'starIcon',
      'Time': 'timeIcon',
      'Top': 'topIcon',
      'Transport': 'transportIcon',
      'Trash': 'trashIcon',
      'Upload': 'uploadIcon',
      'Volumen-off': 'volumenOffIcon',
      'Volumen-on': 'volumenOnIcon',
      'Wallet': 'walletIcon',
    }[iconName] || iconName;
    
    return [formattedName, component.default];
  })
);

export default function IconSelector({ name, size, color = 'currentColor', ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  const sizeClassName = iconSizeClasses[size] || iconSizeClasses.medium;
  const combinedClassNames = `icon-selector ${sizeClassName}`;

  return (
    <IconComponent
      className={combinedClassNames} 
      style={{ color }}
      {...props}
    />
  );
}

export const iconNames = Object.keys(icons);