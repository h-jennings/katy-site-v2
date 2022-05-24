import { theme } from '@/styles/stitches.config';

type FontSizeKeys = keyof typeof theme.fontSizes;

export const FONT_SIZE_VARIANTS = Object.entries(theme.fontSizes).reduce(
  (acc, [key]) => {
    // @ts-expect-error TS is really annoying with reduce derived from objects
    acc[key] = {
      fontSize: `$${key}`,
    };

    return acc;
  },
  {} as Record<FontSizeKeys, Record<'fontSize', `$${string}`>>,
);
