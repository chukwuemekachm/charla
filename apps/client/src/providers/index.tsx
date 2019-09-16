import * as React from 'react';

import { AuthenticationProvider, AuthenticationContext } from './Authentication';

export function Provider({ children }) {
  return (
    <AuthenticationProvider>
      {children}
    </AuthenticationProvider>
  );
}

export function withContext(Component) {
  return (props) => (
    <AuthenticationContext.Consumer>
      {auth => (
        <Component context={{ auth }} {...props} />
      )}
    </AuthenticationContext.Consumer>
  );
}
