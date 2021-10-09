const { response }= require('express');
const { populate } = require('../models/usuario');
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
const getusuarios = async (req, resp = response) => {
    const usuarios = await Usuario.find();
      
    resp.status(200).json({
        ok:true,
        msg: 'Lista de Usuarios',
        usuarios
    });
}

const actualizarUsuario = (req, resp = response) => {
    resp.json({
        ok:true,
        msg: 'actualizar usuario'
    });
}

const eliminarUsuario = (req, resp = response) => {
    resp.json({
        ok:true,
        msg: 'eliminar usuario'
    });
}



module.exports={
    crearUsuario,
    getusuarios,
    actualizarUsuario,
    eliminarUsuario
};