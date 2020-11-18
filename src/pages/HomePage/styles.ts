import styled from 'styled-components';

export const Container = styled.div``;

export const SectionFirst = styled.section`
  width: 100%;
  background: #6555df;
  padding: 0 25px;
  height: 65vh;
  position: relative;

  .background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 24px;

      path {
        fill: #ffffff;
      }
    }

    @media (max-width: 767px) {
      svg {
        width: calc(100% + 1.3px);
        height: 12px;
      }
    }
  }

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

  strong {
    color: #fff;
    font-family: 'Lato';
    font-weight: 300;
    font-size: 20px;
    margin-top: 30px;
    display: block;
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
