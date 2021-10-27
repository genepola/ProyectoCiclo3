import React from 'react'
import Menu from '../components/Menu'
import { Switch, Route , Redirect} from "react-router-dom";
import gestionventas from '../components/gestionventas';
import Gestionusuarios from '../components/Gestionusuarios';
import Gestionproductos from '../components/Gestionproductos';
import Ingresoproductos from '../components/Ingresoproductos';
import Ingresoventas from '../components/Ingresoventas';
import Ingresousuarios from '../components/Ingresousuarios';

function MenuRouter() {
    return (
        <>
            <Menu />
            <main>
                <Switch>
                    <Route exact path="/Gestionventas" component={gestionventas} />
                </Switch>

                <Switch>
                    <Route exact path="/Gestionproductos" component={Gestionproductos} />
                </Switch>

                <Switch>
                    <Route exact path="/Ingresoproductos" component={Ingresoproductos} />
                </Switch>

                <Switch>
                    <Route exact path="/Ingresoventas/:id" component={Ingresoventas} />
                </Switch>

                <Switch>
                    <Route exact path="/Ingresousuarios/:id" component={Ingresousuarios} />
                </Switch>

                <Switch>
                    <Route exact path="/Gestionusuarios" component={Gestionusuarios} />
                </Switch>

                <Redirect to = "/Gestionusuarios" />

            </main>
        </>
    )
}

export default MenuRouter
