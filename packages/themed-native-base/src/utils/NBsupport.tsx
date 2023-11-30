export const colorScheme = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'lightBlue',
  'darkBlue',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'warmGray',
  'trueGray',
  'gray',
  'coolGray',
  'blueGray',
  'dark',
  'danger',
  'error',
  'success',
  'warning',
  'muted',
  'primary',
  'info',
  'secondary',
  'light',
  'tertiary',
];

function hexToRgba(hex: any, alpha: any) {
  let r = '',
    g = '',
    b = '';
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }
  return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + alpha.toString() + ')';
}

export function resolveAlphaColors(rawValue: any, resolver: any) {
  if (typeof rawValue === 'string' && rawValue.includes(':alpha.')) {
    const opacity = resolver(rawValue.split(':alpha.')[1], 'opacity');
    const value = rawValue.split(':alpha-')[0];
    return hexToRgba(resolver(value), opacity);
  } else {
    return resolver(rawValue);
  }
}
