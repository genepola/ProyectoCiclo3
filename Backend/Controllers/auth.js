const { response } = require('express');
const { populate } = require('../models/usuario');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');


const crearUsuario = async (req, res = response) => {
    const { name, password, cedula } = req.body;
    try {
        let usuario = await Usuario.findOne({ cedula });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con esta cédula'
            });
        }

        usuario = new Usuario(req.body);
        await usuario.save(); /** para la base de datos */
        console.log(usuario);
        res.status(201).json({
            ok: true,
            msg: 'exitoso',
            name,
            password
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error al guardar registro'
        })
    }
}
const getusuarios = async (req, resp = response) => {
    const usuarios = await Usuario.find();

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Usuarios',
        usuarios
    });
}

const actualizarUsuario = async (req, resp = response) => {
    const usuarioId = req.params.id;

    try {

        const usuario = await Usuario.findById(usuarioId);

        if (!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Usuario actualizado de manera exitosa',
            producto: usuarioActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }
}

const eliminarUsuario =  async (req, resp = response) => {

    const usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del Usuario no coincide con ningun elemento en la base de datos',
            });
        }

        await Usuario.findByIdAndDelete(usuarioId);

        resp.json({
            ok: true,
            msg: 'Usuario eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar el Usuario',
        });
    }
}

const loginUsuario = async (req, resp = response) => {

    const { cedula, password } = req.body;

    try {
        console.log(cedula, password);
        /**Confirmar cedula */
        let usuario = await Usuario.findOne({ cedula }); 
        console.log(usuario);
        if(!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar cedula */

        const validPassword = Usuario.findOne({ password });

        if(!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name
        });
        
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }    
}



module.exports = {
    crearUsuario,
    getusuarios,
    actualizarUsuario,
    eliminarUsuario,
    loginUsuario
};