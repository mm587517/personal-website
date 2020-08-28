import React from 'react';
import { Img } from './Icon.style';
import { IconProps } from './Icon.props';

export const Icon: React.FC<IconProps> = ({ url }) => {
  return <Img src={url} />;
};
