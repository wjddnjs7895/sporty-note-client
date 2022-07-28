import { ReactNode } from 'react';
import { PaletteKeyTypes } from './palette';

export interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  fontColor?: PaletteKeyTypes;
  fontSize?: string;
}

export interface ButtonProps extends ButtonStyle {
  children: ReactNode;
  className?: string;
}
