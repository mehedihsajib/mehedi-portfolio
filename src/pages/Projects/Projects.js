import React from 'react';
import styled from 'styled-components';
import ProjectsJavascript from '../../components/ProjectJavascript/ProjectsJavascript';
import ProjectsHtml from '../../components/ProjectsHtml/ProjectsHtml';
import ProjectsReact from '../../components/ProjectsReact/ProjectsReact';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { Container } from '../../styles/CommonElements';

// Styles
const ProjectWrapper = styled.section`
  text-align: center;
`;

const Projects = () => {
  return (
    <ProjectWrapper className="section-padding">
      <Container>
        <SectionHeading topHeading="Projects I've done so far" mainHeading="Projects" />
        <ProjectsReact />
        <ProjectsHtml />
        <ProjectsJavascript />
      </Container>
    </ProjectWrapper>
  );
};

export default Projects;
