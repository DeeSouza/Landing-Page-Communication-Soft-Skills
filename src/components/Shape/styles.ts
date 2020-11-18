import styled from 'styled-components';

export const Container = styled.div`
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
`;
