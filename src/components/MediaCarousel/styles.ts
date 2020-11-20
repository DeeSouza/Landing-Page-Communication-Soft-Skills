import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  padding: 20px 0px;
  max-width: 1280px;
`;

export const ItemSlider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  a {
    max-width: 277px;
    flex: 1;
    margin: 0 auto;
    display: block;
    position: relative;
    overflow: hidden;

    strong {
      font-size: 15px;
      color: #000;
      font-weight: 300;
      padding: 20px;
      display: block;
      text-align: center;
      font-family: 'Comfortaa';
    }

    .wrapper-item {
      background-color: #fff;
      overflow: hidden;
      position: relative;
      max-height: 156px;
      border-radius: 15px;

      .overlay {
        background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgb(93 93 93 / 50%)
        );
        border-radius: 15px;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          fill: #fff;
          width: 70px;
          height: 70px;
          opacity: 0.8;
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      img {
        transition: all 0.25s ease-out;
        height: 100%;
        width: 100%;
        transform: scale(1);
        border-radius: 15px;
      }
    }
  }
`;

export const NextArrow = styled.div`
  right: 10px;
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.25s ease-out;

  svg {
    fill: #fff;
    width: 40px;
    height: 40px;
  }

  &:before {
    display: none;
  }

  &:hover {
    background-color: #6555df;
  }

  @media screen and (min-width: 1024px) {
    right: 0;
  }
`;

export const PrevArrow = styled.div`
  left: 10px;
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.25s ease-out;

  svg {
    fill: #fff;
    width: 40px;
    height: 40px;
  }

  &:before {
    display: none;
  }

  &:hover {
    background-color: #6555df;
  }

  @media screen and (min-width: 1023px) {
    left: 0;
  }
`;
