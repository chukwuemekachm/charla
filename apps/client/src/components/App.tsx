import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authentication from './Pages/Authentication';

import GlobalCSS from 'styles/_global.css';
import { Provider } from 'providers';


export default function App() {
  return (
    <React.Fragment>
      <GlobalCSS />
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Authentication} exact />
            <Route path="/google-callback" component={Authentication} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}
