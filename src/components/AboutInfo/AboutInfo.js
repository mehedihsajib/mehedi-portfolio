/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

// Styles
const AboutInfoWrapper = styled.div`
  /* background-color: red; */
  .info-item {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  h3 {
    width: 20rem;
    @media (max-width: 400px) {
      gap: 1rem;
      margin-bottom: 2rem;
      margin-right: 2rem;
    }
  }

  .single-items {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: flex-start;
  }

  .single-item {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);
    display: flex;
    justify-content: flex-end;

    @media (max-width: 400px) {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
`;

const AboutInfo = ({ title = 'Title', items = ['html', 'css', 'js'] }) => {
  return (
    <AboutInfoWrapper>
      <div className="info-item">
        <h3 className="body-text-3">{title}</h3>
        <div className="single-items">
          {items.map((item, index) => (
            <div className="single-item">{item}</div>
          ))}
        </div>
      </div>
    </AboutInfoWrapper>
  );
};

export default AboutInfo;
