import React from 'react';
import {
  MdPlayCircleOutline,
  MdChromeReaderMode,
  MdBook,
} from 'react-icons/md';
import Slider, { Settings } from 'react-slick';

import contents from './contents';

import { Container, ItemSlider } from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
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

const MediaCarousel: React.FC = () => {
  return (
    <Container>
      <Slider {...settings}>
        {contents.map((content) => (
          <ItemSlider key={content.key}>
            <a href={content.link} target="_blank" rel="noreferrer">
              <div className="wrapper-item">
                <img src={content.image} alt={content.title} />
              </div>

              <div className="overlay">
                {content.type === 'video' && <MdPlayCircleOutline />}
                {content.type === 'article' && <MdChromeReaderMode />}
                {content.type === 'book' && <MdBook />}
              </div>
            </a>
          </ItemSlider>
        ))}
      </Slider>
    </Container>
  );
};

export default MediaCarousel;
