import './App.css';
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

import { BrowserRouter,   Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";



import Admin from '../src/component/Admin/Admin';
import users from '../src/component/Admin/users';
import dealers from '../src/component/Admin/dealers';

const App = () => 
<BrowserRouter>
    <Fragment>
      
        <Route exact path='/' component={Admin}/>
        <Route exact path='/users' component={users}/>
        <Route exact path='/dealers' component={dealers}/>

    </Fragment>
    </BrowserRouter>
export default App;
