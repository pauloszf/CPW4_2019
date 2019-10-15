import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Feed from './Pages/Feed';
import AnimePage from './Pages/AnimePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Feed}  />
                <Route path="/anime/:id" component={AnimePage} />
            </Switch>
        </BrowserRouter>
    );
}
    
export default Routes;