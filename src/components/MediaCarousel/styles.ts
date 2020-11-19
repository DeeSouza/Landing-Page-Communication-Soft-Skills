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
    height: 156px;
    margin: 0 auto;
    display: block;
    position: relative;
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

    .wrapper-item {
      background-color: #fff;
      border-radius: 15px;

      img {
        width: 100%;
        border-radius: 15px;
      }
    }
  }
`;
