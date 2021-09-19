import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

// Styles
const ContactItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
  }

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  .icon {
    min-width: 2rem;
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

const ContactItem = ({ text = 'test info', icon = <FaMapMarkerAlt /> }) => {
  return (
    <ContactItemWrapper>
      <div className="icon">{icon}</div>
      <p className="body-text-3">{text}</p>
    </ContactItemWrapper>
  );
};

export default ContactItem;
