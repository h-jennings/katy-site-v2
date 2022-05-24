import { theme } from '@/styles/stitches.config';

type SpaceKeys = keyof typeof theme.space;
type SpaceVariantObject<TProp extends string> = Record<
  SpaceKeys,
  Record<TProp, `$${string}`>
>;

const createSpaceVariant = <T extends string>(property: T) =>
  Object.entries(theme.space).reduce((acc, [key]) => {
    // @ts-expect-error TS is really annoying with reduce derived from objects
    acc[key] = {
      [property]: `$${key}`,
    };

    return acc;
  }, {} as SpaceVariantObject<T>);

export const GAP = createSpaceVariant('gap');
export const COLUMN_GAP = createSpaceVariant('column-gap');
export const ROW_GAP = createSpaceVariant('row-gap');
