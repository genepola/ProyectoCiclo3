const { response } = require('express');
const Usuario = require('../models/usuario');
const Rol = require('../models/rol');
const Estado = require('../models/EstadoUsuario');
const { generarJWT } = require('../Helper/jwt');



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
    const usuarios = await Usuario.find().populate('roles', 'name').populate('estado', 'status');
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

const eliminarUsuario = async (req, resp = response) => {

    const usuarioId = req.params.id;

    try {

        const usuario = await Usuario.findById(usuarioId);

        if (!usuario) {
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
        if (!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar cedula */

        const validPassword = Usuario.findOne({ password });

        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}


const getCategorias = async (req, resp = response) => {
    try {

        const categorias = await Rol.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de categorias',
            categorias
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar el usuario',
        });
    }
}

const getEstados = async (req, resp = response) => {
    try {

        const estado = await Estado.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de categorias',
            estado
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar la categoria',
        });
    }
}

const findById = async (req, resp = response) => {
    try {
        const usuarioId = req.params.id;
        const usuario = await Usuario.findById(usuarioId).populate('roleeee', 'name');
        if (!usuario) {
            resp.status(400).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        resp.status(200).json({
            ok: true,
            msg: 'Consulta Exitosa',
            usuario
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar el usuario',
        });
    }
}

const validarUsuarioGoogle = async (req, resp = response) => {
    const { uid, name, email } = req;

    try {
        let usuario = await Usuario.findOne({ email, idToken: uid }).populate('estado');
        console.log("ACAAA estado: ",usuario.estado.status);
        if (usuario) {
            if (usuario.estado.status === 'Pendiente' || usuario.estado.status === 'No autorizado') {

                resp.status(401).json({
                    ok: false,
                    msg: 'El usuario aun no ha sido autorizado por el administrador'
                });
            } else {

                /**Generar Token */
                const token = await generarJWT(usuario.id, usuario.name);

                resp.json({
                    ok: true,
                    msg: 'Ok',
                    uid: usuario.id,
                    name: usuario.name,
                    token
                });
            }
            const token = await generarJWT(usuario);
            resp.json({
                ok: true,
                msg: 'Usuario Logueado de manera exitosa',
                uid: usuario.uid,
                name: usuario.name,
                token
            })
<<<<<<< HEAD
        } else {
            usuario = new Usuario({ name, email, password: uid, idToken: uid, cedula: 4564654 });
            console.log("Entro else", usuario);
=======
        }else{
            usuario = new Usuario({ name, email, password: uid, idToken:uid, cedula: 10229});
            console.log("Entro else",usuario);
>>>>>>> Actualizar_Productos
            const newUser = await usuario.save();
            console.log("Entro else", newUser);
            resp.status(201).json({
                ok: true,
                msg: 'Usuario creado de manera exitosa',
                uid: usuario.uid,
                name: usuario.name
            })
        }
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al autenticar'
        });
    }

}


module.exports = {
    crearUsuario,
    getusuarios,
    actualizarUsuario,
    eliminarUsuario,
    loginUsuario,
    getCategorias,
    findById,
    getEstados,
    validarUsuarioGoogle
};