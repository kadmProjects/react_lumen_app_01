import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddTown from './components/towns/addTown'
import ShowTown from './components/towns/showTown'

export default function Routes() {

    return (
        <Switch>
            <Route path="/towns" component={ ShowTown } exact />
            <Route path="/town/add" component={ AddTown } exact />
        </Switch>
    );
}