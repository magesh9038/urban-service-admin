import './App.css';
import React, { Fragment } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



import Admin from '../src/component/Admin/Admin';
import Users from '../src/component/Admin/users';
import Dealers from '../src/component/Admin/dealers';

const App = () =>
    <Router>
        <Routes>

            <Route exact path='/' element={<Admin/>} />
            <Route exact path='/users' element={<Users/>} />
            <Route exact path='/dealers' element={<Dealers/>} />
        </Routes>
    </Router>



export default App;
