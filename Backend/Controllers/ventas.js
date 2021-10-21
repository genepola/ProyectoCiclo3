const { response } = require('express');
const ProductoVenta = require('../models/ProductoVenta');
const VentasModelo = require('../models/ventas');


const crearVenta = async (req, res = response) => {
    //const { IDCliente, Cliente, Fecha } = req.body;
    try {
        let venta = new VentasModelo(req.body);
        await venta.save(); /** para la base de datos */
        let productoVenta = ProductoVenta.save();
    res.status(201).json({
        ok:true,
        msg:'exitoso',
        venta
    });
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'error al guardar registro'
        })
    }
}

const getVenta = async (req, resp = response) => {
    const venta = await VentasModelo.find();
    resp.status(200).json({
        ok:true,
        msg: 'Lista de ventas',
        venta
    });
}



const actualizarVenta = async (req, resp = response) => {
    const ventaId = req.params.id;

    try {

        const venta = await ventas.findById(ventaId);

        if (!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la base de datos',
            });
        }

        const ventaActualizada = await ventas.findByIdAndUpdate(ventaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Venta actualizada de manera exitosa',
            venta: ventaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar la venta',
        });
    }
}

const find = async (req, resp = response) => {
    try {
        const cedula = req.header('x-Cedula');
        console.log(cedula);
        let venta = await VentasModelo.find({Cedula:cedula});
        if(venta.length<=0){
            return resp.status(401).json({
                ok: false,
                msg: 'Venta No existe',
            });
        }
        resp.status(200).json({
            ok: true,
            msg: 'Venta Encontrada',
            venta
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Producto al encontrar el usuario',
        });
    }

}



const getEstadosVentas = async (req, resp = response) => {
    try {

        const EstadoVenta = await EstadoVenta.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de estado de la venta',
            estado
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar el estado de la venta',
        });
    }
}



module.exports={
    crearVenta,
    getVenta,
    actualizarVenta,
    find,
    getEstadosVentas
};
