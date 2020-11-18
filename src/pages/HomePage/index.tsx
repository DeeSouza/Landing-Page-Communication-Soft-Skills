import React from 'react';

import Shape from '../../components/Shape';
import SkillCarousel from '../../components/SkillCarousel';

import { Container, SectionFirst, SectionSecond } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <SectionFirst>
        <Shape />

        <h1>
          Comunicação <br />
          Como <span>__</span>
          <br /> Nunca <br />
          Antes
        </h1>

        <p>
          Melhore, cultive e gerencie suas habilidades de comunicação através do
          <strong> Talk Up</strong>.
        </p>
      </SectionFirst>

      <SectionSecond>
        <h2>
          GHC<strong>Gerenciador de Habilidades de Comunicação</strong>
        </h2>

        <SkillCarousel />
      </SectionSecond>
    </Container>
  );
};

export default HomePage;
