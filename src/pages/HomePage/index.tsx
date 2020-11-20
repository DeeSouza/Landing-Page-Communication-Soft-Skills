import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Shape from '../../components/Shape';
import SkillCarousel from '../../components/SkillCarousel';
import Flow from '../../components/Flow';
import TitleSection from '../../components/TitleSection';

import ImageIntro from '../../assets/images/intro.svg';
import ImageCarrer from '../../assets/images/carreira.svg';

import {
  Container,
  SectionInitial,
  SectionAbout,
  SectionSkills,
  SectionCommunication,
  SectionHowWork,
  SectionCarrer,
  SectionMedia,
} from './styles';

import MediaCarousel from '../../components/MediaCarousel';

const HomePage: React.FC = () => {
  return (
    <Container>
      <SectionInitial id="initial">
        <Shape />

        <div className="wrapper">
          <div className="text">
            <h1>
              Comunicação <br />
              Como <span>__</span>
              <br /> Nunca <br />
              Antes
            </h1>

            <p>
              Melhore, cultive e gerencie suas habilidades de comunicação
              através do
              <strong> Talk Up</strong>.
            </p>
          </div>

          <Fade right>
            <div className="image">
              <img src={ImageIntro} alt="Comunicação" />
            </div>
          </Fade>
        </div>
      </SectionInitial>

      <SectionAbout id="talkup">
        <TitleSection>
          Talk UP<strong>Gerenciador de Habilidades de Comunicação</strong>
        </TitleSection>

        <p className="description">
          Cada vez mais as <strong>Soft Skills</strong> estão fazendo parte do
          nosso dia-a-dia. Existem muitas <strong>Soft Skills</strong>, porquê
          elas envolvem traços e comportamentos que caracterizam nossos
          relacionamentos com outros. Mas todas elas dependem completamente de
          desenvolvermos a melhor <strong>Soft Skills</strong> de todas:
          <strong> COMUNICAÇÂO</strong>.
        </p>

        <div className="wrapper">
          <p>Domine a arte da comunicação</p>
        </div>
      </SectionAbout>

      <SectionSkills id="skills">
        <TitleSection>
          Habilidades de Comunicação no Local de Trabalho
        </TitleSection>

        <SkillCarousel />
      </SectionSkills>

      <SectionCommunication id="objective">
        <TitleSection>Objetivo</TitleSection>

        <p className="description">
          Através do <strong>Talk UP</strong> você poderá melhorar suas
          habilidades de comunicação por gerenciar os traços de personalidade e
          comportamento da sua vida. Talk UP é uma empresa mental fictícia. O
          objetivo dela é te incentivar a ir atrás desta Soft Skill tão
          importante, não apenas para sua vida pessoal, mas como também sua vida
          profissional.
        </p>

        <div className="wrapper">
          <p>Comunicação não é só conversar</p>
        </div>
      </SectionCommunication>

      <SectionHowWork id="howwork">
        <TitleSection>Como Funciona</TitleSection>

        <Flow />
      </SectionHowWork>

      <SectionCarrer id="carrer">
        <TitleSection>Carreira e Relacionamento</TitleSection>

        <div className="wrapper">
          <Slide left>
            <div className="image">
              <img src={ImageCarrer} alt="Carreira e Relacionamento" />
            </div>
          </Slide>

          <Slide right>
            <p className="description">
              Não importa a sua idade, onde você nasceu, raça, etnia, grau de
              escolaridade ou profissão, todos nós precisamos nos comunicar.
              Para alguns pode ser um desafio desenvolver essa
              <strong> Soft Skill</strong> tão importante para a vida.
              <br /> <br />
              Se você é um desenvolvedor, talvez ache que a comunicação não é
              tão essencial assim.
              <strong> Mas tenho uma notícia para te dar: </strong>
              as coisas mudaram e continuam mudando no mercado de trabalho, e se
              comunicar bem, trabalhar em equipe, participar em reuniões e
              processos fazem parte do trabalho e são exigidos pelas empresas.
            </p>
          </Slide>
        </div>
      </SectionCarrer>

      <SectionMedia id="media">
        <TitleSection>Artigos e Vídeos</TitleSection>

        <MediaCarousel />
      </SectionMedia>
    </Container>
  );
};

export default HomePage;
