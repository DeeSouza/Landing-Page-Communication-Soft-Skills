import React from 'react';
import Fade from 'react-reveal/Fade';

const TitleSection: React.FC = ({ children }) => {
  return (
    <Fade big>
      <h2>{children}</h2>
    </Fade>
  );
};

export default TitleSection;
