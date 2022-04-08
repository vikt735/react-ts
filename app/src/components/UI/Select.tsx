import React, {useContext} from "react";
import styled from 'styled-components';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

interface SelectProps {
    onChange: (value: string) => void;
    value?: any;
    width?: string;
    margin?: string;
    
}

    const Select: React.FC<SelectProps> = ({onChange,  value, width, margin}) => {
      const {store} = useContext(Context);
      function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
        onChange(e.currentTarget.value);
      }
    return (
      <>
        <SelectStyles onChange={handleOnChange} value={value} width={width} margin={margin}>
          <option >Выберите модель</option>
          {store.options.map((item, index) => {
            return (
              <option key={index} value={item} >{item}</option>
            )
          })}
        </SelectStyles>  
      </>
    );
};

export default observer(Select);

interface SelectStyleProps {
  width?: string;
  margin?: string;
}
const SelectStyles = styled.select<SelectStyleProps>`
  display: block; 
  background: #fff;
  color: #333;
  border: none;
  padding: 14.5px 15px 15px 9px;
  border-radius: 5px 0px 0px 5px;
  height: 50px;
  width: 100%;
  color: #958a8a;
  margin: ${props => props.margin};
  @media (min-width: 490px) {
    max-width: ${props => props.width};
  }
`;








