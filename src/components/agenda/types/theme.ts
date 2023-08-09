import { colorPairs } from '@variant/profile/lib/colors';
import { CSSProperties } from 'react';

export type Color = string;
export interface ThemeType {
  text: Color;
  background: Color;
}

/**
 * Contains color pairs for text and background suitable for agenda events of
 * different types.
 * */
export const Theme = {
  DESIGN: {
    text: colorPairs.primary.default.text,
    background: colorPairs.primary.default.bg,
  } as ThemeType,
  UTVIKLING: {
    text: colorPairs.secondary1.default.text,
    background: colorPairs.secondary1.default.bg,
  } as ThemeType,
  LYNTALE: {
    text: colorPairs.secondary2.default.text,
    background: colorPairs.secondary2.default.bg,
  } as ThemeType,
  FELLES: {
    text: colorPairs.secondary4.default.text,
    background: colorPairs.secondary4.default.bg,
  } as ThemeType,
  PAUSE: {
    text: colorPairs.secondary3.default.text,
    background: colorPairs.secondary3.default.bg,
  } as ThemeType,
};

export type ThemeName = keyof typeof Theme;

export const toStyle = (theme: ThemeType): CSSProperties => ({
  color: theme.text,
  backgroundColor: theme.background,
});
