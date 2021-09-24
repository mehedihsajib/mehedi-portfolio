/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import javascriptProjects from '../../assets/data/javascript';
import ProjectItem from '../ProjectItem/ProjectItem';
// install Swiper modules
SwiperCore.use([Navigation]);

// Styles
const ProjectsJavascriptWrapper = styled.div`
  position: relative;

  .carousel-heading {
    position: absolute;
    left: 0;
    top: 15px;
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

const ProjectsJavascript = () => {
  return (
    <ProjectsJavascriptWrapper>
      <div className="carousel-items">
        <h3 className="heading-3 carousel-heading">Vanilla Js</h3>
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
          {javascriptProjects.map((javascriptProject, index) => {
            return (
              <SwiperSlide key={javascriptProject.id}>
                <ProjectItem
                  thumb={javascriptProject.thumb}
                  name={javascriptProject.name}
                  desc={javascriptProject.desc}
                  liveLink={javascriptProject.live}
                  liveLinkIcon={<FaGlobe />}
                  target={javascriptProject.target}
                  gitHubLink={javascriptProject.github}
                  gitHubIcon={<FaGithub />}
                  techs={javascriptProject.tech}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ProjectsJavascriptWrapper>
  );
};

export default ProjectsJavascript;
