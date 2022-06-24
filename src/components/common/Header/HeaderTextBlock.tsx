import * as React from 'react';
import ReactDOM from 'react-dom';

type ElemOrNull = HTMLDivElement | null;
type HeaderTextBlockState =
  | [ElemOrNull, React.Dispatch<React.SetStateAction<ElemOrNull>>];

const HeaderTextBlockContext = React.createContext(
  [] as unknown as HeaderTextBlockState,
);

export const HeaderTextBlockProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const headerTextBlockState = React.useState(null as ElemOrNull);

  return (
    <HeaderTextBlockContext.Provider value={headerTextBlockState}>
      {children}
    </HeaderTextBlockContext.Provider>
  );
};

// This is the container (injection point)
export const HeaderTextBlock = () => {
  const [, setHeaderTextBlock] = React.useContext(HeaderTextBlockContext);

  return <div id="header-text-block" ref={setHeaderTextBlock} />;
};

export const HeaderTextBlockPortal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [headerTextBlock] = React.useContext(HeaderTextBlockContext);
  return headerTextBlock
    ? ReactDOM.createPortal(children, headerTextBlock)
    : null;
};
