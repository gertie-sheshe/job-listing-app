import React from 'react';

interface PropsData {
  svgSrc: typeof import('*.svg');
}

const CompanyImage = ({ svgSrc }: PropsData) => {
  return (
    <div>
      Image
      <img alt="company logo" src={`${svgSrc}`} />
    </div>
  );
};

export default CompanyImage;
