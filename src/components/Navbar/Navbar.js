import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineAlignLeft } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import logoIcon from '../../assets/images/logo-icon.png';
import { Container } from '../../styles/CommonElements';

// Styles
const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: #212428de;
  box-shadow: var(--box-shadow-1);
  backdrop-filter: blur(15px);
  padding: 1rem 0;
  position: fixed;
  z-index: 9999;
`;

const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    background-color: var(--color-dark-deep);
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding: 10rem 0rem;
    height: 90vh;
    position: absolute;
    top: 90px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.4s ease;
    z-index: 111;
  }

  li {
    &:not(:last-child) {
      margin-right: 3rem;

      @media (max-width: 767px) {
        margin-right: 0;
      }
    }
  }
  a {
    font-size: var(--text-medium);
  }

  .active {
    color: var(--color-gold);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  img {
    display: inline-block;
    width: 7rem;
    height: 7rem;
    border: 3px solid #2e3237;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h3 {
    color: var(--color-gold);
    font-size: clamp(1.8rem, 2.5vw, 2.2rem);
    text-transform: uppercase;
  }
`;

const MobileIcons = styled.div`
  font-size: 2.5rem;
  position: absolute;
  top: 20px;
  right: 3rem;
  display: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);

  svg {
    fill: var(--color-gold);
    stroke-opacity: 0;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);

    &:hover {
      background: linear-gradient(145deg, #181c20, #1d2125);
      box-shadow: (--soft-shadow-2);
      transform: translateY(-3px);
      transition: 0.3s transform ease;
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
    &:hover {
      svg {
        fill: var(--color-gold);
        transition: 0.3s;
      }
    }
  }
`;

// JSX
const Navbar = () => {
  // States
  const [click, setClick] = useState(false);

  // Handler
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <NavbarWrapper>
      <MobileIcons onClick={clickHandler}>
        {click ? <MdClose /> : <AiOutlineAlignLeft />}
      </MobileIcons>
      <Container>
        <NavbarContent>
          <LogoWrapper>
            <NavLink to="/">
              <LogoContent>
                <img src={logoIcon} alt="Mehedi" />
                <h3>Mehedi</h3>
              </LogoContent>
            </NavLink>
          </LogoWrapper>
          <NavItems onClick={clickHandler} click={click}>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <RightIcons>
              <a href="https://www.linkedin.com/in/mehedihsajib/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/mehedihsajib/" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </RightIcons>
          </NavItems>
        </NavbarContent>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
