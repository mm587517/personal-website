import React from 'react';
import { ImageProps } from './Image.props';
import { Img } from './Image.style';

export const Image: React.FC<ImageProps> = ({ address }) => {
  return <Img src={address} />;
};
