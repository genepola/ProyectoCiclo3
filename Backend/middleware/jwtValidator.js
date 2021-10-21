const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    /**x-token headers */

    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado un toke valido'
        });
    }

    // console.log(token);

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.Secret_JWT
        );

        req.uid = uid;
        req.name = name;
        

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }

    next();

}

module.exports = {
    validarJWT
}