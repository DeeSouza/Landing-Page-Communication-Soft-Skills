import React, { useState, useEffect, useCallback } from 'react';
import Menu from '../Menu';

import { Container } from './styles';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  useEffect(() => {
    isOpen
      ? document.getElementsByTagName('html')[0].classList.add('hidden-scroll')
      : document
          .getElementsByTagName('html')[0]
          .classList.remove('hidden-scroll');
  }, [isOpen]);

  return (
    <Container>
      <div className="wrapper">
        <h2>Talk UP</h2>

        <button type="button" onClick={showMenu}>
          <div />
        </button>
      </div>

      <Menu isOpen={isOpen} closeMenu={showMenu} />
    </Container>
  );
};

export default Header;
