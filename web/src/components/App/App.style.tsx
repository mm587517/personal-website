import { styled } from '../../Theme/styled';
import { ITheme } from '../../Theme/theme';

export const Container = styled.div<{ color: keyof ITheme }>`
  width: 100%;
  min-height: 100vh;
  /* background-color: (${({ theme, color }) => theme[color].background}); */
  background-color: #2f3a40;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  -webkit-text-stroke: 1px black; /* width and color */
  color: white;
`;
