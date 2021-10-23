import React from 'react'
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../components/Login';
import MenuRouter from './MenuRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Login" component={Login} />
                    <Route path="/" component={MenuRouter} />
                    {/* <Redirect to = "/Login" /> */}
                </Switch>
            </div>
        </Router>

    )
}
