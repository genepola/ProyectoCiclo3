import React from 'react'
import Logo from '../assets/img/logo_col_tech.png'
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import useAuth from '../hooks/useAuth';
import notie from 'notie';

const Login = () =>{
    const auth = useAuth();

    const responseGoogle = async (response) => {
        try {
            const { status, data } = await axios({
                method: 'POST',
                url: 'http://localhost:4500/proyecto/auth/google/login',
                headers: {
                    'Authorization': `Bearer ${response.tokenId}`
                }
            });
            console.log(response.tokenId);
            console.log('status', status);
            if(status===200){
                auth.setToken(data.token);
                auth.setUser({ uid: data.uid, name: data.name });
            }else if(status === 201){
                notie.alert({ text: data.msg, type: 'success', time: 10 });
            }
        } catch (error) {          
            if (error.response.status === 401) {
                notie.alert({ text: error.response.data.msg, type: 'warning', time: 10 });
            } else {
                notie.alert({ text: error.response.data.msg, type: 'error', time: 10 });
            }
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
<<<<<<< HEAD
                        clientId="91017389739-bssvesn7urkt9hkub27535rlqegf0r41.apps.googleusercontent.com"
=======
                        clientId="628863302465-kcd66rre1l01gtt8bishe6i0scvv46n8.apps.googleusercontent.com"
>>>>>>> Actualizar_Productos
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </section>
            </body>
        </div>

    );
}
export default Login