import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import login from './components/login'
import home from './components/home'

export default function App() {

    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={login} title="Login" hideNavBar/>
          <Scene key="home" component={home} hideNavBar/>
        </Stack>
      </Router>
    );
}

