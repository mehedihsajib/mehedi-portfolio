import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

// Styles
const SocialLinksWrapper = styled.div`
  .link-item {
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);
    cursor: pointer;

    &:hover {
      background: linear-gradient(145deg, #181c20, #1d2125);
      box-shadow: (--soft-shadow-2);
      transform: translateY(-3px);
      transition: 0.3s transform ease;
    }

    &:hover {
      svg {
        fill: var(--color-gold);
        transition: 0.3s;
      }
    }
  }
`;

const SocialLinks = ({ link, icon = <FaFacebook /> }) => {
  return (
    <SocialLinksWrapper>
      <a href={link} target="_blank" rel="noreferrer" className="link-item">
        {icon}
      </a>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
