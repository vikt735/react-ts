import React, {} from 'react';
import styled from 'styled-components';
import TableForm from './TableForm';
import TableList from './TableList';
import {observer} from "mobx-react-lite";

const Table: React.FC = () => {
  return (
    <>
    <TableForm />
    <ResponsiveStyles>
    <TableStyles>
      <TheadStyles>
        <TrStyles>
          <ThStyles>Дата</ThStyles>
          <ThStyles>Модель</ThStyles>
          <ThStyles>Изображение</ThStyles>
          <ThStyles>Бренд</ThStyles>
          <ThStyles>Описание</ThStyles>
          <ThStyles>Цвет</ThStyles>
          <ThStyles>Цена</ThStyles>
          <ThStyles>x</ThStyles>
        </TrStyles>
      </TheadStyles>
      <TbodyStyles>
        <TableList/>
      </TbodyStyles>
    </TableStyles>
  </ResponsiveStyles>
  </>
  );
};

export default observer(Table);

const ResponsiveStyles = styled.div`
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 35px;
`;

const TableStyles = styled.table`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-collapse: collapse;
`;
const TheadStyles = styled.thead`
  
`;
const TrStyles = styled.tr`
`;
const ThStyles = styled.th`
  border: 1px solid  rgba(0,0,0,0.2);
  padding: 0.7rem 0.5rem;
`;
const TbodyStyles = styled.tbody`
  
`;