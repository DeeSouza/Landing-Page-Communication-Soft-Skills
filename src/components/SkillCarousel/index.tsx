import React from 'react';
import Slider, { Settings } from 'react-slick';

import contents from './contents';

import { Container, ItemSlider } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
} as Settings;

const SkillCarousel: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        {contents.map((content) => (
          <ItemSlider key={content.key}>
            <div className="wrapper-item">
              <img src={content.image} alt={content.title} />
              <p>{content.title}</p>
              <div>{content.description}</div>
            </div>
          </ItemSlider>
        ))}
      </Slider>
    </Container>
  );
};

export default SkillCarousel;
