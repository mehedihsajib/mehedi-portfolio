import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
  .button {
    display: inline-block;
    font-size: var(--text-medium);
    padding: 2rem 3rem;
    border-radius: 5px;
    color: ${({ primary }) => (primary ? 'var(--color-gold)' : 'var(--grey-1)')};
    background-color: var(--color-dark-light);
    box-shadow: var(--soft-shadow-1);

    &:hover {
      background: linear-gradient(145deg, #181c20, #1d2125);
      box-shadow: (--soft-shadow-2);
      transform: translateY(-3px);
      transition: 0.3s transform ease;
    }
  }
`;

const Buttons = ({ btnLink, btnText, primary }) => {
  return (
    <Button primary={primary}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </Button>
  );
};

export default Buttons;
