import React from 'react';
import { SloganEntity } from '@/domain/entities/SloganEntity';
import { SloganContainer, MainText, SubText } from './styles';

interface SloganProps {
  slogan: SloganEntity;
}

const Slogan: React.FC<SloganProps> = ({ slogan }) => {
  return (
    <SloganContainer>
      <MainText>{slogan.mainText}</MainText>
      <SubText>{slogan.subText}</SubText>
    </SloganContainer>
  );
};

export default Slogan; 