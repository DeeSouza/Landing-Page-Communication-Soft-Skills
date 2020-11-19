import React from 'react';

import contents from './contents';

import { Container } from './styles';

const Flow: React.FC = () => {
  return (
    <Container>
      {contents.map((content) => (
        <div className="item" key={content.key}>
          <div className="image">
            <img src={content.image} alt={content.description} />
          </div>
          <div className="line">
            <p>{content.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Flow;
