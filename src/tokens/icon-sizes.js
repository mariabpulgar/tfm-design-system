/**
 * Escala de tamaños de íconos del DS.
 * - Usa claves tokenizadas (xxs…xxl).
 * - Acepta alias (small/medium/large).
 * - Permite números directos (px) como escape hatch.
 */

const iconSizes = {
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 48,
};

const iconSizeAliases = {
  small: 's',
  medium: 'm',
  large: 'l',
};

/**
 * Normaliza el tamaño recibido a un número en px.
 * @param {number|string} size - px, token ('m', 'xl') o alias ('small', 'large')
 * @returns {number} px
 */
export function resolveIconSize(size) {
  if (typeof size === 'number') return size;
  if (typeof size === 'string') {
    const key = iconSizeAliases[size] || size;
    if (iconSizes[key] != null) return iconSizes[key];
  }
  return iconSizes.m; // default
}

export default iconSizes;
