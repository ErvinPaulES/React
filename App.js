import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import login from './components/login'
import home from './components/home'
import details from './components/details';

export default function App() {

    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={login} title="Login" hideNavBar/>
          <Scene key="home" component={home} title="Home" hideNavBar/>
          <Scene key="details" component={details} title="Detalles" />
        </Stack>
      </Router>
    );
}

