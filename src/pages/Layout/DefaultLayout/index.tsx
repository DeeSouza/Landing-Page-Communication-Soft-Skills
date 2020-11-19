import React from 'react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { Container, Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>

      <Footer />
    </Container>
  );
};

export default DefaultLayout;
