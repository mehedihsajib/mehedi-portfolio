import React from 'react';
import styled from 'styled-components';

// Styles
const Card = styled.div`
  max-width: 36rem;
  padding: 4rem;
  border-radius: 10px;
  background: #1b1f23;
  box-shadow: var(--soft-shadow-1);

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 4rem;
  }

  &:not(:last-child) {
    margin-right: 3rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }

  .card-icon {
    font-size: 5rem;
    height: 10rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: var(--mb-sm);
    border-radius: 50%;
    background: #1b1f23;
    box-shadow: var(--soft-shadow-1);
    svg {
      fill: var(--color-gold);
    }
  }

  h4 {
    margin-bottom: var(--mb-xsm);
  }
`;
const ServicesCard = ({ icon, title, desc }) => {
  return (
    <Card>
      <div className="card-icon">{icon}</div>
      <h4 className="heading-4">{title}</h4>
      <p className="body-text-2">{desc}</p>
    </Card>
  );
};

export default ServicesCard;
