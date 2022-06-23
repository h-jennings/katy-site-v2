import { Links } from '@/utils/types/cms-data';
import isEqual from 'lodash.isequal';
import * as React from 'react';

const NavigationLinksContext = React.createContext([] as Links);

export const NavigationLinksProvider = ({
  linksData,
  children,
}: React.PropsWithChildren<{ linksData: Links }>) => {
  const [prevLinks, setPrevLinks] = React.useState(linksData);

  if (!isEqual(prevLinks, linksData)) {
    setPrevLinks(linksData);
  }

  return (
    <NavigationLinksContext.Provider value={prevLinks}>
      {children}
    </NavigationLinksContext.Provider>
  );
};

export const useNavigationLinks = () => {
  const context = React.useContext(NavigationLinksContext);

  if (context === undefined) {
    throw new Error(
      'useNavigationLinks must be used within a NavigationLinksContext',
    );
  }
  return context;
};
