import React from 'react';

interface PropsData {
  tool: string;
}

const Tool = ({ tool }: PropsData) => {
  return <div>{tool}</div>;
};

export default Tool;
