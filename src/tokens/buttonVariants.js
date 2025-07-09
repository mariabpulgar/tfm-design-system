import colors from './colors';
import typography from './typography';
import borders from './border-radius';

const buttonSizes = {
  small: {
    padding: '4px',
    fontSize: typography.paragraph.fontSize,
    fontWeight: typography.paragraph.fontWeight.regular,
    height: '26px',
  },
  medium: {
    padding: '8px',
    fontSize: typography.paragraph.fontSize,
    fontWeight: typography.paragraph.fontWeight.regular,
    height: '34px',
  },
  large: {
    padding: '8px 12px',
    fontSize: typography.h6.fontSize,
    fontWeight: typography.h6.fontWeight.regular,
    height: '38px',
  },
};

const buttonVariants = {
    sizes: buttonSizes,

    primary: {
        states:{
            default: {
                background: colors.ciamNormal,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },
            hover: {
                background: colors.ciamNormalHover,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },

            pressed: {
                background: colors.ciamNormalActive,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },

            disabled: {
                background: colors.ciamLightActive,
                color: colors.ciamLightHover,
                border: 'none',
                borderRadius: borders.radius100,
                cursor: 'not-allowed',

            },
        },
    },

    secondary: {
        states:{
            default: {
                background: colors.blueNormal,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },
            hover: {
                background: colors.blueNormalActive,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },

            pressed: {
                background: colors.blueNormalHover,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },

            disabled: {
                background: colors.blueLight,
                color: colors.ciamLightHover,
                border: 'none',
                borderRadius: borders.radius100,
                cursor: 'not-allowed',
            },
        },
},

    tertiary: {
        states:{
            default: {
                background: colors.grayLight,
                color: colors.magentaNormal,
                border: `1px solid ${colors.magentaNormal}`,
                borderRadius: borders.radius100,
            },
            hover: {
                background: colors.magentaLightHover,
                color: colors.magentaNormal,
                border: `1px solid ${colors.magentaNormal}`,
                borderRadius: borders.radius100,
            },

            pressed: {
                background: colors.magentaNormal,
                color: colors.grayLight,
                border: `1px solid ${colors.magentaNormal}`,
                borderRadius: borders.radius100,
            },

            disabled: {
                background: colors.grayLight,
                color: colors.magentaLightHover,
                border: 'none',
                borderRadius: borders.radius100,
                cursor: 'not-allowed',
            },
        },
    },

    error: {
        states:{
            default: {
                background: colors.errorNormal,
                color: colors.grayLight,
                border: `1px solid ${colors.grayLight}`,
                borderRadius: borders.radius100,
            },
            hover: {
                background: colors.errorNormalHover,
                color: colors.grayLight,
                border: `1px solid ${colors.grayLight}`,
                borderRadius: borders.radius100,
            },

            pressed: {
                background: colors.errorNormalActive,
                color: colors.grayLight,
                border: 'none',
                borderRadius: borders.radius100,
            },

            disabled: {
                background: colors.grayLight,
                color: colors.errorLightHover,
                border: `1px solid ${colors.errorLightHover}`,
                borderRadius: borders.radius100,
                cursor: 'not-allowed',
            },
        },
    },

    text: {
        states: {
            default: {
            background: 'transparent',
            color: colors.ciamNormal,
            border: 'none',
            borderRadius: borders.radius100,
            },
            hover: {
            background: 'transparent',
            color: colors.ciamDark,
            border: 'none',
            borderRadius: borders.radius100,
            },
            pressed: {
            background: 'transparent',
            color: colors.ciamDarkActive,
            border: 'none',
            borderRadius: borders.radius100,
            },
            disabled: {
            background: 'transparent',
            color: colors.grayNormalHover,
            border: 'none',
            borderRadius: borders.radius100,
            cursor: 'not-allowed',
            },
    },
},


};

const buttonsConfig = { buttonSizes, buttonVariants };

export default buttonsConfig;