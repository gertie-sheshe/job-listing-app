import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../images/bg-header-desktop.svg';
import JobComponent from '../Job/Job';
import { data } from '../../data';

import './App.scss';

function App() {
  return (
    <Fragment>
      <header>
        <Logo />
      </header>
      <main>
        <div className="content">
          {data.map((job, index) => {
            return <JobComponent key={index} data={job} />;
          })}
        </div>
      </main>
    </Fragment>
  );
}

export default App;
