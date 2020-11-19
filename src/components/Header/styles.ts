import styled from 'styled-components';

export const Container = styled.header`
  padding: 0px 25px;
  background: #6555df;

  .wrapper {
    max-width: 1280px;
    margin: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 600;
      font-size: 25px;
      color: #fff;
    }

    button {
      width: 40px;
      height: 40px;

      div {
        text-align: right;
        position: relative;
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:before {
          content: '';
          width: 60%;
          height: 2px;
          background-color: #ffb4e0;
          margin-bottom: 5px;
        }

        &:after {
          content: '';
          width: 90%;
          height: 2px;
          background-color: #ffb4e0;
        }
      }
    }
  }
`;
