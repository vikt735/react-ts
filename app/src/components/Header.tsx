import React, {useContext} from 'react';
import styled from 'styled-components';
import Text from './UI/Text';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Button from './UI/Button';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const {store} = useContext(Context);
  return (
    <HeaderStyles>
      <Text>{store.isAuth ? `Пользователь: ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</Text>
      <Button onClick={() => store.logout()} margin={'30px 15px'} background={'#fff'}>Выйти</Button>
    </HeaderStyles>
  );
};

export default observer(Header);

const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;