import React from 'react';
import Image from '../Image/Image';
import Data from '../Data/Data';
import LocationTime from '../LocationTime/LocationTime';

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
      <Data
        role={data.role}
        languages={data.languages}
        level={data.level}
        tools={data.tools}
      />
      <LocationTime
        location={data.location}
        postedAt={data.postedAt}
        contract={data.contract}
      />
    </div>
  );
};

export default JobComponent;
