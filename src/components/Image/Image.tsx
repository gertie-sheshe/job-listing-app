import React from 'react';
import './image.scss';

interface PropsData {
  svgSrc: typeof import('*.svg');
}

const CompanyImage = ({ svgSrc }: PropsData) => {
  return (
    <div className="image-container">
      <img alt="company logo" src={`${svgSrc}`} />
    </div>
  );
};

export default CompanyImage;
