import { styled } from '../../Theme/styled';
import { Card, Typography, CardMedia, CardContent } from '@material-ui/core';

export const StyledCard = styled(Card)`
  display: flex;
  width: 50%;
  min-width: 244px;

  :hover {
    transform: scale(1.2);
    transition: transform 250ms ease-in-out;
  }
`;
export const StyledCardContent = styled(CardContent)`
  flex: '1 0 auto';
`;

export const StyledTypography = styled(Typography)`
  color: #2f3a40;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;

  margin: auto;
  margin-left: 15px;
`;
