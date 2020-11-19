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
