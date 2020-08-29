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
`;

export const StyledGrid2 = styled(Grid)`
  width: 10%;
  margin: auto;
`;

export const StyledTypography = styled(Typography)`
  color: #2f3a40;
  font-family: 'Arial';
`;
