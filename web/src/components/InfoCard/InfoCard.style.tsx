import { styled } from '../../Theme/styled';
import { Grid, Paper, CardHeader, Card, Typography } from '@material-ui/core';

export const StyledGrid = styled(Grid)`
  min-width: 345px;
`;

export const StyledHeader = styled(CardHeader)<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
`;

export const StyledCard = styled(Card)`
  max-width: 300px;
  height: 380px;

  :hover {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;

export const StyledTypography = styled(Typography)`
  color: #2f3a40;
  font-family: 'Arial';
`;

export const Icon = styled.img`
  width: 150px;
  height: 150px;
`;
