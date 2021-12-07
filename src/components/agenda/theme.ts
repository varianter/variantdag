import { colorPairs } from '@variant/profile/lib/colors';
import { CSSProperties } from 'react';

export type Color = string;

/**
 * Describes how a Row or Feature should look
 */
export interface ThemeType {
  text: Color;
  background: Color;
}

export const Theme = {
  FELLES: {
    text: colorPairs.primary.default.text,
    background: colorPairs.primary.default.bg,
  } as ThemeType,
  LÆRE: {
    text: colorPairs.secondary1.default.text,
    background: colorPairs.secondary1.default.bg,
  } as ThemeType,
  SKUDD: {
    text: colorPairs.secondary2.default.text,
    background: colorPairs.secondary2.default.bg,
  } as ThemeType,
  ANNET: {
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
