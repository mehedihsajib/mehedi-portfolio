import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/CommonElements';
import Buttons from '../Buttons/Buttons';
import LinkBtn from '../Buttons/LinkButton';
import { heroData } from './data';

// Styles
const HeroWrapper = styled.section``;

const HeroContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5rem 0;

  @media (max-width: 1195px) {
    padding-top: 10rem;
    justify-content: center;
  }
`;

const HeroLeftContent = styled.div`
  width: 50%;

  @media (max-width: 1094px) {
    width: 100%;
  }

  .top-heading {
    font-size: 2rem;
    margin-bottom: var(--mb-xsm);
    line-height: 0;
  }

  .heading-1 {
    color: var(--color-gold);
    margin-bottom: var(--mb-xsm);
  }

  .heading-4 {
    span {
      color: var(--color-gold);
    }
  }

  p {
    font-size: var(--text-medium);
    margin: 2rem 0;
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

const HeroRightContent = styled.div`
  margin-top: 15rem;
  position: relative;
  bottom: 0;
  height: 57rem;
  width: 52rem;
  border-radius: 10px;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);
  z-index: -1;
  text-align: center;

  @media (max-width: 575px) {
    height: 35rem;
    margin-top: 30rem;
  }

  @media (max-width: 500px) {
    margin-top: 23rem;
  }

  @media (max-width: 400px) {
    margin-top: 15rem;
  }

  @media (max-width: 370px) {
    margin-top: 10rem;
  }

  @media (max-width: 340px) {
    margin-top: 5rem;
  }

  .img-wrapper {
    max-width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Container>
          <HeroContent>
            <HeroLeftContent>
              <h4 className="top-heading">{heroData.topHeading}</h4>
              <h1 className="heading-1">{heroData.mainHeading}</h1>
              <h3 className="heading-4">
                <span>&#60;&#47;</span>
                {heroData.subHeading}
                <span>&#62;</span>
              </h3>
              <p className="body-text-2">{heroData.heroText}</p>
              <div className="button-wrapper">
                <LinkBtn
                  primary
                  btnLink="https://drive.google.com/file/d/18WZjUWLuxfE6P4a_RIZysOJHQVPc7RBg/view?usp=sharing"
                  btnText="Get Resume"
                />
                <Buttons btnLink="/projects" btnText="Projects " />
              </div>
            </HeroLeftContent>
            <HeroRightContent>
              <div className="img-wrapper">
                <img src={heroData.heroImg} alt="Mehedi H Sajib" />
              </div>
            </HeroRightContent>
          </HeroContent>
        </Container>
      </HeroWrapper>
    </>
  );
};

export default Hero;
