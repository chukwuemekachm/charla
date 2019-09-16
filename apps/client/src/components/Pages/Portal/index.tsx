import * as React from 'react';

import Layout from 'components/Layout';
import Authentication from '../Authentication';
import { withContext } from 'providers';

function Portal(props) {
  const { context: { auth: { isAuthenticated } } } = props;

  return isAuthenticated
  ? <Layout />
  : <Authentication {...props} />
}

export default withContext(Portal);
