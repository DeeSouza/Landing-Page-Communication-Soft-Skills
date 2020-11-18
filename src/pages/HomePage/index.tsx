import React from 'react';

import Shape from '../../components/Shape';
import SkillCarousel from '../../components/SkillCarousel';

import { Container, SectionFirst, SectionSecond, SectionThird } from './styles';

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
          Talk UP<strong>Gerenciador de Habilidades de Comunicação</strong>
        </h2>
      </SectionSecond>

      <SectionThird className="no-padding">
        <h2>Métricas e Habilidades</h2>

        <SkillCarousel />
      </SectionThird>
    </Container>
  );
};

export default HomePage;
