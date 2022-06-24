import { Links } from '@/utils/types/cms-data';
import { State, StoreApi } from 'zustand';
import createContext from 'zustand/context';

interface LayoutDataStore extends State {
  links: Links;
}

export const { Provider: LayoutDataProvider, useStore: useLayoutDataStore } =
  createContext<StoreApi<LayoutDataStore>>();
