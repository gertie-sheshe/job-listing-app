import React, { useContext } from 'react';
import './FilterInput.scss';

import { JobsContext } from '../../context/jobs-context';

const FilterInput = () => {
  const { dispatch } = useContext(JobsContext);

  const handleChange = (e: any) => {
    dispatch({
      type: 'FILTER_DATA',
      payload: e.target.value,
    });
  };

  return (
    <div className="search">
      <label htmlFor="search">Filter Jobs:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default FilterInput;
