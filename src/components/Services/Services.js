import React from 'react';
import { FaCode, FaHtml5, FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { Container } from '../../styles/CommonElements';
import SectionHeading from '../SectionHeading/SectionHeading';
import ServicesCard from '../ServicesCard/ServicesCard';

// Styles
const ServicesWrapper = styled.section`
  /* background-color: red; */
`;

const ServicesContent = styled.div`
  text-align: center;
`;

const ServicesCards = styled.div`
  margin-top: var(--mt-lg);
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Services = () => {
  return (
    <ServicesWrapper className="section-padding">
      <Container>
        <ServicesContent>
          <SectionHeading topHeading="Things I love to do" mainHeading="Services" />
          <ServicesCards>
            <ServicesCard
              icon={<FaHtml5 />}
              title="Design to HTML"
              desc="I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS."
            />
            <ServicesCard
              icon={<FaReact />}
              title="Design to React"
              desc="I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS."
            />
            <ServicesCard
              icon={<FaCode />}
              title="Problem Solving"
              desc="I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS."
            />
          </ServicesCards>
        </ServicesContent>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
