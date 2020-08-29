import { styled } from '../../Theme/styled';
import { Grid, Typography } from '@material-ui/core';

export const IconContainer = styled.div`
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    transform: scale(1.5);
    transition: transform 250ms ease-in-out;
  }
`;

export const StyledGrid = styled(Grid)`
  width: 80%;
  margin: auto;
  margin-left: 200px;

  display: grid;

  grid-template-columns: repeat(6, 100px);
  grid-template-rows: auto;
  grid-auto-flow: row;
`;

export const Container = styled(Grid)`
  width: 80%;
`;

export const StyledGrid2 = styled(Grid)`
  width: 10%;
  margin: auto;
  margin-bottom: 15px;
`;

export const StyledTypography = styled(Typography)`
  color: #2f3a40;
  font-family: 'Arial';
`;

export const H1 = styled.h1`
  font-size: 25px;
  font-family: 'Arial';
  color: #2f3a40;
`;
