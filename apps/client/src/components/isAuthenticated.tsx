import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthenticationContext } from 'providers/Authentication';

export function isAuthenticated(Component) {
  return (props) => (
    <AuthenticationContext.Consumer>
      {({ isAuthenticated }) => (
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      )}
    </AuthenticationContext.Consumer>
  );
}
