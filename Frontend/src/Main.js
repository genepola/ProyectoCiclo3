import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gestionusuarios from './components/Gestionusuarios';
import Gestionventas from "./components/gestionventas";
import Gestionproductos from "./components/Gestionproductos";
import Ingresoproductos from "./components/Ingresoproductos";
import Ingresousuarios from "./components/Ingresousuarios";
import Ingresoventas from "./components/Ingresoventas";


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

            <Switch>
                <Route exact path="/Ingresoproductos" component={Ingresoproductos} />
            </Switch>

            <Switch>
                <Route exact path="/Ingresoventas" component={Ingresoventas} />
            </Switch>

            <Switch>
                <Route exact path="/Ingresousuarios" component={Ingresousuarios} />
            </Switch>

        </main>
    )
}

export default Main