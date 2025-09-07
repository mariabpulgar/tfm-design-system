import React from 'react';
import './Button.css';
import IconSelector from '../atoms/IconSelector';

// Normaliza valores "raros" a booleanos reales
const toBool = (v) => {
  if (v === true || v === false) return v;
  if (v === 'true' || v === 1 || v === '1') return true;
  if (v === 'false' || v === 0 || v === '0' || v == null) return false;
  return !!v;
};

/**
 * Prioridad de control de iconos:
 * 1) isGroup === true  -> oculta ambos iconos
 * 2) iconSide ('both' | 'left' | 'right' | 'none') domina sobre showLeftIcon/showRightIcon
 * 3) Si hay iconName y NO hay iconSide, iconPosition ('left'|'right') decide un único lado
 * 4) Si no hay iconName, usa leftIconName/rightIconName según showLeftIcon/showRightIcon
 */
const Button = ({
  // apariencia
  variant = 'btn-primary',
  size = 'medium',
  className = '',
  
  // contenido
  text,
  
  // comportamiento
  onClick,
  disabled = false,
  type = 'button',
  isGroup = false,
  
  // control fino actual
  showLeftIcon = true,
  showRightIcon = true,
  leftIconName = 'dropLeftIcon',
  rightIconName = 'dropRightIcon',
  iconSize = 'medium',
  iconColor = 'currentColor',
  
  // shorthand opcionales
  iconSide,               // 'both' | 'left' | 'right' | 'none'
  iconName,               // nombre único para ambos lados (si aplica)
  iconPosition = 'left',  // 'left' | 'right' (solo si hay iconName y no hay iconSide)
  
  ...props
}) => {
  const buttonClasses = `btn btn-${size} ${variant} ${isGroup ? 'btn--in-group' : ''} ${className}`.trim();
  
  // 1) En grupo no se rinden iconos
  if (isGroup) {
    return (
      <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled} {...props}>
        {text}
      </button>
    );
  }
  
  // 2) Inicializar variables de control
  let shouldShowLeft = false;
  let shouldShowRight = false;
  let leftNameToUse = leftIconName;
  let rightNameToUse = rightIconName;
  
  // 3) Determinar qué iconos mostrar según la prioridad
  if (iconSide) {
    // iconSide domina sobre todo lo demás
    const side = String(iconSide).toLowerCase();
    shouldShowLeft = side === 'both' || side === 'left';
    shouldShowRight = side === 'both' || side === 'right';
    
    // Si hay iconName, usarlo para ambos lados
    if (iconName) {
      leftNameToUse = iconName;
      rightNameToUse = iconName;
    }
  } else if (iconName) {
    // iconName con iconPosition (sin iconSide)
    const pos = String(iconPosition).toLowerCase();
    shouldShowLeft = pos === 'left';
    shouldShowRight = pos === 'right';
    leftNameToUse = iconName;
    rightNameToUse = iconName;
  } else {
    // Control individual con showLeftIcon/showRightIcon
    shouldShowLeft = toBool(showLeftIcon);
    shouldShowRight = toBool(showRightIcon);
  }
  
  // 4) Verificar que tengamos nombres válidos
  shouldShowLeft = shouldShowLeft && !!leftNameToUse;
  shouldShowRight = shouldShowRight && !!rightNameToUse;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {shouldShowLeft && (
        <IconSelector
          name={leftNameToUse}
          size={iconSize}
          color={iconColor}
          className="btn-icon btn-icon-left"
        />
      )}
      {text}
      {shouldShowRight && (
        <IconSelector
          name={rightNameToUse}
          size={iconSize}
          color={iconColor}
          className="btn-icon btn-icon-right"
        />
      )}
    </button>
  );
};

export default Button;