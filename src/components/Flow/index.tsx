import React from 'react';
import Slide from 'react-reveal/Slide';

import contents from './contents';
import { Container } from './styles';

const Flow: React.FC = () => {
  return (
    <Container>
      {contents.map((content, index) => (
        <Slide
          left={index % 2 === 0}
          right={index % 2 > 0}
          key={content.key}
          cascade
        >
          <div className="item">
            <div className="image">
              <img src={content.image} alt={content.description} />
            </div>
            <div className="line">
              <p>{content.description}</p>
            </div>
          </div>
        </Slide>
      ))}
    </Container>
  );
};

export default Flow;
