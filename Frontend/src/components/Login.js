import React from 'react'
import Logo from '../assets/img/logo_col_tech.png'
import SignIn from '../assets/img/Sign_In.png'
import Background from '../assets/img/Fondo.png'

const responseGoogle = (resp) =>{
    console.log(resp);
    
}
function Login() {
    return (
        <div>
                <body>
                    <img src={Logo} alt="" id="logo" />
                    <section class="login">
                        <h5>Ingreso de Usuario</h5>
                        <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                        <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                        <input class="botones" type="submit" name="" value="Ingresar" />
                        <img src={SignIn} alt="" id="SignIn" />
                        
                        

                        <GoogleLogin
                            classname = "Ingresar"
                            clientId="513614895581-efcs9sriiinuo9v1ses66keutkctn7o5.apps.googleusercontent.com"
                            buttonText="iniciar sesion con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                        
                    </section>

                </body>
        </div>

    );
}
export default Login