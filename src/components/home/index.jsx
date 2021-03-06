import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavegationComponent from "../navegation";

import { Container, MainHome, BlockContent } from './styles';

class HomeComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <NavegationComponent />
                    <MainHome>
                        <BlockContent>
                            <Switch>
                                {
                                    this.props.routes.map((rutas) => (
                                        <Route
                                            key={rutas.path}
                                            path={rutas.path}
                                            component={rutas.component}
                                            exact={rutas.exact} />
                                    ))
                                }
                            </Switch>
                        </BlockContent>
                    </MainHome>
                </Container>
            </BrowserRouter>
        );
    }
}

export default HomeComponent;