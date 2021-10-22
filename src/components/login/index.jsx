import React, { Fragment } from "react";
import InputComponent from "../tags/input";
import ButtonComponent from "../tags/button";

import {
    LoginContainer,
    LoginMain,
    LoginForm,
    LoginInfo,
    LoginInfoContent,
    LoginTitleInfo,
    LogoRipley
} from './styles';

class LoginApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }

        this.userName = React.createRef();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/home");
    }

    isFormValid = () => {

        if (
            this.state.username !== undefined &&
            this.state.username !== null &&
            this.state.username !== "" &&
            this.state.password !== undefined &&
            this.state.password !== null &&
            this.state.password !== ""
        ) {
            return true;
        }
        return false
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
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
                                    value={this.state.username}
                                    onChange={this.handleChange}
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
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                    sx={{ margin: '5px' }}
                                />

                                <ButtonComponent
                                    disabled={!this.isFormValid()}
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
}


export default LoginApp;