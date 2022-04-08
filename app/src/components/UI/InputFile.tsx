import React from 'react';
import styled from 'styled-components';
import img from '../../assets/add.svg';

interface InputFileProps {
  onChange: (str: any ) => void;
  placeholder?: string;
  type: string;
  text: string;
  width: string;
  margin?: string;
  accept:string;
  name: string;
  
}

const InputFile: React.FC<InputFileProps> = ({onChange, placeholder, type, name, text, width, margin, accept}) => {
  return (
    <>
        <InputFileStyles 
          id="input-file"
          accept={accept}
          onChange={event => onChange(event.target.files)}
          placeholder={placeholder}
          type={type}
          name={name}
          
        />
        <LabelStyles htmlFor="input-file" width={width} margin={margin}>
          <SpanWrapperStyles><SpanImgStyles></SpanImgStyles></SpanWrapperStyles>
          <SpanTextStyles>{text}</SpanTextStyles>
        </LabelStyles>
    </>
  );
};

export default InputFile;
interface ImgStyleProps {
  width: string;
  margin?: string;
}

const InputFileStyles = styled.input`
  display: none;
  visibility: hidden;
`;

const LabelStyles = styled.label<ImgStyleProps>`
  width: 100%;
  height: 50px;
  background: #1bbc9b;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: ${props => props.margin};
  @media (min-width: 490px) {
    max-width: ${props => props.width};
  }
}
`;

const SpanImgStyles = styled.span`
  display: block;
  background-image: url(${img});
  width: 30px;
  height: 25px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
`;
const SpanWrapperStyles = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  
`;

const SpanTextStyles = styled.span`
  color: #fff;
  cursor: pointer;
  padding-right: 15px;
`;
