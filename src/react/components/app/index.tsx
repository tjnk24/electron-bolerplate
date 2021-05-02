import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from '@assets/logo.png';

import style from './style.scss';

const Hello = () => (
  <div>
    <div className={style.app}>
      <img src={logo} alt="logo" />
      Hello boilerplate!
      <div>Nested div</div>
    </div>
  </div>
);

const App: FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={Hello} />
    </Switch>
  </Router>
);

export default App;
