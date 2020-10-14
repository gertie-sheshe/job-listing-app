import React, { Fragment } from 'react';

interface PropsData {
  postedAt: string;
  contract: string;
  location: string;
}

const LocationTime = ({ postedAt, contract, location }: PropsData) => {
  return (
    <Fragment>
      <p>{postedAt}</p>
      <p>{contract}</p>
      <p>{location}</p>
    </Fragment>
  );
};

export default LocationTime;
