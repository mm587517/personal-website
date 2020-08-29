import React from 'react';
import { Icon } from '../Icon/Icon';
import {
  IconContainer,
  StyledGrid,
  StyledTypography,
  StyledGrid2,
} from './IconSection.style';
import { IconDisplayProps, IconSectionProps } from './IconSection.props';

export const IconSection: React.FC<IconSectionProps> = ({ icons }) => {
  return (
    <StyledGrid container direction='row' justify='space-between' spacing={10}>
      {icons.map((icon: IconDisplayProps, index) => {
        return (
          <StyledGrid2 item>
            <IconContainer>
              <Icon url={icon.url} />
              <StyledTypography>{icon.name}</StyledTypography>
            </IconContainer>
          </StyledGrid2>
        );
      })}
    </StyledGrid>
  );
};
