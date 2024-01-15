import { useToken } from './useToken';

export function useContrastText(bg: string) {
  const colorHexCode = useToken('colors', bg);
  return getContrastColor(colorHexCode);
}

function getContrastColor(hexColor: string) {
  // Remove the hash (#) if it exists
  const cleanHexColor = hexColor.replace(/^#/, '');

  // Convert the hex color to RGB
  const r = parseInt(cleanHexColor.substring(0, 2), 16);
  const g = parseInt(cleanHexColor.substring(2, 4), 16);
  const b = parseInt(cleanHexColor.substring(4, 6), 16);

  // Calculate the luminance using the relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine the contrast color based on luminance
  return luminance > 0.5 ? 'black' : 'white';
}
