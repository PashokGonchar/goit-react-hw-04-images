import React from 'react';
import { MainButton } from './Button.styled';

const Button = ({ onClick, disabled }) => {
  return (
      <MainButton onClick={onClick} disabled={disabled}>
        Load more
      </MainButton>
  );
};

export default Button;
