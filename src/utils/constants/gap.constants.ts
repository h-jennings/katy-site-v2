import { theme } from '@/styles/stitches.config';
import entries from 'just-entries';

type SpaceKeys = keyof typeof theme.space;
type SpaceVariantObject<T extends string> = Record<
  SpaceKeys,
  Record<T, `$${SpaceKeys[number]}`>
>;

const createGapVariant = <T extends string>(property: T) =>
  entries(theme.space)
    .map((s) => s[0])
    .reduce((acc, key) => {
      //@ts-expect-error typings get a little redundant here
      acc[key] = {
        [property]: `$${key}`,
      };

      return acc;
    }, {} as SpaceVariantObject<T>);

export const GAP = createGapVariant('gap');
export const COLUMN_GAP = createGapVariant('column-gap');
export const ROW_GAP = createGapVariant('row-gap');
