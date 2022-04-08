import React, {useContext, useEffect, useState} from 'react';
import TableService from '../../../services/TableService';
import {Context} from "../../../index";
import { ITable } from '../../../models/ITable'; 
import styled from 'styled-components';
import Button from "../Button";
import Input from "../Input";
import Select from '../Select';
import Textarea from '../Textarea';
import {observer} from "mobx-react-lite";
import editImg from '../../../assets/edit.svg';
import saveImg from '../../../assets/save.svg';
import nosaveImg from '../../../assets/nosave.svg';


const TableList: React.FC = () => {
  const [tr, setTr] = useState<ITable[]>([]);
  const [data, setData] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const {store} = useContext(Context);
  const [edit, setEdit] = useState(null)
  const onChangeTitle = (str: string) => {
    setTitle(str);
  };
  const onChangeDate = (str: string) => {
      setData(str);
  };
  const onChangeDescription = (str: string) => {
    setDescription(str);
  };
  const onChangeColor = (str: string) => {
    setColor(str);
  };
  const onChangePrice = (str: string) => {
      setPrice(str);
  };
  async function getTable() {
    try {
      const response = await TableService.AllTable();
        setTr(response.data);
    } catch (e) {
        console.log(e);
    }
  }

  useEffect(() => {
    getTable()
    }, [])

    function putTable(id: any, data:string, title:string, brand:string, description:string, color:string, price:string ) {
      try {
          setEdit(id)
          setData(data)
          setTitle(title)
          setBrand(brand)
          setDescription(description)
          setColor(color)
          setPrice(price)
      } catch (e) {
          console.log(e);
      }
    }
    function noSave(id: any) {
      setEdit(id)
      setEdit(null)
    }
    function save(id: any) {
      store.setAuth(true);
        let newTable = [...tr].map((item: ITable) => {
        if(item._id === id) {
            item.data = data
            item.title = title
            item.brand = brand
            item.description = description
            item.color = color
            item.price = price
            console.log(item);
        }
        return item;
    })
      setTr(newTable)
      setEdit(null)
    }
  return (
    <>
      {tr.map((item, index) => {
      if(edit === item._id) {
        return (
          <tr key={index}>
            <TdStyles>
              <Input
                onChange={onChangeDate}
                value={data}
                type={"date"}
                
                />
            </TdStyles>
            <TdStyles>
              <Input 
                  placeholder={'название'}
                  onChange={onChangeTitle}
                  value={title}
                  type={'text'}
                  />
            </TdStyles>
            <TdStyles>
              <ImgStyles><img src={item.img} alt={item.title}/></ImgStyles>
              
            </TdStyles>
            <TdStyles>
              <Select  onChange={setBrand}  value={brand} width={'200px'} margin={'10px 0'}/>
            </TdStyles>
            <TdStyles>
              <Textarea
              placeholder={'описание'}
              onChange={onChangeDescription}
              value={description}
  
              /> 
            </TdStyles>
            <TdStyles>
              <Input
                  placeholder={'цвет'}
                  onChange={onChangeColor}
                  value={color}
                  type={'text'}
              />
            </TdStyles>
            <TdStyles>
              <Input
                  placeholder={'цена'}
                  onChange={onChangePrice}
                  value={price}
                  type={'text'}
              />
            </TdStyles>
            <TdStyles>
              <ButtonBlockStyles>
                <Button background={'none'} onClick={()=> save(item._id)}><img src={saveImg} alt='img' /></Button>
                <Button onClick={() => noSave(item._id)} background={'none'}><img src={nosaveImg} alt='img' /></Button>
              </ButtonBlockStyles>
            </TdStyles>
            
          </tr>
        ) 
      } else {
        return (
          <tr key={item._id}>
            <TdStyles>{item.data}</TdStyles>
            <TdStyles>{item.title}</TdStyles>
            <TdStyles>
                <ImgStyles><img src={item.img} alt={item.title}/></ImgStyles>
            </TdStyles>
            <TdStyles>{item.brand}</TdStyles>
            <TdStyles>{item.description}</TdStyles>
            <TdStyles>{item.color}</TdStyles>
            <TdStyles>{item.price}</TdStyles>
            <TdStyles>
              <ButtonStyles>
                <Button background={'none'} onClick={() => putTable(item._id, item.data, item.title, item.brand, item.description, item.color,  item.price )} ><img src={editImg} alt='img' /></Button>
              </ButtonStyles>
            </TdStyles>
          </tr>
          
        )
      }
    })}
    </>
  );
};

export default observer(TableList);

const TdStyles = styled.td`
    border: 1px solid rgba(0,0,0,0.2);
    padding: 0.7rem 0.5rem;
    vertical-align: middle;
    &:nth-child(5){
      width: 400px;
    }
`;
const ButtonStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const ButtonBlockStyles = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  
`;
const ImgStyles = styled.div`
  max-width: 150px;
  img {
    width: 100%;
  }
`;
