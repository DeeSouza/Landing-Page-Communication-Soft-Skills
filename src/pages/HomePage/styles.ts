import styled from 'styled-components';

import ImageCommunication from '../../assets/images/comunicacao-reuniao.jpg';
import ImageCommunicationOnline from '../../assets/images/comunicacao-reuniao-online.jpg';

export const Container = styled.div`
  height: 100%;

  section {
    width: 100%;

    h2 {
      text-align: center;
      font-size: 26px;
      font-family: 'Comfortaa';
      font-weight: 600;
      padding: 40px 25px 0;

      strong {
        display: block;
        font-size: 20px;
        font-weight: 300;
        margin-top: 5px;
        padding: 0px 10px;
      }
    }

    .description {
      font-size: 16px;
      font-weight: 300;
      padding: 0 25px;
      margin: 10px auto;
      text-align: center;
      line-height: 1.3;
      max-width: 500px;
    }

    @media screen and (min-width: 1023px) {
      h2 {
        font-size: 30px;

        strong {
          font-size: 24px;
        }
      }

      .description {
        font-size: 20px;
        max-width: 750px;
      }
    }

    @media screen and (min-width: 1279px) {
      h2 {
        font-size: 40px;

        strong {
          font-size: 28px;
        }
      }

      .description {
        font-size: 22px;
        max-width: 750px;
      }
    }
  }
`;

export const SectionInitial = styled.section`
  background: #6555df;
  background-size: 400px;
  height: calc(100% - 230px);
  max-height: 360px;
  min-height: 360px;
  position: relative;
  padding: 0 25px;
  overflow: hidden;

  .wrapper {
    max-width: 1280px;
    margin: auto;

    .text {
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
    }

    .image {
      display: none;
    }
  }

  @media screen and (min-width: 767px) {
    .wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .image {
        display: block;

        img {
          width: 400px;
        }
      }
    }
  }

  @media screen and (min-width: 1023px) {
    & {
      max-height: 520px;
      min-height: 520px;
    }

    .wrapper {
      .text {
        h1 {
          font-size: 60px;
        }

        p {
          font-size: 25px;
        }
      }

      .image {
        img {
          width: 500px;
        }
      }
    }
  }

  @media screen and (min-width: 1279px) {
    .wrapper {
      .image {
        img {
          width: 680px;
        }
      }
    }
  }
`;

export const SectionAbout = styled.section`
  padding: 0;

  .wrapper {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.52),
        rgb(93 93 93 / 73%)
      ),
      url(${ImageCommunication});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 300px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      padding: 0px 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 1279px) {
    .wrapper {
      height: 500px;
      background-attachment: fixed;

      p {
        font-size: 40px;
      }
    }
  }
`;

export const SectionSkills = styled.section`
  padding: 0;
`;

export const SectionCommunication = styled.section`
  padding: 0;
  background-color: #6555df;
  overflow: hidden;

  h2 {
    color: #fff;
    margin-top: 20px;
  }

  p {
    color: #fff;
  }

  @media screen and (min-width: 767px) {
    h2 {
      margin-top: 30px;
    }
  }

  .wrapper {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.52),
        rgb(93 93 93 / 73%)
      ),
      url(${ImageCommunicationOnline});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 300px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      padding: 0px 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 1279px) {
    .wrapper {
      background-attachment: fixed;
      height: 500px;

      p {
        font-size: 40px;
      }
    }
  }
`;

export const SectionHowWork = styled.section`
  padding-bottom: 20px;
`;

export const SectionCarrer = styled.section`
  .wrapper {
    margin: auto;
    max-width: 1280px;

    .image {
      margin: 50px 0px;

      img {
        width: 80%;
        max-width: 400px;
        margin: auto;
        display: block;
      }
    }
  }

  @media screen and (min-width: 1023px) {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      div {
        width: 50%;
      }

      p {
        width: 50%;
        text-align: left;
      }
    }
  }
`;

export const SectionMedia = styled.section``;
