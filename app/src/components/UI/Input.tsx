import React, {FocusEvent} from "react";
import styled from 'styled-components';

interface InputProps {
    onChange: (str: string) => void;
    placeholder?: string;
    value?: any;
    type: string;
    width?: string;
    margin?: string;
    name?: string;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({onChange, name, placeholder, onBlur, value = '', type, width, margin }) => {
    return (
      <>
          <InputStyles 
            value={value}
            onChange={event => onChange(event.target.value)}
            placeholder={placeholder}
            type={type}
            name={name}
            onBlur={onBlur}
            width={width}
            margin={margin}
          />
      </>
    );
};

export default Input;
interface InputStyleProps {
  width?: string;
  margin?: string;
}
const InputStyles = styled.input<InputStyleProps>`
  background: #fff;
  color: #333;
  border: none;
  height: 50px;
  width: 100%;
  padding: 14.5px 15px 15px 9px;
  border-radius: 5px 0px 0px 5px;
  margin: ${props => props.margin};
  @media (min-width: 490px) {
    max-width: ${props => props.width};
  }
  &:focus {
    border: 1px solid #a8edea;
  }
`;
