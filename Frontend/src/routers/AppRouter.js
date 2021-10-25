import React from 'react'
import { Switch, BrowserRouter as Router} from "react-router-dom";
import Login from '../components/Login';
import MenuRouter from './MenuRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={ Login } />
                    <PrivateRoute path="/" component={ MenuRouter } />  
                    {/* <Redirect to = "/Login" /> */}
                </Switch>
            </div>
        </Router>

    )
}
