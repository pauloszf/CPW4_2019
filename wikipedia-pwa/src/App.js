import React from 'react';
import Routes from './Router';
import HttpsApp from 'react-https-redirect'

function App() {
  return(
    <HttpsApp> 
      <Routes />
    </HttpsApp>
  )     
}

export default App;
