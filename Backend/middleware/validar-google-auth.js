const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
<<<<<<< HEAD
const client =new OAuth2Client('91017389739-bssvesn7urkt9hkub27535rlqegf0r41.apps.googleusercontent.com');
=======
const client =new OAuth2Client('628863302465-kcd66rre1l01gtt8bishe6i0scvv46n8.apps.googleusercontent.com');
>>>>>>> Actualizar_Productos



const validarGoogleAuth = (req, res = response, next)=>{
    let token='';
    token = req.headers['x-access-token'] || req.headers['authorization'];
    console.log("Primera vez ", token);
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado un token valido'
        })
    }

    if(token.startsWith('Bearer')){
        token = token.slice(7, token.length);
    }

    try {
<<<<<<< HEAD
        client.verifyIdToken({ idToken: token, audience: '91017389739-bssvesn7urkt9hkub27535rlqegf0r41.apps.googleusercontent.com' })
=======
        client.verifyIdToken({ idToken: token, audience: '628863302465-kcd66rre1l01gtt8bishe6i0scvv46n8.apps.googleusercontent.com' })
>>>>>>> Actualizar_Productos
            .then((response) => {

                const { sub, name, email } = response.payload;

                req.uid = sub;
                req.name = name;
                req.email = email;
                next();
            }).catch((err) => {
                console.log(err);
                return res.status(401).json({
                    ok: false,
                    msg: 'Token invalido'
                });
            });

    }catch(error){
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }
}

module.exports = {
    validarGoogleAuth
}