import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage/index';
import UserPage from './pages/UserPage/index';
import ProfilePage from './pages/ProfilePage/index';
import Workstations from './pages/Workstations/index';
import RegisterPage from './pages/RegisterPage/index';
import MeetingPage from './pages/MeetingPage/index';
import Reserve from './pages/Reserve/index';
import EditProfile from './pages/EditProfile/index';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage}></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route path="/profile" component={ProfilePage}></Route>
            <Route path="/workstations" component={Workstations}></Route>
            <Route path="/register" component={RegisterPage}></Route>
            <Route path="/meetings" component={MeetingPage}></Route>
            <Route path="/reserve" component={Reserve}></Route>
            <Route path="/edit" component={EditProfile}></Route>

        </Switch>
            
        </BrowserRouter>
    )
}