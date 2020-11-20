import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 1280px;
`;

export const ItemSlider = styled.div`
  width: 100%;

  .wrapper-item {
    max-width: 320px;
    height: 300px;
    margin: 0 auto;
    padding: 0px 25px;

    p {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }

    img {
      width: 200px;
      margin: 10px auto;
    }

    div {
      font-size: 16px;
      font-weight: 300;
      margin-top: 10px;
      text-align: justify;
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
    background-color: ${({ theme }) => theme.colors.primary};
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
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: 1023px) {
    left: 0;
  }
`;
