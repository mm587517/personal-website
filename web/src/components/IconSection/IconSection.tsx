import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconContainer, Section } from './IconSection.style';
import { IconDisplayProps, IconSectionProps } from './IconSection.props';

export const IconSection: React.FC<IconSectionProps> = ({ icons }) => {
  return (
    <Section>
      {icons.map((icon: IconDisplayProps, index) => {
        return (
          <IconContainer>
            <Icon url={icon.url} />
            <p>{icon.name}</p>
          </IconContainer>
        );
      })}
    </Section>
  );
};
