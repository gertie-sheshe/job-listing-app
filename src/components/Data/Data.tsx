import React from 'react';
import Tool from '../Tool/Tool';

interface PropsData {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

const Data = ({ role, level, languages, tools }: PropsData) => {
  return (
    <div>
      Data
      <p>{role}</p>
      <p>{level}</p>
      {languages.map((language, index) => (
        <p key={index}>{language}</p>
      ))}
      {tools.length
        ? tools.map((tool, index) => <Tool key={index} tool={tool} />)
        : null}
    </div>
  );
};

export default Data;
