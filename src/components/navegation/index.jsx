import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import './style.css';

import { validateSession, getUsername, clearSession } from '../utils/session';

import {
    NavegationMenuContainer,
    NavegationMenu,
    UserContainer,
    UserName,
    UserMail,
    ContainerDataUser,
    IconUser,
    NavegationList,
    NavegationListItem,
    BlockButtonSignOff,
    NavegationListSubMenu,
    NavegationListSubMenuItem

} from "./styles";

class NavegationComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            hiddenMenu: true
        }
    }

    logout = () => {
        clearSession();
        window.location = "/";
    };

    render() {
        return (
            <NavegationMenuContainer id="NavegationMenuContainer">
                <NavegationMenu id="NavegationMenu">
                    <UserContainer>
                        <IconUser src="images/login.svg" />
                        <ContainerDataUser>
                            <UserName>
                                {validateSession()
                                    ? getUsername().toUpperCase()
                                    : (window.location = "/")}
                            </UserName>
                            <UserMail>mail@aligare.cl</UserMail>
                        </ContainerDataUser>
                    </UserContainer>

                    <NavegationList>
                        <Link to={{ pathname: "/home" }} style={{ textDecoration: "none" }}>
                            <NavegationListItem>Inicio</NavegationListItem>
                        </Link>

                        <Link to={{ pathname: "/home/accountentries" }} style={{ textDecoration: "none" }}>
                            <NavegationListItem>
                                Asientos a reprocesar
                            </NavegationListItem>
                        </Link>

                        <div style={{ cursor: "pointer" }}>
                            <NavegationListSubMenu id="myMenu" onClick={(e) => {
                                e.preventDefault();
                                this.state.hiddenMenu ? this.setState({ hiddenMenu: false }) : this.setState({ hiddenMenu: true })
                            }}>
                                Reportes
                                <div id="menuItem" hidden={this.state.hiddenMenu}>
                                    <Link to={{ pathname: "/home/reports/accounting" }} style={{ textDecoration: "none" }}>
                                        <NavegationListSubMenuItem>
                                            Reportes de asientos contables
                                        </NavegationListSubMenuItem>
                                    </Link>
                                    <Link to={{ pathname: "/home/reports/logs" }} style={{ textDecoration: "none" }}>
                                        <NavegationListSubMenuItem>
                                            Reportes de Logs de carga
                                        </NavegationListSubMenuItem>
                                    </Link>
                                    <Link to={{ pathname: "/home/reports/quadrature" }} style={{ textDecoration: "none" }}>
                                        <NavegationListSubMenuItem>
                                            Reportes de Cuadraturas
                                        </NavegationListSubMenuItem>
                                    </Link>
                                </div>
                            </NavegationListSubMenu>
                        </div>

                    </NavegationList>
                    <BlockButtonSignOff id="botonOFF">
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.logout}
                            className="colorButton"
                        >
                            Cerrar sesión
                        </Button>
                    </BlockButtonSignOff>
                </NavegationMenu>



            </NavegationMenuContainer>
        );
    }

}

export default NavegationComponent;