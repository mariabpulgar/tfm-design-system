import React from 'react';
import IconSelector from './IconSelector';
import colors from '../tokens/colors';
import './StatusLabel.css';


const variantConfig = {
    default: {
        iconName: 'statusIcon',
        borderColor: colors.grayDarkActive,
        iconColor: colors.grayDarkActive,
        textColor: colors.grayDarkActive,
        defaultText: 'Status default',
        iconPosition: 'leading',

    },
    active: {
        iconName: 'statusIcon',
        borderColor: colors.successNormal,
        iconColor: colors.successNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Status active',
        iconPosition: 'leading',
    },

    activeInfo: {
        iconName: 'statusIcon',
        borderColor: colors.ciamNormal,
        iconColor: colors.ciamNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Status active',
        iconPosition: 'leading',
    },

    warning: {
        iconName: 'statusIcon',
        borderColor: colors.yellowNormal,
        iconColor: colors.yellowNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Warning',
        iconPosition: 'leading',
    },
    errorLabel: {
        iconName: 'statusIcon',
        borderColor: colors.errorNormal,
        iconColor: colors.errorNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Error',
        iconPosition: 'leading',
    },

    activeIcon: {
        iconName: 'checkedIcon',
        borderColor: colors.successNormal,
        iconColor: colors.successNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Status active',
        iconPosition: 'trailing',
    },

    defaultIcon: {
        iconName: 'plusIcon',
        borderColor: colors.grayDarkActive,
        iconColor: colors.grayDarkActive,
        textColor: colors.grayDarkActive,
        defaultText: 'Status default',
        iconPosition: 'trailing',
    },

    activeInfoIcon: {
        iconName: 'infoIcon',
        borderColor: colors.ciamNormal,
        iconColor: colors.ciamNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Status active',
        iconPosition: 'trailing',
    },
    warningIcon: {
        iconName: 'warningIcon',
        borderColor: colors.yellowNormal,
        iconColor: colors.yellowNormal,
        textColor: colors.grayDarkActive,
        defaultText: 'Warning',
        iconPosition: 'trailing',
    },
    errorLabelIcon: {
        iconName: 'closeIcon',
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
        flexDirection: current.iconPosition === 'trailing' ? 'row-reverse' : 'row',
      }}
      {...props}
    >
      <IconSelector
        name={current.iconName}
        color={current.iconColor}
      />
      <span
        className="status-label-text"
        style={{
          color: current.textColor,
        }}
      >
        {text || current.defaultText}
      </span>
    </div>
  );
};

export default StatusLabel;

