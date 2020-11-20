import React from 'react';
import Slider, { Settings } from 'react-slick';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft
} from 'react-icons/md';

import contents from './contents';
import { Container, ItemSlider, NextArrow, PrevArrow } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow><MdKeyboardArrowRight /></NextArrow>,
  prevArrow: <PrevArrow><MdKeyboardArrowLeft /></PrevArrow>,
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
