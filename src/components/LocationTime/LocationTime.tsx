import React from 'react';

interface PropsData {
  postedAt: string;
  contract: string;
  location: string;
}

const LocationTime = ({ postedAt, contract, location }: PropsData) => {
  return (
    <div>
      <span>{postedAt}</span>
      <span>{contract}</span>
      <span>{location}</span>
    </div>
  );
};

export default LocationTime;
