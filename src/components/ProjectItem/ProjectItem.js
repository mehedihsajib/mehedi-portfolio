import React from 'react';
import styled from 'styled-components';

// Styles
const CardWrapper = styled.div`
  width: 95%;
  min-height: 100%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: left;
  border-radius: 10px;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);
  position: relative;

  .status {
    font-size: 12px;
    font-weight: 600;
    color: green;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -55px;
    transform: rotate(-90deg);
  }

  .card-thumb {
    height: 20rem;
    margin-bottom: 3rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    @media (max-width: 400px) {
      height: 15rem;
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

  .tech-used {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;

    li {
      font-size: 1.4rem;
      background-color: red;
      padding: 5px 7px;
      border-radius: 5px;
      background: #1b1f23;
      box-shadow: var(--soft-shadow-1);
      color: var(--color-gold);
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
  status,
  techs = ['html', 'css', 'js', 'bootstrap'],
}) => {
  return (
    <CardWrapper>
      <div className="card-thumb">
        <img src={thumb} alt={alt} className="card-img" />
        <p className="status">{status}</p>
      </div>
      <div className="card-content">
        <h3 className="heading-4">{name}</h3>
        <p className="body-text-3">{desc}</p>
        <ul className="tech-used">
          {techs.map((tech, index) => (
            <li key={index.id}>{tech}</li>
          ))}
        </ul>
        <div className="see-on">
          <a target={target} href={gitHubLink}>
            {gitHubIcon}
          </a>
          <a target={target} href={liveLink}>
            {liveLinkIcon}
          </a>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectItem;
