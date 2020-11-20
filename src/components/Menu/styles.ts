import styled from 'styled-components';

interface IProps {
  isOpen: boolean;
}

export const Container = styled.div<IProps>`
  position: fixed;
  padding: 0 25px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6555df;
  z-index: 3;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  button {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      svg {
        transform: scale(1.05);
        fill: #ffb4e0;
      }
    }

    svg {
      width: 30px;
      height: 30px;
      fill: #fff;
      transition: all 0.25s ease-out;
    }
  }

  a {
    text-align: center;
    color: #fff;
    font-family: 'Comfortaa';
    font-size: 20px;
    display: block;
    padding: 15px 0px;
    transform: scale(1);
    transition: all 0.25s ease-out;

    &:hover {
      transform: scale(1.05);
      color: #ffb4e0;
    }
  }
`;
