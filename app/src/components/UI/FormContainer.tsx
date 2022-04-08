import React from "react";
import styled from 'styled-components';

interface FormProps {
    children?: React.ReactNode;
    width: string;
    height: string;
    margin: string;
}

  const FormContainer: React.FC<FormProps> = ({  children, width, height, margin }) => {
  return (
      <FormStyles width={width} height={height} margin={margin}>
        {children}
      </FormStyles>
  );
};

export default FormContainer;

interface FormStyleProps {
  width: string;
  height: string;
  margin: string;
}

const FormStyles = styled.div<FormStyleProps>`
    max-width: ${props => props.width};
    min-height: ${props => props.height};
    border-radius: 5px;
    margin: ${props => props.margin};
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 20px;
    background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
    overflow: hidden;
`;