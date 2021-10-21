import React from 'react'
import Logo from '../assets/img/logo_col_tech.png'
import SignIn from '../assets/img/Sign_In.png'

function Login() {
    return (
        <div>
                <body>
                    <img src={Logo} alt="" id="logo" />
                    <section className="login">
                        <h5>Ingreso de Usuario</h5>
                        <input className="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input className="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input className="botones" type="submit" name="" value="Ingresar" />
                        <img src={SignIn} alt="" id="SignIn" />
                    </section>

                </body>
        </div>

    );
}
export default Login