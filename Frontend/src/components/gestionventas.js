import React, { useEffect, useState } from 'react';
import Headergestventas from './Headergestventas';
import Agregar from '../assets/img/Agregar.png';
import Editar from '../assets/img/Editar.png';
import Guardar from '../assets/img/Guardar.png';
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import notie from 'notie';
import 'notie/dist/notie.css';
import { listarVentas } from '../Services/Ventas.service';

function Gestionventas() {

    const auth = useAuth();
    const [venta, setVentas] = useState([]);

    const getVentas = async () => {
        try {
            const { data } = await listarVentas(auth.token);
            setVentas(data.venta);
            console.log(venta);

        } catch ({response: error}) {

            console.log(error);
            if(error.status === 401) {
                setTimeout(() => {
                    auth.logout();
                }, 3000);
                notie.alert({ text: error.data.msg, type: 'warning', time: 3 });
            } else {
                notie.alert({ text: error.data.msg, type: 'error', time: 3 });
            }
            

        }
    }

    useEffect(()=>{
        getVentas();
    },[])


    return (

        <div >
            <Headergestventas />
            <div className="iconosVentas">
                <ul>
                    <li>

                    <Link to="Ingresoventas/new"><img src={Agregar} alt=""/></Link>
                        <span>Nueva Venta</span>

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div className="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}

                        {/* <img src="Imagenes/Agregar.png" alt=""> */}
                        {/* <div className="title"><span><Link to="Ingresoventas">Nueva venta</Link></span></div> */}
                    </li>
                    <li>
                    <Link to="Ingresoventas/edit"><img src={Editar} alt=""/></Link>
                        <span>Editar Venta</span>
                    </li>
                    <li>
                    <img src={Guardar} alt=""/> 
                        <span>Guardar Venta</span>
                    </li>
                </ul>

            </div>
            <div className="filtro">
                <span>Filtro</span>
                <select className="redondo">
                    <option value="">ID venta</option>
                    <option value="">ID Cliente</option>
                    <option value="">Nombre Cliente</option>
                </select>
                <input type="text" className="redondo" />
            </div>
            <div className="divTabla">
                <table>
                    <tr>
                        <th>Id Venta</th>
                        <th>Cliente</th>
                        <th>Fecha de venta</th>
                        <th>Total Venta</th>
                        <th>Descripcion prodcuto</th>
                        <th>Valor prodcuto</th>
                        <th>Estado</th>
                    </tr>
                    {
                        venta.map((ventas, index)=>(
                            <tr key={ventas._id}>
                            <td>{ventas.Cedula}</td>
                            <td>{ventas.Cliente}</td>
                            <td>{ventas.Fecha}</td>
                            <td>{ventas.Cantidad}</td>
                            <td>{ventas.Productos.Descripcion}</td>
                            <td>{ventas.Productos.ValorUnitario}</td>
                            <td>{ventas.EstadoVenta.estado}</td>

                        </tr>
                        ))
                    }
                </table>
            </div>
        </div>

    )
}

export default Gestionventas
