import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/CommonElements';
import Buttons from '../Buttons/Buttons';
import LinkBtn from '../Buttons/LinkButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import { aboutData } from './data';
// Styles
const AboutWrapper = styled.section``;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const AboutLeftContent = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }

  p {
    margin-top: var(--mt-md);
    line-height: 1.8;
  }

  .button-wrapper {
    display: flex;
    margin-top: 5rem;
    flex-wrap: wrap;

    div {
      display: inline-block;
      @media (max-width: 439px) {
        width: 100%;
      }
      &:not(:last-child) {
        margin-right: 2rem;
        @media (max-width: 439px) {
          margin-right: 0;
          margin-bottom: 2rem;
        }
      }

      .button {
        @media (max-width: 439px) {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

const AboutRightContent = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: var(--mt-lg);
  }
`;

const AboutSection = () => {
  return (
    <AboutWrapper className="section-padding">
      <Container>
        <AboutContent>
          <AboutLeftContent>
            <SectionHeading topHeading="A Little About Me" mainHeading="About" />
            <p className="body-text-3">{aboutData.aboutText1}</p>
            <p className="body-text-3">{aboutData.aboutText2}</p>
            <div className="button-wrapper">
              <LinkBtn
                primary
                btnLink="https://drive.google.com/file/d/19A7s7OKrblcDYi124E8zBzBDHttBC870/view?usp=sharing"
                btnText="Get Resume"
              />
              <Buttons btnLink="/contact" btnText="Contact Me " />
            </div>
          </AboutLeftContent>
          <AboutRightContent>
            <img src={aboutData.aboutImg} alt="AboutImg" />
          </AboutRightContent>
        </AboutContent>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
