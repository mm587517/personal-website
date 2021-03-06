import { styled } from '../../Theme/styled';
import { ITheme } from '../../Theme/theme';

export const Container = styled.div<{ color: keyof ITheme }>`
  width: 100%;
  min-height: 50vh;
  /* background-color: (${({ theme, color }) => theme[color].background}); */
  background-color: #2f3a40;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OverContainer = styled.div`
  width: '100%';
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Test = styled.div`
  width: '100%';
`;

export const H1 = styled.h1`
  -webkit-text-stroke: 1px black; /* width and color */
  color: white;
`;
