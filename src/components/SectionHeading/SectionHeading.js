import React from 'react';

const SectionHeading = ({ topHeading, mainHeading }) => {
  return (
    <>
      <h4 className="small-heading" topHeading={topHeading}>
        {topHeading}
      </h4>
      <h2 className="heading-2" mainHeading={mainHeading}>
        {mainHeading}
      </h2>
    </>
  );
};

export default SectionHeading;
