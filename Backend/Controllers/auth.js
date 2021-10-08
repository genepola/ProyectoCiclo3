const { response }= require('express');

const crearUsuario = (req, res = response) => {
    const { name, password } = req.body;
    res.status(201).json({
        ok:true,
        msg:'exitoso',
        name,
        password
    });
}

module.exports={crearUsuario};