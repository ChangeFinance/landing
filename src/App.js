// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { Landing } from './landing';
import { ThemeProvider } from 'styled-components';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';
import './initialize';

const DefaultTheme = {
  background: '#e5f9f3',
  altBackground: '#c6f3ff',
  main: '#02bda5',
  alt: '#083b70',
  text: '#0c0c0c',
  altText: '#2a2a2a',
  breakpoints: {
    mobile: 0,
    landscape: 500,
    tablet: 1000,
    desktop: 1200,
  },
};

export const App = () => (
  <div>
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={Landing} />
          <Route path="/careers" component={Landing} />
          <Route path="/legal" component={Landing} />
          <Route path="/notify-me-success" component={Landing} />
          <Route path="/security-token-offering" component={Landing} />
          <Route path="/app" component={Landing} />
          <Route path="/office-rent" component={Landing} />
          <Route path='/moontec' component={() => window.location = 'https://getchange.typeform.com/to/cFeqSl'} />
          <Route path='/bitcoinprice' component={() => window.location = 'https://getchange.typeform.com/to/cFeqSl'} />

        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

export default App;
