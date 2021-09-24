import React from 'react';
import styled from 'styled-components';

// Styles
const IntershipWrapper = styled.div`
  /* background-color: red; */
  width: 50%;
  padding-bottom: 3rem;

  h3 {
  }

  a {
    font-family: 'Montserrat Bold';
    color: var(--color-gold);
    text-transform: capitalize;
    font-weight: 600;
  }

  h4 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .date {
    font-size: 2.2rem;
    margin-top: 1rem;
  }

  .desc {
    margin-top: 2rem;
  }
`;

const Internship = ({
  company = 'google',
  date = 'date',
  desc = 'description',
  link = 'https://google.com',
  position = 'frontend web developer',
}) => {
  return (
    <IntershipWrapper>
      <div className="content">
        <a href={link} target="_blank" rel="noreferrer" className="heading-3">
          {company}
        </a>
        <h4 className="heading-4">{position}</h4>
        <p className="body-text-2 date">{date}</p>
        <p className="body-text-3 desc">{desc}</p>
      </div>
    </IntershipWrapper>
  );
};

export default Internship;
