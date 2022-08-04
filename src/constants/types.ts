import { ReactNode } from 'react';
import { PaletteKeyTypes } from './palette';

export interface TextStyle {
  fontNumber?: number;
  fontColor?: PaletteKeyTypes;
  fontWeight?: string;
}

export interface TextProps extends TextStyle {
  children?: ReactNode;
  className?: string;
}

export interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  isSelected?: boolean;
}

export interface ButtonProps extends ButtonStyle {
  children?: ReactNode;
  className?: string;
}

export interface BlankStyle {
  width?: string;
  height?: string;
}

export interface BlankProps extends BlankStyle {
  className?: string;
}

export interface CardStyle {
  width?: string;
  height?: string;
  backgroundColor?: PaletteKeyTypes;
  selectedColor?: PaletteKeyTypes;
  isSelected?: boolean;
}

export interface CardProps extends CardStyle {
  children?: ReactNode;
  workoutName: string;
  className?: string;
}

export interface ImageStyle {
  width?: string;
  height?: string;
}

export interface DotStyle {
  isSelected: boolean;
}

export interface ContainerStyle {
  width?: string;
  height?: string;
}

export interface ContainerProps extends ContainerStyle {
  className?: string;
}

export interface MemoStyle {
  tagColor?: string;
  memoTitle?: string;
}

export interface MemoProps extends MemoStyle {
  children?: ReactNode;
}
