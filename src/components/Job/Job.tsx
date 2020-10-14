import React from 'react';
import Image from '../Image/Image';

interface PropsData {
  data: {
    id: number;
    company: string;
    logo: typeof import('*.svg');
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[] | [];
  };
}

const JobComponent = ({ data }: PropsData) => {
  return (
    <div>
      job component
      <Image svgSrc={data.logo} />
    </div>
  );
};

export default JobComponent;
