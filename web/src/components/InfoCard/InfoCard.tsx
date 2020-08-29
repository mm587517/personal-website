import React, { useState } from 'react';

import {
  Icon,
  StyledGrid,
  StyledCard,
  StyledTypography,
  StyledHeader,
} from './InfoCard.style';

import { CardContent } from '@material-ui/core';
import { InfoCardProps } from './InfoCard.props';

export const InfoCard: React.FC<InfoCardProps> = ({ cards }) => {
  return (
    <StyledGrid container justify='center' spacing={2}>
      {cards.map((card: any) => {
        return (
          <StyledGrid item>
            <StyledCard>
              <StyledHeader color={card.color} title={card.title} />
              <CardContent>
                {card.info.map((line: string) => {
                  return <StyledTypography>{line}</StyledTypography>;
                })}
                {card.url && <Icon src={card.url} />}
              </CardContent>
            </StyledCard>
          </StyledGrid>
        );
      })}
    </StyledGrid>
  );
};
