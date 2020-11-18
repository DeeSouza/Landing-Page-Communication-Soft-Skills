import React from 'react';

import { Container, SectionFirst, SectionSecond } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <SectionFirst>
        <div className="background">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" />
          </svg>
        </div>

        <h1>
          Comunicação <br />
          Como <span>__</span>
          <br /> Nunca <br />
          Antes
        </h1>

        <strong>
          Melhore, cultive e gerencie suas habilidades de comunicação.
        </strong>
      </SectionFirst>

      <SectionSecond>
        <h2>
          GHC<strong>Gerenciador de Habilidades de Comunicação</strong>
        </h2>
      </SectionSecond>
    </Container>
  );
};

export default HomePage;
