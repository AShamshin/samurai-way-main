import React from 'react';
import { StoreType } from './redux/store';
import StoreContext from './StoreContext';

// interface IContextProps {
//   state: RootStateType;
//   dispatch: ({ type }: { type: string }) => void;
//   getState: () => RootStateType;
// }

const StoreContest = React.createContext({} as StoreType);

export type ProviderType = {
  store: StoreType;
  children: React.ReactNode;
};

export const Provider = (props: ProviderType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContest;
