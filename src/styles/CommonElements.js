/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 123rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 991px) {
    max-width: 114rem;
    padding: 0 3rem;
  }

  @media (max-width: 767px) {
    max-width: 72rem;
    padding: 0 2rem;
  }

  @media (max-width: 575px) {
    max-width: 54rem;
  }
`;
