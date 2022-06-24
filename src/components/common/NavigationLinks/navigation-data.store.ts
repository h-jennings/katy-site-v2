import { Links } from '@/utils/types/cms-data';
import { State, StoreApi } from 'zustand';
import createContext from 'zustand/context';

interface NavigationDataStore extends State {
  links: Links;
}

export const { Provider, useStore } =
  createContext<StoreApi<NavigationDataStore>>();
