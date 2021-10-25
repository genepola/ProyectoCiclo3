const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
const client =new OAuth2Client('846374279501-liat6l7avt6go3e3n38asktodbgefmh2.apps.googleusercontent.com');



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
        client.verifyIdToken({ idToken: token, audience: '846374279501-liat6l7avt6go3e3n38asktodbgefmh2.apps.googleusercontent.com' })
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