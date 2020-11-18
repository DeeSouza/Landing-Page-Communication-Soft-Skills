import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const SectionFirst = styled.section`
  width: 100%;
  background: #6555df;
  padding: 0 25px;
  height: calc(100% - 230px);
  position: relative;

  h1 {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Lato';
    line-height: 1.2;

    span {
      color: #ffb4e0;
    }
  }

  p {
    color: #fff;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 20px;
    margin-top: 30px;
    display: block;
    max-width: 280px;

    strong {
      color: #ffb4e0;
    }
  }
`;

export const SectionSecond = styled.section`
  margin-top: 30px;

  h2 {
    text-align: center;
    font-size: 30px;

    strong {
      display: block;
      font-size: 20px;
      font-weight: 300;
      margin-top: 5px;
      padding: 0px 40px;
    }
  }
`;
