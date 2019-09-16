import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Authentication from './Pages/Authentication/index';
import GlobalCSS from 'styles/_global.css';
import { Provider } from 'providers';
import Portal from './Pages/Portal';

export default function App() {
  return (
    <React.Fragment>
      <GlobalCSS />
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Portal} exact />
            <Route path="/google-callback" component={Authentication} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}
