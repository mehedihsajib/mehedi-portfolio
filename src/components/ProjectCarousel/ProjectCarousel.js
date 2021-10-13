/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import projects from '../../assets/data/projects';
import { Container } from '../../styles/CommonElements';
import Buttons from '../Buttons/Buttons';
import ProjectItem from '../ProjectItem/ProjectItem';
import SectionHeading from '../SectionHeading/SectionHeading';
// install Swiper modules
SwiperCore.use([Navigation]);

// Styles
const ProjectCarouselWrapper = styled.section`
  text-align: center;
  position: relative;
  z-index: 9;

  .btn-wrapper {
    text-align: right;
  }

  .swiper-container {
    padding-top: 8rem;
    margin-top: 5.5rem;
    max-width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: auto;
    top: 0;
    right: 80px;
    transform: translateY(50%);
    border-radius: 10px;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);
    color: var(--color-gold);

    &:hover {
      background: linear-gradient(145deg, #181c20, #1d2125);
      box-shadow: (--soft-shadow-2);
      transition: 0.3s;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 2rem;
  }

  .swiper-button-next {
    right: 10px;
  }
`;
const ProjectCarousel = () => {
  return (
    <ProjectCarouselWrapper className="section-padding">
      <Container>
        <SectionHeading topHeading="Some of my recent works" mainHeading="Projects" />
        <div className="carousel-items">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            breakpoints={{
              576: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    thumb={project.thumb}
                    name={project.name}
                    desc={project.desc}
                    liveLink={project.live}
                    liveLinkIcon={<FaGlobe />}
                    target={project.target}
                    gitHubLink={project.github}
                    gitHubIcon={<FaGithub />}
                    techs={project.tech}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="btn-wrapper">
          <Buttons btnLink="/projects" btnText="See All Projects" primary />
        </div>
      </Container>
    </ProjectCarouselWrapper>
  );
};

export default ProjectCarousel;
