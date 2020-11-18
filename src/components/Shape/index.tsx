import React from 'react';

import { Container } from './styles';

const Shape: React.FC = () => {
  return (
    <Container>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" />
      </svg>
    </Container>
  );
};

export default Shape;
