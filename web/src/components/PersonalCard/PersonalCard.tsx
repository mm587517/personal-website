import React from 'react';
import {
  StyledCard,
  StyledTypography,
  StyledCardContent,
  Img,
} from './PersonalCard.style';
import { PersonalCardProps } from './PersonalCard.props';

export const PersonalCard: React.FC<PersonalCardProps> = ({
  url,
  text,
  title,
}) => {
  return (
    <>
      <StyledCard>
        <Img src={url} />
        <StyledCardContent>
          <StyledTypography variant='h5'>{title}</StyledTypography>
          <StyledTypography variant='subtitle1' color='textSecondary'>
            {text}
          </StyledTypography>
        </StyledCardContent>
      </StyledCard>
    </>
  );
};
