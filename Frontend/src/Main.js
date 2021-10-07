import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gestionusuarios from './components/Gestionusuarios';
import Gestionventas from "./components/gestionventas";
import Gestionproductos from "./components/Gestionproductos";


const Main=() =>{
    return (
        <main>
            
            <Switch>
                <Route exact path="/gestionventas" component={Gestionventas} />
            </Switch>

            <Switch>
                <Route exact path="/Gestionusuarios" component={Gestionusuarios} />
            </Switch>

            <Switch>
                <Route exact path="/Gestionproductos" component={Gestionproductos} />
            </Switch>

        </main>
    )
}

export default Main