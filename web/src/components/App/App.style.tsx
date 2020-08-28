import { styled } from '../../Theme/styled';

export const ImgContainer = styled.div<{ address: string }>`
  width: 100%;
  min-height: 100vh;
  background-image: url(${({ address }) => address});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  -webkit-text-stroke: 1px black; /* width and color */
  color: white;
`;
