const { response } = require('express');
const VentasModelo = require('../models/ventas');


const crearVenta = async (req, res = response) => {
    //const { IDCliente, Cliente, Fecha } = req.body;
    try {
        let venta = new VentasModelo(req.body);
        await venta.save(); /** para la base de datos */
   
    res.status(201).json({
        ok:true,
        msg:'exitoso'
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
        const id = req.header('x-id');
/*         const productoId = {_id:id}
        console.log(productoId); */
        const cliente = {Cliente:req.header('x-Cliente')};
        const idCliente = {IDCliente:req.header('x-IDCliente')};
        console.log(cliente)
        console.log(idCliente)
        let venta="";
        if(id &&id.length===24){
            console.log("Entra al if");
            venta = await VentasModelo.findById(id)
        }else if (cliente){
            console.log("Entra else if");
            venta = await VentasModelo.findOne(cliente);
        }
        else{
            console.log("Entra else");
            venta = await VentasModelo.findOne(idCliente);
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
