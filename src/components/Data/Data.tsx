import React, { Fragment } from 'react';

interface PropsData {
  role: string;
  level: string;
  languages: string[];
}

const Data = ({ role, level, languages }: PropsData) => {
  return (
    <Fragment>
      <p>{role}</p>
      <p>{level}</p>
      {languages.map((language, index) => (
        <p key={index}>{language}</p>
      ))}
    </Fragment>
  );
};

export default Data;
