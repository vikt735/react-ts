import  {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Button from './UI/Button';
import Input from './UI/Input';
import Tabs from './UI/Tabs';
import Tab from './UI/Tabs/Tab';
import FormContainer from './UI/FormContainer';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);
    const onChangePassword = (str: string) => {
        setPassword(str);
    };
    const onChangeEmail = (str: string) => {
        setEmail(str);
    };
    return (
        <FormContainer width='400px' height='400px' margin='8% auto'>
            <Tabs>
                <Tab title={'Авторизация'}>

                    <Input
                    onChange={onChangeEmail}
                    value={email}
                    type={"text"}
                    placeholder={'Email'}
                    margin='10px 0'
                    name={'email'}
                    />
                    <Input
                        placeholder={'Пароль'}
                        onChange={onChangePassword}
                        value={password}
                        type={'password'}
                        margin='10px 0'
                        name={'password'}
                    />
                    <Button margin="25px 0" background={'#fff'} onClick={() => store.login(email, password)}>
                        Авторизация
                    </Button>
                </Tab>
                    <Tab title={'Регистрация'}>
                    <Input
                    onChange={onChangeEmail}
                    value={email}
                    type={"text"}
                    placeholder={'Email'}
                    margin='10px 0'
                    name={'email'}
                    />
                    <Input
                        placeholder={'Пароль'}
                        onChange={onChangePassword}
                        value={password}
                        type={'password'}
                        margin='10px 0'
                        name={'password'}
                    />
                    <Button margin="25px 0" background={'#fff'} onClick={() => store.registration(email, password)}>
                        Регистрация
                    </Button>
                    </Tab>
                </Tabs>
            
        </FormContainer>
    );
};

export default observer(LoginForm);
