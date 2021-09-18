import React from 'react';

const SectionHeading = ({ topHeading = 'Top Heading', mainHeading = 'Main Heading' }) => {
  return (
    <>
      <h4 className="small-heading">{topHeading}</h4>
      <h2 className="heading-2">{mainHeading}</h2>
    </>
  );
};

export default SectionHeading;
