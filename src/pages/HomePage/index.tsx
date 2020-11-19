import React from 'react';

import Shape from '../../components/Shape';
import SkillCarousel from '../../components/SkillCarousel';
import Flow from '../../components/Flow';

import ImageIntro from '../../assets/images/intro.svg';

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
      <SectionInitial>
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
          <div className="image">
            <img src={ImageIntro} alt="Comunicação" />
          </div>
        </div>
      </SectionInitial>

      <SectionAbout>
        <h2>
          Talk UP<strong>Gerenciador de Habilidades de Comunicação</strong>
        </h2>
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

      <SectionSkills>
        <h2>Habilidades</h2>

        <SkillCarousel />
      </SectionSkills>

      <SectionCommunication>
        <h2>Comunicação Avançada</h2>
        <p className="description">
          Através do <strong>Talk UP</strong> você poderá melhorar suas
          habilidades de comunicação por gerenciar os traços de personalidade e
          comportamento da sua vida.
        </p>

        <div className="wrapper">
          <p>Comunicação não é só saber conversar</p>
        </div>
      </SectionCommunication>

      <SectionHowWork>
        <h2>Como Funciona</h2>

        <Flow />
      </SectionHowWork>

      <SectionCarrer>
        <h2>Carreira e Relacionamento</h2>

        <p className="description">
          Não importa a sua idade, onde você nasceu, raça, etnia, grau de
          escolaridade ou profissão, todos nós precisamos nos comunicar. Para
          alguns pode ser um desafio desenvolver essa
          <strong> Soft Skill</strong> tão importante para a vida.
          <br /> <br />
          Se você é um desenvolvedor, talvez ache que a comunicação não é tão
          essencial assim. <strong>Mas tenho uma notícia para te dar: </strong>
          as coisas mudaram e continuam mudando no mercado de trabalho, e se
          comunicar bem, trabalhar em equipe, participar em reuniões e processos
          fazem parte do trabalho e são exigidos pelas empresas.
        </p>
      </SectionCarrer>

      <SectionMedia>
        <h2>Artigos e Vídeos</h2>

        <MediaCarousel />
      </SectionMedia>
    </Container>
  );
};

export default HomePage;
