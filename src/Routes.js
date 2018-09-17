import React from "react";
import Board from "./Simple";
import MassIndex from "./MassIndex";
import { Link, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/simple' component={Board}/>
            <Route exact path='/mass' component={MassIndex}/>
        </Switch>
        <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/simple'>Simple Calculator</Link></li>
            <li><Link to='/mass'>Mass Index</Link></li>
        </ul>
        </nav>
    </main>
)

export default Routes;