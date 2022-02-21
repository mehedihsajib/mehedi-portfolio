import React from 'react';
import styled from 'styled-components';
import AboutSection from '../../components/About/AboutSection';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Internship from '../../components/Internship/Internship';
import { Container } from '../../styles/CommonElements';

// Styles
const AboutWrapper = styled.div`
  .info-items {
    padding: 3rem 0rem;

    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }

  h2 {
    font-size: 4rem;
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
            title="Web Tech:"
            items={[
              'SASS',
              'Bootstrap',
              'jQuery',
              'ReactJS',
              'NextJs',
              'Styled Components',
              'Elementor',
            ]}
          />
          <AboutInfo title="Tools :" items={['Git/Github', 'Photoshop', 'Adobe XD', 'Figma']} />
        </div>
        <div className="internship">
          <h2 className="heading-2">Internship</h2>
          <div className="internship-item">
            <Internship
              link="https://themeforest.net/user/modinatheme"
              company="Madina Theme"
              position="Frontend Developer(Remote)"
              date="July 2021 - Sept 2021"
              desc="Modina Theme is a themeforest based company. They used to build theme for Themeforest.
              My job was to covert design to html/bootstrap. I've completed arround three projects.  More than 25 pages I've converted to Bootstrap which is fully responsive, pixel perfect, well commented and W3C validated code with Themeforest standard.
              "
            />
            <Internship
              link="https://envyweb.studio/"
              company="Envyweb Studio"
              position="Frontend Developer"
              date="Dec 2021 - Feb 2022"
              desc="Envyweb is working with international clients since 2017. They used to sell wordpress based services. Recenty they start building product like wordpress theme and plugin. My role was to build frontend of the product."
            />
          </div>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default About;
