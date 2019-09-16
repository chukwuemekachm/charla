import * as React from 'react';

export const AuthenticationContext = React.createContext({
  user: {},
  isAuthenticated: false,
});

const { useState } = React;

export function AuthenticationProvider({ children }) {
  const [user, setAuth] = useState({});
  const [isAuthenticated, setAuthStatus] = useState(false);

  function setUser(data) {
    setAuthStatus(true);
    setAuth(data);
  }

  function createContext() {
    return {
      user,
      setUser,
      isAuthenticated,
    };
  }

  return (
    <AuthenticationContext.Provider value={createContext()}>
      {children}
    </AuthenticationContext.Provider>
  );
}
