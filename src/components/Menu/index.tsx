import React from 'react';
import {
  MdClose
} from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  isOpen: boolean;
  closeMenu(): void;
}

const Menu: React.FC<IProps> = ({ isOpen, closeMenu }) => {
  return (
    <Container isOpen={isOpen}>
      <button type="button" onClick={closeMenu}>
        <MdClose />
      </button>

      <a href="#initial" onClick={closeMenu}>Início</a>
      <a href="#talkup" onClick={closeMenu}>Talk UP</a>
      <a href="#skills" onClick={closeMenu}>Habilidades de Comunicação</a>
      <a href="#objective" onClick={closeMenu}>Objetivo</a>
      <a href="#howwork" onClick={closeMenu}>Como Funciona</a>
      <a href="#carrer" onClick={closeMenu}>Carreira e Relacionamento</a>
      <a href="#media" onClick={closeMenu}>Artigos e Vídeos</a>
      <a href="#start" onClick={closeMenu}>Comece Agora</a>
    </Container>
  );
};

export default Menu;
