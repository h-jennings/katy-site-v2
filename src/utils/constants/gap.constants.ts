import { theme } from '@/styles/stitches.config';
import { reduce as reduceObject } from 'just-reduce-object';

type SpaceKeys = keyof typeof theme.space;

const createSpaceVariant = <T extends string>(property: T) =>
  reduceObject(
    theme.space,
    (acc, key) => {
      //@ts-expect-error TS is being a little pedantic here.
      acc[key] = {
        [property]: `$${key}`,
      };

      return acc;
    },
    {} as Record<SpaceKeys, Record<T, `$${string}`>>,
  );

export const GAP = createSpaceVariant('gap');
export const COLUMN_GAP = createSpaceVariant('column-gap');
export const ROW_GAP = createSpaceVariant('row-gap');
