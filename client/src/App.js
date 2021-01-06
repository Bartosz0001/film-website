import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from "./components/layout/MainLayout";
import Home from './components/pages/Home';

const App = () => (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </MainLayout>
);

export default App;