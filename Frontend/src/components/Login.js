import React from 'react'
import Logo from '../assets/img/logo_col_tech.png'
import SignIn from '../assets/img/Sign_In.png'
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import Background from '../assets/img/Fondo.png'

function Login() {

    const responseGoogle = async(response) => {
        try {
            const { status, data } = await axios({
                method: 'POST',
                url: 'http://localhost:4500/proyecto/auth/google/login',
                headers: {
                    'Authorization': `Bearer ${response.tokenId}`
                }
            });
            console.log('status', status);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div>
            <body>
                <img src={Logo} alt="" id="logo" />
                <section class="login">
                    <h5>Ingreso de Usuario</h5>
                    <input class="controles" type="text" name="Usuario" placeholder="Usuario" />
                    <input class="controles" type="password" name="Contraseña" placeholder="Contraseña" />
                    <input class="botones" type="submit" name="" value="Ingresar" />
                    <GoogleLogin
                        clientId="846374279501-liat6l7avt6go3e3n38asktodbgefmh2.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </section>

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