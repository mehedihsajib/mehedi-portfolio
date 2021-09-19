import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import { Container } from '../../styles/CommonElements';

// Styles
const FooterWrapper = styled.footer`
  padding: 4rem 0rem;
  background-color: var(--color-dark-deep);
  text-align: center;

  p {
    font-weight: bold;
    font-size: 1.8rem;
    @media (max-width: 400px) {
      font-size: 1.4rem;
    }

    .footer-icon {
      padding-top: 2rem;

      &:first-child {
        svg {
          fill: red;
        }
      }
      &:last-child {
        svg {
          fill: #62dafa;
        }
      }
    }

    .name {
      color: var(--color-gold);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <p>
          Made with &nbsp;
          <span className="footer-icon">
            <FaHeart />
            &nbsp;
          </span>
          and &nbsp;
          <span className="footer-icon">
            <FaReact />
            &nbsp; by &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mehedihsajib/"
              className="name"
            >
              Mehedi H Sajib
            </a>
          </span>
        </p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
