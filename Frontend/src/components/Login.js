import React from 'react'
import Logo from '../assets/img/logo_col_tech.png'
import SignIn from '../assets/img/Sign_In.png'
import Background from '../assets/img/Fondo.png'

function Login() {
    return (
        <div>
            <section style={sectionStyle}>

                <body> {/* < img src={Background}    />   */}
                    <img src={Logo} alt="" id="logo" />
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input class="botones" type="submit" name="" value="Ingresar" />
                        <img src={SignIn} alt="" id="SignIn" />
                    </section>

                </body>
            </section>
        </div>

    );
}
export default Login