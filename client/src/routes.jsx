import { Switch, Route } from 'react-router-dom';

import { CreateUser } from './components/CreateUsers';
import { ListUsers } from './components/ListUsers';
import {EditUser } from './components/EditUsers'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/create-user">
                <CreateUser />
            </Route>
            <Route exact path="/">
                <ListUsers />
            </Route>
            <Route exact path="/edit-users">
                <EditUser />
            </Route>
        </Switch>
    );
}