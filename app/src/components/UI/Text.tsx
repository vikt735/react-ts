import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <TextStyles>
      {children}
    </TextStyles>
  );
};

export default Text;

const TextStyles = styled.p`
  font-size: 18px;
  font-weight: 900;
    
`;