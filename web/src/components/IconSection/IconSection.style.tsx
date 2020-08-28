import { styled } from '../../Theme/styled';

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    transform: scale(1.5);
    transition: transform 250ms ease-in-out;
  }
`;

export const Section = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
