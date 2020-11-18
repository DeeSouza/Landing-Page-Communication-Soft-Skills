import React from 'react';
import Slider from 'react-slick';

import ImgBomOuvinte from '../../assets/images/bom-ouvinte.svg';
import ImgComNaoVerbal from '../../assets/images/comunicacao-nao-verbal.svg';
import ImgMeioCorreto from '../../assets/images/meio-correto-de-comunicao.svg';
import ImgMenteAberta from '../../assets/images/mente-aberta.svg';
import ImgRespeito from '../../assets/images/respeito.svg';
import ImgConfianca from '../../assets/images/confianca.svg';
import ImgSimpatia from '../../assets/images/simpatia.svg';
import ImgEmpatia from '../../assets/images/empatia.svg';
import ImgClareza from '../../assets/images/clareza.svg';
import ImgFeedback from '../../assets/images/feedback.svg';

import { Container, ItemSlider } from './styles';

const SkillCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgBomOuvinte} alt="Bom ouvinte" />
            <p>Bom ouvinte</p>
            <div>
              Ser um bom ouvinte é uma das qualidades mais importantes para se
              desenvolver uma boa comunicação. Se você não for um bom ouvinte,
              será difícil compreender o que lhe pedem para fazer.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgComNaoVerbal} alt="Comunicação não verbal" />
            <p>Comunicação não verbal</p>
            <div>
              Sua linguagem corporal, contato visual, gestos com as mãos e tom
              de voz dão sentimento à mensagem que você está tentando
              transmitir.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgClareza} alt="Clareza e concisão" />
            <p>Clareza e concisão</p>
            <div>
              Uma boa comunicação verbal significa dizer apenas o suficiente -
              não fale muito ou pouco. Tente transmitir sua mensagem com o
              mínimo de palavras possível.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgSimpatia} alt="Simpatia" />
            <p>Simpatia</p>
            <div>
              Por meio de um tom amigável ou simplesmente de um sorriso, você
              incentivará seus colegas de trabalho a se comunicarem de maneira
              franca e honesta com você.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgConfianca} alt="Confiança" />
            <p>Confiança</p>
            <div>
              É importante ter confiança em suas interações com os outros. A
              confiança mostra a seus colegas de trabalho que você acredita no
              que está dizendo e que seguirá adiante.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgEmpatia} alt="Empatia" />
            <p>Empatia</p>
            <div>
              Usar frases simples como "Eu entendo o que você está passando."
              demonstra que você tem ouvido a outra pessoa e respeita suas
              opiniões.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgMenteAberta} alt="Mente aberta" />
            <p>Mente aberta</p>
            <div>
              Um bom comunicador deve iniciar qualquer conversa com uma mente
              aberta e flexível. Esteja aberto para ouvir e entender o ponto de
              vista da outra pessoa.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgRespeito} alt="Respeito" />
            <p>Respeito</p>
            <div>
              As pessoas estarão mais abertas para se comunicar com você se
              demonstrar respeito por elas e por suas idéias. No telefone, evite
              distrações e mantenha o foco na conversa.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgFeedback} alt="Respeito" />
            <p>Feedback</p>
            <div>
              Ser capaz de dar e receber feedback de forma adequada é uma
              habilidade de comunicação importante. Ouça o feedback que você
              recebe.
            </div>
          </div>
        </ItemSlider>
        <ItemSlider>
          <div className="wrapper-item">
            <img src={ImgMeioCorreto} alt="Meio correto de comunicação" />
            <p>Meio correto de comunicação</p>
            <div>
              Por exemplo, algumas conversas sérias (demissões, demissão,
              mudanças no salário, etc.) quase sempre são mais bem feitas
              pessoalmente.
            </div>
          </div>
        </ItemSlider>
      </Slider>
    </Container>
  );
};

export default SkillCarousel;
