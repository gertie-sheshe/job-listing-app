import React from 'react';
import './LocationTime.scss';

interface PropsData {
  postedAt: string;
  contract: string;
  location: string;
}

const LocationTime = ({ postedAt, contract, location }: PropsData) => {
  return (
    <div className="location-time">
      <span>{postedAt}</span>
      <span>{contract}</span>
      <span>{location}</span>
    </div>
  );
};

export default LocationTime;
