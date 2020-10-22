import React from 'react';
import Image from '../Image/Image';
import Data from '../Data/Data';
import LocationTime from '../LocationTime/LocationTime';
import Tool from '../Tool/Tool';
import './Job.scss';

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
    tools: string[];
  };
}

const JobComponent = ({ data }: PropsData) => {
  return (
    <div className="card">
      <div className="image-and-title">
        <Image svgSrc={data.logo} />
        <div className="title-and-location">
          <div className="company">
            <a href={`${data.company}.com`}>{data.company}</a>
          </div>
          <div className="position">
            <p>{data.position}</p>
          </div>
          <LocationTime
            location={data.location}
            postedAt={data.postedAt}
            contract={data.contract}
          />
        </div>
      </div>

      <div className="tools-and-lang">
        <Data role={data.role} languages={data.languages} level={data.level} />
        {data.tools.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default JobComponent;
