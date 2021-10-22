import React, { Fragment, useState } from "react";
import InputComponent from "../tags/input";
import ButtonComponent from "../tags/button";

import { saveToken, saveUsername } from "../utils/session";

import {
    LoginContainer,
    LoginMain,
    LoginForm,
    LoginInfo,
    LoginInfoContent,
    LoginTitleInfo,
    LogoRipley
} from './styles';

const LoginApp = ({ history }) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { username, password } = user;

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveToken("token prueba");
        saveUsername(username);

        history.push("/home");
    }

    const isFormValid = () => {
        if (
            username !== undefined &&
            username !== null &&
            username !== "" &&
            password !== undefined &&
            password !== null &&
            password !== ""
        ) {
            return true;
        }
        return false
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <LoginContainer>
                    <LoginMain id="LoginMain">
                        <LoginInfo id="LoginInfo">
                            <LoginInfoContent id="LoginInfoContent">
                                <LogoRipley src="/images/logo-ripley.png" alt="Logo Ripley" />
                                <LoginTitleInfo>Bienvenido!</LoginTitleInfo>
                            </LoginInfoContent>
                        </LoginInfo>
                        <LoginForm>
                            <InputComponent
                                id="outlined-basic-text"
                                autoComplete='off'
                                size="small"
                                label="Usuario"
                                variant="outlined"
                                color="secondary"
                                placeholder="Usuario"
                                type="text"
                                value={username}
                                onChange={handleChange}
                                name="username"
                                sx={{ margin: '5px' }}
                            />

                            <InputComponent
                                id="outlined-basic-password"
                                autoComplete='off'
                                size="small"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={handleChange}
                                name="password"
                                sx={{ margin: '5px' }}
                            />

                            <ButtonComponent
                                disabled={!isFormValid()}
                                variant="contained"
                                color="secondary"
                                type="submit"
                                value="Ingresar"
                                sx={{ width: '50%', alignSelf: 'center', marginTop: '20px', marginBottom: '28px' }}>
                            </ButtonComponent>
                        </LoginForm>
                    </LoginMain>
                </LoginContainer>
            </form>
        </Fragment>
    );
}

export default LoginApp;