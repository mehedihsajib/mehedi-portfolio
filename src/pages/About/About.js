import React from 'react';
import styled from 'styled-components';
import AboutSection from '../../components/About/AboutSection';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Internship from '../../components/Internship/Internship';
import { Container } from '../../styles/CommonElements';

// Styles
const AboutWrapper = styled.div`
  padding-top: 10rem;
  .info-items {
    padding: 3rem 0rem;

    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }

  h2 {
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }

  .internship {
    padding-top: 3rem;
    padding-bottom: 5rem;
    @media (max-width: 768px) {
      padding-top: 2rem;
    }
  }

  .internship-item {
    display: flex;
    gap: 8rem;

    @media (max-width: 991px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutSection />
      <Container>
        <div className="info-items">
          <h2 className="heading-2">Education</h2>
          <AboutInfo
            title="Diploma :"
            items={['Computer Technology at Moulvibazar Polytechnic Institute']}
          />
          <AboutInfo title="School :" items={['Science at Basail Govinda Govt High School']} />
        </div>
        <div className="info-items">
          <h2 className="heading-2">Skills</h2>
          <AboutInfo title="Language :" items={['Javascript', 'C++', 'Python']} />
          <AboutInfo
            title="Web :"
            items={['HTML', 'CSS', 'JS', 'Bootstrap', 'SASS', 'React', 'jQuery', 'Wordpress']}
          />
          <AboutInfo title="Tools :" items={['Git/Github', 'Photoshop', 'Adobe XD', 'Figma']} />
        </div>
        <div className="internship">
          <h2 className="heading-2">Internship</h2>
          <div className="internship-item">
            <Internship
              company="Madina Theme"
              date="July 2021 - Sept 2021"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis? Earum obcaecati dignissimos minus. Quia fugiat distinctio quas dolorum blanditiis molestiae temporibus. Illum ab nobis, expedita quod, facere nisi odio dolore neque laborum voluptate quia eligendi autem voluptatum ullam fugiat pariatur. Sit commodi architecto aliquid rem ipsam repellat totam veniam."
            />
            <Internship
              company="Madina Theme"
              date="July 2021 - Sept 2021"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis? Earum obcaecati dignissimos minus. Quia fugiat distinctio quas dolorum blanditiis molestiae temporibus. Illum ab nobis, expedita quod, facere nisi odio dolore neque laborum voluptate quia eligendi autem voluptatum ullam fugiat pariatur. Sit commodi architecto aliquid rem ipsam repellat totam veniam."
            />
          </div>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
