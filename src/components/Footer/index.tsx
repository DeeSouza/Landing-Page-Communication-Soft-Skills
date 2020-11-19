import React from 'react';

import TitleSection from '../TitleSection';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <TitleSection>Comece agora</TitleSection>

      <div className="wrapper">
        <p className="description">
          A comunicação é a mais importante das <strong>Soft Skills</strong>.
          Por meio dela você pode desenvolver muitas outras qualidades que são
          exigidas no mercado de trabalho, dentro de uma empresa, trabalhando
          com as mais diversas pessoas e projetos, tanto presencialmente, quanto
          virtualmente, onde ainda mais se é exigida a boa comunicação e bom
          comportamento. Veja abaixo algumas qualidades que você vai ganhar por
          ter uma boa comunicação:
        </p>

        <ul>
          <li>Inteliência emocional</li>
          <li>Resiliência</li>
          <li>Empatia</li>
          <li>Lidar com a pressão</li>
          <li>Simpatia</li>
          <li>Fazer boas apresentações</li>
          <li>Paciência</li>
          <li>Autocontrole</li>
          <li>Acessível</li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
