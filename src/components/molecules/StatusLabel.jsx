import React from 'react';
import PropTypes from 'prop-types';
import IconSelector from '../atoms/IconSelector';
import colors from '../../tokens/colors';
import borders from '../../tokens/border-radius';
import './StatusLabel.css';

const variantConfig = {
  default: {
    iconName: 'statusIcon',
    iconSize: 'medium',
    borderColor: colors.grayDarkActive,
    iconColor: colors.grayDarkActive,
    textColor: colors.grayDarkActive,
    defaultText: 'Status default',
    iconPosition: 'leading',
  },
  active: {
    iconName: 'statusIcon',
    iconSize: 'medium',
    borderColor: colors.successNormal,
    iconColor: colors.successNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Status active',
    iconPosition: 'leading',
  },
  activeInfo: {
    iconName: 'statusIcon',
    iconSize: 'medium',
    borderColor: colors.ciamNormal,
    iconColor: colors.ciamNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Status active',
    iconPosition: 'leading',
  },
  warning: {
    iconName: 'statusIcon',
    iconSize: 'medium',
    borderColor: colors.yellowNormal,
    iconColor: colors.yellowNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Warning',
    iconPosition: 'leading',
  },
  errorLabel: {
    iconName: 'statusIcon',
    iconSize: 'medium',
    borderColor: colors.errorNormal,
    iconColor: colors.errorNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Error',
    iconPosition: 'leading',
  },
  activeIcon: {
    iconName: 'checkedIcon',
    iconSize: 'medium',
    borderColor: colors.successNormal,
    iconColor: colors.successNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Status active',
    iconPosition: 'trailing',
  },
  defaultIcon: {
    iconName: 'plusIcon',
    iconSize: 'medium',
    borderColor: colors.grayDarkActive,
    iconColor: colors.grayDarkActive,
    textColor: colors.grayDarkActive,
    defaultText: 'Status default',
    iconPosition: 'trailing',
  },
  activeInfoIcon: {
    iconName: 'infoIcon',
    iconSize: 'medium',
    borderColor: colors.ciamNormal,
    iconColor: colors.ciamNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Status active',
    iconPosition: 'trailing',
  },
  warningIcon: {
    iconName: 'warningIcon',
    iconSize: 'medium',
    borderColor: colors.yellowNormal,
    iconColor: colors.yellowNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Warning',
    iconPosition: 'trailing',
  },
  errorLabelIcon: {
    iconName: 'closeIcon',
    iconSize: 'medium',
    borderColor: colors.errorNormal,
    iconColor: colors.errorNormal,
    textColor: colors.grayDarkActive,
    defaultText: 'Error',
    iconPosition: 'trailing',
  },
};

const StatusLabel = ({ variant = 'default', text, ...props }) => {
  const current = variantConfig[variant] || variantConfig['default'];

  return (
    <div
      className="status-label"
      style={{
        border: `1px solid ${current.borderColor}`,
        borderRadius: borders.radiusFull,
        flexDirection: current.iconPosition === 'trailing' ? 'row-reverse' : 'row',
      }}
      {...props}
    >
      <IconSelector
        name={current.iconName}
        color={current.iconColor}
        size={current.iconSize}
      />
      <span
        className="status-label-text"
        style={{
          color: current.textColor,
        }}
        aria-label={text || current.defaultText}
        role="status"
      >
        {text || current.defaultText}
      </span>
    </div>
  );
};

StatusLabel.propTypes = {
  /**
   * Variante del StatusLabel que determina el color, icono y posición
   */
  variant: PropTypes.oneOf([
    'default',
    'active',
    'activeInfo',
    'warning',
    'errorLabel',
    'activeIcon',
    'defaultIcon',
    'activeInfoIcon',
    'warningIcon',
    'errorLabelIcon',
  ]),
  /**
   * Texto personalizado a mostrar. Si no se proporciona, se usa el texto por defecto de la variante
   */
  text: PropTypes.string,
};

StatusLabel.defaultProps = {
  variant: 'default',
  text: undefined,
};

export default StatusLabel;