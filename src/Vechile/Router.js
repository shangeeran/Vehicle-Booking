import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './component/Home';
import BookingRegestration from "./component/BookingRegestration";

const Router = props => {

    return (
            <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/booking/:id' component={BookingRegestration}/>
                        <Redirect from='/' to='home'/>
                    </Switch>
            </BrowserRouter>
    );
};

export default Router;
