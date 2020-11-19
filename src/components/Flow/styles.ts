import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  padding: 0 25px;

  .item {
    &:nth-child(even) {
      .line {
        justify-content: flex-end;

        p {
          text-align: right;
          padding: 0px 0px 0px 15px;
        }
      }
    }

    &:last-child {
      .line {
        &:before {
          height: 50%;
        }
      }
    }

    .image {
      width: 100%;
      max-width: 320px;
      margin: auto;
      border: 1px solid #efefef;
      border-radius: 4px;
      background-color: #fdfdfd;

      img {
        width: 90%;
        max-width: 220px;
        display: block;
        margin: 32px auto;
      }
    }

    .line {
      height: 200px;
      max-width: 320px;
      margin: auto;
      position: relative;
      display: flex;
      align-items: center;

      &:before {
        content: '';
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: #efefef;
      }

      &:after {
        content: '';
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #efefef;
      }

      p {
        max-width: 50%;
        padding: 0px 15px 0px 0px;
        color: #6555df;
        font-size: 15px;
        font-weight: 300;
      }
    }
  }
`;
