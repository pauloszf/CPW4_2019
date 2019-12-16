import React from 'react';
import HttpsApp from 'react-https-redirect'

import './App.scss';

import Routes from '../Routes';

const App = () => ( 
    <HttpsApp>
        <Routes />
    </HttpsApp>
)

export default App;
