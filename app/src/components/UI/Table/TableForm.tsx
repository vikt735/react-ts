import React, {useContext, useState, FocusEvent, useEffect} from 'react';
import Button from '../Button';
import Input from "../Input";
import FormContainer from '../FormContainer';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import styled from 'styled-components';
import InputFile from '../InputFile';
import Textarea from '../Textarea';
import Select from '../Select';
import axios from "axios"

const TableForm: React.FC = () => {
  const [data, setData] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [file, setFile] = useState<any>(null)
  const [color, setColor] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [dataСondition, setDataСondition] = useState<boolean>(false)
  const [titleСondition, setTitleСondition] = useState<boolean>(false)
  const [descriptionСondition, setDescriptionСondition] = useState<boolean>(false)
  const [colorСondition, setColorСondition] = useState<boolean>(false)
  const [priceСondition, setPriceСondition] = useState<boolean>(false)
  const [dataError, setDataError] = useState<string>('установите дату')
  const [titleError, setTitleError] = useState<string>('введите название')
  const [descriptionError, setDescriptionError] = useState<string>('введите описание')
  const [colorError, setColorError] = useState<string>('введите цвет')
  const [priceError, setPriceError] = useState<string>('введите цену')
  const {store} = useContext(Context);

  const onChangeTitle = (str: string) => {
    if(str !== '') {
      setTitle(str) 
      setTitleError('')
    } else {
      setTitleError('введите название')
    }
  };
  const onChangeDate = (str: string) => {
    if(str !== '') {
      setData(str) 
      setDataError('')
    } else {
      setDataError('установите дату')
    }
  };
  
  const onChangeImg = (str: any) => {
      setFile(str[0])
  };
  const onChangeDescription = (str: string) => {
    if(str !== '') {
      setDescription(str)
      setDescriptionError('')
    } else {
      setDescriptionError('введите описание')
    }
  };
  const onChangeColor = (str: string) => {
    if(str !== '') {
      setColor(str) 
      setColorError('')
    } else {
      setColorError('введите цвет')
    }
  };
  const onChangePrice = (str: string) => {
    if(str !== '') {
      setPrice(str) 
      setPriceError('')
    } else {
      setPriceError('введите цену')
    }
      
  }
  const blurHendler = (e: FocusEvent<HTMLInputElement>) => {
    switch(e.target.name) {
      case 'data':
        setDataСondition(true)
        break;
      case 'title':
        setTitleСondition(true)
        break;
      case 'color':
        setColorСondition(true)
        break;
      case 'price':
        setPriceСondition(true)
        break;
    }
  }
  const blurHendlerText = (e: FocusEvent<HTMLTextAreaElement>) => {
    if(e.target.name === 'description') {
      setDescriptionСondition(true)
    } 
  }
  async function Addtable () {
    store.setAuth(true);
    if(data || title || file || brand || description || color || price) {
      const form = new FormData()
      form.append('data', data)
      form.append('title', title)
      form.append('img', file)
      form.append('brand', brand)
      form.append('description', description)
      form.append('color', color)
      form.append('price', price)
    await axios.post('http://localhost:5000/api/table', form)
      .then((res:any) => res.json())
      .catch(e => console.log(e))
    } else {
      window.alert("Добавьте данные")
    }
    
  }  
  useEffect(() => {
    
  }, [store])
  return (
    <FormContainer width='460px' height='250px' margin="0 auto">
      <form >
        <H2Styles>Форма добавления модели в таблицу</H2Styles>
      <DivStyles>
          <DivItemStyles>
            <DivStart>
              {(dataСondition &&  dataError) && <p style={{color:'#85072a'}}>{dataError}</p>}
              <Input
                onChange={onChangeDate}
                value={data}
                type={"date"}
                width={'200px'}
                margin={'10px 0'}
                name={'data'}
                onBlur={blurHendler}
                />
            </DivStart>
            <DivEnd>
              <Select  onChange={setBrand}  value={brand} width={'200px'} margin={'10px 0'}/>
            </DivEnd>
          </DivItemStyles>
          <DivItemStyles>
            <DivStart>
              {(titleСondition &&  titleError) && <p style={{color:'#85072a'}}>{titleError}</p>}
              <Input
                  placeholder={'название'}
                  onChange={onChangeTitle}
                  value={title}
                  type={'text'}
                  width={'200px'}
                  margin={'10px 0'}
                  name={'title'}
                  onBlur={blurHendler}
                  />
            </DivStart>
            <DivEnd>
            <InputFile
                placeholder={'img'}
                accept={"image/*"}
                type={'file'}
                text={file ? 'файл выбран' : 'изображение'}
                width={'200px'}
                margin={'10px 0'}
                onChange={onChangeImg}
                name={'file'}
            />
            </DivEnd>
          </DivItemStyles>
          <DivItemStyles>
            <DivStart>
            {(colorСondition &&  colorError) && <p style={{color:'#85072a'}}>{colorError}</p>}
              <Input
                  placeholder={'цвет'}
                  onChange={onChangeColor}
                  value={color}
                  type={'text'}
                  width={'200px'}
                  margin={'10px 0'}
                  name={'color'}
                  onBlur={blurHendler}
              />
            </DivStart>
            <DivEnd>
            {(priceСondition &&  priceError) && <p style={{color:'#85072a'}}>{priceError}</p>}
            <Input
                placeholder={'цена'}
                onChange={onChangePrice}
                value={price}
                type={'text'}
                width={'200px'}
                margin={'10px 0'}
                name={'price'}
                onBlur={blurHendler}
            />
            </DivEnd>
            
          </DivItemStyles>
          <DivText>
          {(descriptionСondition &&  descriptionError) && <p style={{color:'#85072a'}}>{descriptionError}</p>}
              <Textarea
              placeholder={'описание'}
              onChange={onChangeDescription}
              value={description}
              onBlur={blurHendlerText}
              name={'description'}
              />  
            
          </DivText>
        <div>  
          <Button  margin={'25px 15px'} background={'#fff'} onClick={Addtable} >добавить</Button>
        </div>
        
    </DivStyles>
    </form>
    </FormContainer>
  );
};

export default observer(TableForm);

const DivStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const H2Styles = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  @media (min-width: 500px) {
    font-size: 24px;
`;
const DivItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 490px) {
    flex-wrap: nowrap;
  }
`;
const DivText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

`;
const DivStart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const DivEnd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
