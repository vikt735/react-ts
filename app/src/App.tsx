import {useContext, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Container  from './components/UI/Container';
import Header from './components/Header';
import Table from './components/UI/Table';

const App = () => {
  const {store} = useContext(Context);
  
    useEffect(() => {
      if (localStorage.getItem('token')) {
          store.checkAuth()
      }
  }, [store])

    if (store.isLoading) {
      return <div>Загрузка...</div>
    }
    if(!store.isAuth) {
      return (
        <Container>
          <LoginForm/> 
        </Container>
      )
      
    }
  return (
    <Container>
      <Header />
      <Table />
    </Container>
  );
};

export default observer(App);

