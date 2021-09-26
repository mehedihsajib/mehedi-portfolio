import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/CommonElements';

// Styles
const FooterWrapper = styled.footer`
  padding: 3rem 0rem;
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
            <Link to="/" className="name">
              Mehedi H Sajib
            </Link>
          </span>
        </p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
