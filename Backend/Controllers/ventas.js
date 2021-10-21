const { response } = require('express');
const ProductoVenta = require('../models/ProductoVenta');
const VentasModelo = require('../models/ventas');
const EstadoVenta = require('../models/EstadoVenta');


const crearVenta = async (req, res = response) => {
    //const { IDCliente, Cliente, Fecha } = req.body;
    try {
        let venta = new VentasModelo(req.body);
        
        /* let ProductoVenta = new  */
        await venta.save(); /** para la base de dato*/
        const jsonProductoVenta= {IdVenta:venta.id,IdProducto: venta.Descripcion};
        let ventaProducto = new ProductoVenta(jsonProductoVenta);
        await ventaProducto.save();

        res.status(201).json({
            ok: true,
            msg: 'exitoso',
            venta
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'error al guardar registro'
        })
    }
}

//* Listar todos
const getVenta = async (req, resp = response) => {
    const venta = await VentasModelo.find().populate('EstadoVenta','estado').populate('Productos', ['Descripcion', 'ValorUnitario']);
    resp.status(200).json({
        ok: true,
        msg: 'Lista de ventas',
        venta
    });
}



const actualizarVenta = async (req, resp = response) => {
    const ventaId = req.params.id;

    try {

        const venta = await VentasModelo.findById(ventaId);

        if (!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la base de datos',
            });
        }

        const ventaActualizada = await VentasModelo.findByIdAndUpdate(ventaId, req.body, { new: true });

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
        const idVenta = req.header('x-idVenta');
        const cliente = req.header('x-cliente');
        console.log(cedula);
        console.log(idVenta);
        console.log(cliente);
        let venta = '';
        if (idVenta && idVenta.length === 24) {
            venta = await VentasModelo.findById(idVenta).populate('estadoVenta','estado');
        } else if (cedula && cedula.length > 0) {
            venta = await VentasModelo.find({ Cedula: cedula }).populate('estadoVenta','estado');
        } else if(cliente && cliente.length>0){
            venta = await VentasModelo.find({Cliente:cliente}).populate('estadoVenta','estado');
        } 
        if (venta.length <= 0 || !venta ) {
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

        const estadoVenta = await EstadoVenta.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de estado de la venta',
            estadoVenta
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar el estado de la venta',
        });
    }
}


const getproductosVenta = async (req, resp = response) => {
    try {

        const productoVenta = await ProductoVenta.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de estado de la venta',
            productoVenta
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al encontrar el estado de la venta',
        });
    }
}  

module.exports = {
    crearVenta,
    getVenta,
    actualizarVenta,
    find,
    getEstadosVentas,
    getproductosVenta
};
