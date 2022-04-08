import React, {FocusEvent} from "react";
import styled from 'styled-components';

interface TextareaProps {
    onChange: (str: any ) => void;
    placeholder?: string;
    value?: string;
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    name?: string;
}

const Textarea: React.FC<TextareaProps> = ({onChange, onBlur, name, placeholder, value = ''}) => {
    return (
      <>
          <TextareaStyles 
            value={value}
            onChange={event => onChange(event.target.value)}
            placeholder={placeholder}
            onBlur={onBlur}
            name={name}
            
          />
      </>
    );
};

export default Textarea;

const TextareaStyles = styled.textarea`
  background: #fff;
  color: #333;
  border: none;
  width: 100%;
  height: 117px;
  resize: none;
  padding: 14.5px 15px 15px 9px;
  border-radius: 5px 0px 0px 5px;
  margin: 10px 0;
  &:focus {
    border: 1px solid #a8edea;
  }
`;
