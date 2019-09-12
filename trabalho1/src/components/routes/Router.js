import React from '../../../node_modules/react';
import { Switch, Route} from '../../../node_modules/react-router-dom'

import Home from '../pages/Home';
import Bio from '../pages/Bio';
import Contato from '../pages/Contato';
import ROTAS from './Routes';

const routes = () => (
    <Switch>
        <Route exact path={ROTAS.INICIO} component={Home} />
        <Route exact path={ROTAS.BIO} component={Bio} />
        <Route exact path={ROTAS.CONTATO} component={Contato} />
    </Switch>
);
export default routes;
    