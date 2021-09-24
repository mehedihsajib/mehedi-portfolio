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
  margin-top: 5.5rem;
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
              desc="I can convert any kinds of design to HTML/Bootstrap. Which will be fully responsive, pixel perfect, W3C Validated code with themeforest standard."
            />
            <ServicesCard
              icon={<FaReact />}
              title="React JS"
              desc="My favourite JS library is React. I can convert any design to React. Moreover, I'm currenty trying to do all frontend stuff with React. It's really fun."
            />
            <ServicesCard
              icon={<FaCode />}
              title="Problem Solving"
              desc="I love to solve programming problem. Usually I solve problem with C++. I've solved +-200 programming problem in various online judge."
            />
          </ServicesCards>
        </ServicesContent>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
