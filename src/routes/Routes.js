import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from '../pages/Login';
import { Registro } from '../pages/Registro';
import { Home } from '../pages/Home';


function Routes() {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Registro' component={Registro} />
        
        
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;