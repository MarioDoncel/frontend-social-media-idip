import React, { createContext, useMemo, useState } from 'react';

interface IExampleContext {
  example: string;
}

type PropsUserContext = {
  user: IExampleContext;
  setUser: React.Dispatch<React.SetStateAction<IExampleContext>>;
};
const DEFAULT_VALUE = {
  user: {
    example: '',
  },
  setUser: () => {},
};

const NewContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const NewContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);
  const userContext = useMemo(() => ({ user, setUser }), [user]);

  return (
    <NewContext.Provider value={userContext}>{children}</NewContext.Provider>
  );
};

export default NewContext;

export { NewContextProvider };
