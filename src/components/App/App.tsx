import React, { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../images/bg-header-desktop.svg';
import JobComponent from '../Job/Job';
import FilterInput from '../FilterInput/FilterInput';

import { JobsContext } from '../../context/jobs-context';

import './App.scss';

function App() {
  const { state } = useContext(JobsContext);

  return (
    <Fragment>
      <header>
        <Logo />
      </header>
      <main>
        <FilterInput />
        <div className="content">
          {state.data.map((job, index) => {
            return <JobComponent key={index} data={job} />;
          })}
        </div>
      </main>
    </Fragment>
  );
}

export default App;
