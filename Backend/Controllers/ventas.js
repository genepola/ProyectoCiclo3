const { response } = require('express');
const ventas = require('../models/venta');
const  VentasModelo  = require('../models/ventas');


const crearVenta = async (req, res = response) => {
    const { IDVenta, IDCliente, Cliente, Fecha, Cantidad, ValorUnitario, Descripcion, Estado } = req.body;
    try {
        let venta = await VentasModelo.findOne({ ID });        
      
        venta = new VentasModelo(req.body);
        await venta.save(); /** para la base de datos */
   
    res.status(201).json({
        ok:true,
        msg:'exitoso',
        IDVenta,
        IDCliente,
        Cliente,
        Fecha
    });
    } catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'error al guardar registro'
        })
    }
}

const getventas = async (req, resp = response) => {
    const venta = await VentasModelo.find().populate('IDVenta','Fecha','Cliente','TotalVenta','EstadoVenta');
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


const findById = async (req, resp = response) => {
    try {
        const ventaId = req.params.id;
        const venta = await venta.findById(ventaId).populate('IDVenta','Fecha','Cliente','TotalVenta','EstadoVenta');
        if (!venta) {
            resp.status(400).json({
                ok: false,
                msg: 'Venta no encontrado'
            });
        }

        resp.status(200).json({
            ok: true,
            msg: 'Consulta Exitosa',
            venta
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar la venta',
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
    getventas,
    actualizarVenta,
    findById,
    getEstadosVentas
};
