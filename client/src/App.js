import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from "./components/layout/MainLayout";
import Home from './components/pages/Home';
import Article from './components/pages/Article';
import Top10 from './components/pages/Top10';

const App = () => (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/article/:id' component={Article} />
        <Route exact path='/top10/:id' component={Top10} />
      </Switch>
    </MainLayout>
);

export default App;