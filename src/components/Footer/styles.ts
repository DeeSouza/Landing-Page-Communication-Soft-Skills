import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 40px 0px;

  h2 {
    text-align: center;
    font-size: 26px;
    font-family: 'Comfortaa';
    font-weight: 600;
  }

  .wrapper {
    max-width: 1280px;
    width: 90%;
    margin: 20px auto;

    .description {
      font-size: 16px;
      font-weight: 300;
      padding: 0 25px;
      text-align: center;
      margin: auto;
      line-height: 1.3;
      max-width: 500px;
    }

    ul {
      font-size: 16px;
      font-weight: 300;
      padding: 0 25px;
      text-align: center;
      margin: auto;
      line-height: 1.3;
      max-width: 500px;
      margin-top: 20px;

      li {
        font-weight: 500;
      }
    }
  }

  @media screen and (min-width: 1023px) {
    h2 {
      font-size: 30px;
    }

    .wrapper {
      .description {
        font-size: 20px;
      }

      ul {
        font-size: 20px;
      }
    }
  }

  @media screen and (min-width: 1279px) {
    h2 {
      font-size: 40px;
    }

    .wrapper {
      .description {
        font-size: 22px;
        max-width: 700px;
      }

      ul {
        font-size: 22px;
      }
    }
  }
`;
