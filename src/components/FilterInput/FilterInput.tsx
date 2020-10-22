import React from 'react';
import './FilterInput.scss';

const FilterInput = () => (
  <div className="search">
    <label htmlFor="search">Filter Jobs</label>
    <input id="search" type="text" multiple />
  </div>
);

export default FilterInput;
