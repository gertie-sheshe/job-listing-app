import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../images/bg-header-desktop.svg';
import './App.scss';

function App() {
  return (
    <Fragment>
      <header>
        <Logo />
      </header>
      <main>Hello World</main>
    </Fragment>
  );
}

export default App;
