import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Pesquisar from './Pages/Pesquisar'
import Pesquisa from './Pages/Pesquisa'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Pesquisar} />
            <Route exact path="/pesquisa" component={Pesquisa} />
        </Switch>
    </BrowserRouter>
);

export default Routes;