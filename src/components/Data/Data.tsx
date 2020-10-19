import React, { Fragment } from 'react';

interface PropsData {
  role: string;
  level: string;
  languages: string[];
}

const Data = ({ role, level, languages }: PropsData) => {
  return (
    <Fragment>
      <div>
        <p>{role}</p>
      </div>
      <div>
        <p>{level}</p>
      </div>
      {languages.map((language, index) => (
        <div>
          <p key={index}>{language}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Data;
