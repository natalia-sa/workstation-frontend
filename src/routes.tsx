import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/index';
import UserPage from './pages/UserPage/index';
import ProfilePage from './pages/ProfilePage/index';
import Workstations from './pages/Workstations/index';
import RegisterPage from './pages/RegisterPage/index';
import MeetingPage from './pages/MeetingPage/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/login" exact  component={LoginPage}></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route path="/profile" component={ProfilePage}></Route>
            <Route path="/workstations" component={Workstations}></Route>
            <Route path="/register" component={RegisterPage}></Route>
            <Route path="/meetings" component={MeetingPage}></Route>
        </BrowserRouter>
    )
}