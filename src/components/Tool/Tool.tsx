import React from 'react';

interface PropsData {
  tool: string;
}

const Tool = ({ tool }: PropsData) => {
  return (
    <div>
      <p>{tool}</p>
    </div>
  );
};

export default Tool;
