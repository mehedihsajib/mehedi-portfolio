import React from 'react';
import styled from 'styled-components';

// Styles
const CardWrapper = styled.div`
  width: 95%;
  height: 100%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: left;
  border-radius: 10px;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);

  .card-thumb {
    height: 25rem;
    margin-bottom: 3rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  .card-content {
    h3 {
      margin-bottom: var(--mb-sm);
    }

    p {
      font-size: 1.6rem;
    }
  }

  .see-on {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 2rem;
      cursor: pointer;
      background-color: red;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1b1f23;
      box-shadow: var(--soft-shadow-1);
      &:hover {
        background: linear-gradient(145deg, #181c20, #1d2125);
        box-shadow: (--soft-shadow-2);
        transform: translateY(-3px);
        transition: 0.3s transform ease;

        svg {
          fill: var(--color-gold);
        }
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
`;
const ProjectItem = ({
  liveLink,
  liveLinkIcon,
  target,
  gitHubIcon,
  gitHubLink,
  name,
  desc,
  thumb,
  alt,
}) => {
  return (
    <CardWrapper>
      <div className="card-thumb">
        <img src={thumb} alt={alt} className="card-img" />
      </div>
      <div className="card-content">
        <h3 className="heading-4">{name}</h3>
        <p className="body-text-3">{desc}</p>
        <div className="see-on">
          <a target={target} href={liveLink}>
            {liveLinkIcon}
          </a>
          <a target={target} href={gitHubLink}>
            {gitHubIcon}
          </a>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectItem;
