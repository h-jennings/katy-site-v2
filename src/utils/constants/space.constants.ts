import { theme } from '@/styles/stitches.config';

type SpaceKeys = keyof typeof theme.space;

const createSpaceVariant = (property: string) =>
  Object.entries(theme.space).reduce((acc, [key]) => {
    acc[key as SpaceKeys] = {
      [property]: `$${key}`,
    };

    return acc;
  }, {} as Record<SpaceKeys, Record<string, string>>);

export const GAP = createSpaceVariant('gap');
export const COLUMN_GAP = createSpaceVariant('column-gap');
export const ROW_GAP = createSpaceVariant('row-gap');
