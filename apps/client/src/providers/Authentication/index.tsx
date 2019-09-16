import * as React from 'react';

export const AuthenticationContext = React.createContext({
  user: {},
});

const { useState } = React;

export function AuthenticationProvider({ children }) {
  const [user, setUser] = useState({});

  function createContext() {
    return {
      user,
      setUser,
    };
  }

  return (
    <AuthenticationContext.Provider value={createContext()}>
      {children}
    </AuthenticationContext.Provider>
  );
}
