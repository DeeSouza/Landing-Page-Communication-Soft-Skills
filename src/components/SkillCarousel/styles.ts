import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
`;

export const ItemSlider = styled.div`
  width: 100%;
  height: 300px;

  .wrapper-item {
    max-width: 320px;
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
      font-size: 17px;
      font-weight: 300;
      margin-top: 10px;
      text-align: justify;
    }
  }
`;
