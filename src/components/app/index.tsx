import React, { FC } from 'react';
import logo from './logo.png';

import style from './style.scss';

const App: FC = () => (
  <div>
    <div className={style.app}>
      <img src={logo} alt="logo" />
      Hello boilerplate!
      <div>Nested div</div>
    </div>
  </div>
);

export default App;
