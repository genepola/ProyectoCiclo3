const { response }= require('express');
const  Usuario  = require('../models/usuario');
const crearUsuario = async (req, res = response) => {
   const { name, password, cedula } = req.body;
    try {
        let usuario = await Usuario.findOne({ cedula });        

        if(usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }
        
        usuario = new Usuario(req.body);
        await usuario.save(); /** para la base de datos */
   
    res.status(201).json({
        ok:true,
        msg:'exitoso',
        name,
        password
    });
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'error al guardar registro'
        })
    }
}


module.exports={crearUsuario};